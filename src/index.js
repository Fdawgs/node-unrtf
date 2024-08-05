"use strict";

const { spawn, spawnSync } = require("node:child_process");
const { readFile } = require("node:fs/promises");
const { gt, lt } = require("semver");
const { joinSafe, normalizeTrim } = require("upath");

const errorMessages = {
	3221225477: "Segmentation fault",
};
const rtfMagicNumber = "{\\rtf1";

// Cache immutable regex as they are expensive to create and garbage collect
const unrtfPathRegex = /(.+)unrtf/u;
// UnRTF version output is inconsistent between versions but always starts with the semantic version number
const unrtfVersionRegex = /^(\d{1,2}\.\d{1,2}\.\d{1,2})/u;

/**
 * @typedef {object} OptionDetails
 * @property {string} arg The argument to pass to the binary.
 * @property {string} type The type of the option (`boolean`, `string`, etc).
 * @property {string} minVersion The minimum version of the binary that supports this option.
 * @property {string} [maxVersion] The maximum version of the binary that supports this option (optional).
 */

/**
 * @typedef {{[key: string]: OptionDetails}} UnRTFAcceptedOptions
 */

/**
 * @typedef UnRTFOptions
 * @property {boolean} [noPictures] Disable the automatic storing of embedded
 * pictures to the current working directory.
 * @property {boolean} [noRemap] Disable charset conversion (only works for 8-bit charsets)
 * (UnRTF v0.20.5 or later only).
 * @property {boolean} [outputHtml] Generate HTML output.
 * @property {boolean} [outputLatex] Generate LaTeX output.
 * @property {boolean} [outputPs] Generate PostScript (PS) output (UnRTF v0.19.4 or earlier only).
 * @property {boolean} [outputRtf] Generate RTF output. (UnRTF v0.21.3 or later only).
 * @property {boolean} [outputText] Generate ASCII text output.
 * @property {boolean} [outputVt] Generate text output with VT100 escape codes.
 * @property {boolean} [outputWpml] Generate WPML output (UnRTF v0.19.4 or earlier only).
 * @property {boolean} [printVersionInfo] Print copyright and version info.
 * @property {boolean} [quiet] Do not print any leading comments in output (UnRTF v0.21.3 or later only).
 */

/**
 * @author Frazer Smith
 * @description Checks each option provided is valid, of the correct type, and can be used by specified
 * version of binary.
 * @ignore
 * @param {UnRTFAcceptedOptions} acceptedOptions - Object containing accepted options.
 * @param {{[key: string]: any}} options - Object containing options to pass to binary.
 * @param {string} version - Semantic version of binary.
 * @returns {string[]} Array of CLI arguments.
 * @throws If invalid arguments provided.
 */
function parseOptions(acceptedOptions, options, version) {
	/** @type {string[]} */
	const args = [];
	/** @type {string[]} */
	const invalidArgs = [];
	Object.keys(options).forEach((key) => {
		if (Object.hasOwn(acceptedOptions, key)) {
			// eslint-disable-next-line valid-typeof -- `type` is a string
			if (acceptedOptions[key].type === typeof options[key]) {
				// Skip boolean options if false
				if (acceptedOptions[key].type === "boolean" && !options[key]) {
					return;
				}
				args.push(acceptedOptions[key].arg);
			} else {
				invalidArgs.push(
					`Invalid value type provided for option '${key}', expected ${
						acceptedOptions[key].type
					} but received ${typeof options[key]}`
				);
			}

			/* istanbul ignore next: unable to test due to https://github.com/jestjs/jest/pull/14297 */
			if (lt(version, acceptedOptions[key].minVersion)) {
				invalidArgs.push(
					`Invalid option provided for the current version of the binary used. '${key}' was introduced in v${acceptedOptions[key].minVersion}, but received v${version}`
				);
			}

			/* istanbul ignore next: unable to test due to https://github.com/jestjs/jest/pull/14297 */
			if (gt(version, acceptedOptions[key].maxVersion || version)) {
				invalidArgs.push(
					`Invalid option provided for the current version of the binary used. '${key}' is only present up to v${acceptedOptions[key].maxVersion}, but received v${version}`
				);
			}
		} else {
			invalidArgs.push(`Invalid option provided '${key}'`);
		}
	});
	if (invalidArgs.length === 0) {
		return args;
	}
	throw new Error(invalidArgs.join("; "));
}

class UnRTF {
	#unrtfPath;

	#unrtfVersion;

	/**
	 * @param {string} [binPath] - Path of UnRTF binary.
	 * If not provided, the constructor will attempt to find the binary
	 * in the PATH environment variable.
	 *
	 * For `win32`, a binary is bundled with the package and will be used
	 * if a local installation is not found.
	 */
	constructor(binPath) {
		this.#unrtfPath = "";

		/* istanbul ignore else: requires specific OS */
		if (binPath) {
			/** @type {string|undefined} */
			this.#unrtfPath = binPath;
		} else {
			const { platform } = process;
			const which = spawnSync(platform === "win32" ? "where" : "which", [
				"unrtf",
			]).stdout.toString();
			const unrtfPath = unrtfPathRegex.exec(which)?.[1];

			if (unrtfPath) {
				this.#unrtfPath = unrtfPath;
			}
			if (platform === "win32" && !unrtfPath) {
				this.#unrtfPath = joinSafe(
					__dirname,
					"lib",
					"win32",
					"unrtf-0.19.3",
					"bin"
				);
			}
		}

		/* istanbul ignore next: unable to test due to https://github.com/jestjs/jest/pull/14297 */
		if (!this.#unrtfPath) {
			throw new Error(
				`Unable to find ${process.platform} UnRTF binaries, please pass the installation directory as a parameter to the UnRTF instance.`
			);
		}
		this.#unrtfPath = normalizeTrim(this.#unrtfPath);

		/**
		 * Get version of UnRTF binary for use in `convert` function.
		 * UnRTF outputs the version into stderr.
		 */
		const version = spawnSync(joinSafe(this.#unrtfPath, "unrtf"), [
			"--version",
		]).stderr.toString();
		this.#unrtfVersion = unrtfVersionRegex.exec(version)?.[1] || "";

		/* istanbul ignore next: unable to test due to https://github.com/jestjs/jest/pull/14297 */
		if (!this.#unrtfVersion) {
			throw new Error("Unable to determine UnRTF version.");
		}

		/** @type {UnRTFAcceptedOptions} */
		this.unrtfAcceptedOptions = {
			noPictures: {
				arg: "--nopict",
				type: "boolean",
				minVersion: "0.0.1",
			},
			noRemap: {
				arg: "--noremap",
				type: "boolean",
				minVersion: "0.20.5",
			},
			outputHtml: {
				arg: "--html",
				type: "boolean",
				minVersion: "0.0.1",
			},
			outputLatex: {
				arg: "--latex",
				type: "boolean",
				minVersion: "0.0.1",
			},
			outputPs: {
				arg: "--ps",
				type: "boolean",
				minVersion: "0.0.1",
				maxVersion: "0.19.4",
			},
			outputRtf: { arg: "--rtf", type: "boolean", minVersion: "0.21.3" },
			outputText: { arg: "--text", type: "boolean", minVersion: "0.0.1" },
			outputVt: { arg: "--vt", type: "boolean", minVersion: "0.0.1" },
			outputWpml: {
				arg: "--wpml",
				type: "boolean",
				minVersion: "0.0.1",
				maxVersion: "0.19.4",
			},
			printVersionInfo: {
				arg: "--version",
				type: "boolean",
				minVersion: "0.0.1",
			},
			quiet: { arg: "--quiet", type: "boolean", minVersion: "0.21.3" },
		};
	}

	/**
	 * @description Returns the path of the UnRTF binary.
	 * @returns {string} Path of UnRTF binary.
	 */
	get path() {
		return this.#unrtfPath;
	}

	/**
	 * @description Returns the version of the UnRTF binary.
	 * @returns {string} Version of UnRTF binary.
	 */
	get version() {
		return this.#unrtfVersion;
	}

	/**
	 * @author Frazer Smith
	 * @description Converts an RTF file to HTML/LaTeX/RTF/TXT.
	 * Defaults to HTML output if no `output*` options are provided.
	 * UnRTF will use the directory of the original file to store embedded pictures.
	 * @param {string} file - Filepath of the RTF file to read.
	 * @param {UnRTFOptions} [options] - Options to pass to UnRTF binary.
	 * @returns {Promise<string>}  A promise that resolves with a stdout string, or rejects with an `Error` object.
	 */
	async convert(file, options = {}) {
		/**
		 * UnRTF will attempt to convert empty strings, missing files,
		 * and non-RTF files. Catch before passing to binary.
		 */
		let buff;
		try {
			// eslint-disable-next-line security/detect-non-literal-fs-filename -- File read is wanted
			buff = await readFile(normalizeTrim(file));
		} catch {
			throw new Error("File missing");
		}
		// Check for RTF specific magic number
		if (
			buff.toString().slice(0, rtfMagicNumber.length) !== rtfMagicNumber
		) {
			throw new Error(
				"File is not the correct media type, expected 'application/rtf'"
			);
		}

		const args = parseOptions(
			this.unrtfAcceptedOptions,
			options,
			this.#unrtfVersion
		);
		args.push(normalizeTrim(file));

		return new Promise((resolve, reject) => {
			const child = spawn(joinSafe(this.#unrtfPath, "unrtf"), args);

			let stdOut = "";
			let stdErr = "";

			child.stdout.on("data", (data) => {
				stdOut += data;
			});

			child.stderr.on("data", (data) => {
				stdErr += data;
			});

			child.on("close", (code) => {
				/* istanbul ignore else */
				if (stdOut !== "") {
					resolve(stdOut.trim());
				} else if (stdErr === "") {
					reject(
						new Error(
							// @ts-ignore: Second operand used if code is not in errorMessages
							errorMessages[code] ||
								`unrtf ${args.join(
									" "
								)} exited with code ${code}`
						)
					);
				} else {
					reject(new Error(stdErr.trim()));
				}
			});
		});
	}
}

module.exports.default = UnRTF; // ESM default export
module.exports.UnRTF = UnRTF; // TypeScript and named export

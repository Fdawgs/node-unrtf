"use strict";

const { spawn, spawnSync } = require("node:child_process");
const { open } = require("node:fs/promises");
const { normalize, resolve: pathResolve } = require("node:path");
const { platform } = require("node:process");
const freeze = require("ice-barrage");
const { gt, lt } = require("semver");

/**
 * @type {Readonly<Record<string, string>>}
 * @ignore
 */
const ERROR_MSGS = Object.freeze({
	3221225477: "Segmentation fault",
});
const RTF_MAGIC_NUMBER = "{\\rtf1";
const RTF_MAGIC_BUFFER = Buffer.from(RTF_MAGIC_NUMBER);
const RTF_MAGIC_NUMBER_LENGTH = RTF_MAGIC_NUMBER.length;

// Cache immutable regex as they are expensive to create and garbage collect
const UNRTF_PATH_REG = /(.+)unrtf/u;
// UnRTF version output is inconsistent between versions but always starts with the semantic version number
const UNRTF_VERSION_REG = /^(\d{1,2}\.\d{1,2}\.\d{1,2})/u;

/**
 * @typedef {object} OptionDetails
 * @property {string} arg The argument to pass to the binary.
 * @property {('boolean'|'number'|'string')} type The type of the option.
 * @property {string} minVersion The minimum version of the binary that supports this option.
 * @property {string} [maxVersion] The maximum version of the binary that supports this option (optional).
 */

/**
 * @typedef {Readonly<Record<string, Readonly<OptionDetails>>>} UnRTFAcceptedOptions
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
 * @typedef {object} UnRTFExtraOptions
 * @property {AbortSignal} [signal] An `AbortSignal` that can be used to cancel the operation.
 */

/**
 * @author Frazer Smith
 * @description Checks each option provided is valid, of the correct type, and can be used by specified
 * version of binary.
 * @ignore
 * @param {UnRTFAcceptedOptions} acceptedOptions - Object containing accepted options.
 * @param {UnRTFOptions} options - Object containing options to pass to binary.
 * @param {string} version - Semantic version of binary.
 * @returns {string[]} Array of CLI arguments.
 * @throws {Error} If invalid arguments provided.
 */
function parseOptions(acceptedOptions, options, version) {
	/** @type {string[]} */
	const args = [];
	/** @type {string[]} */
	const invalidArgs = [];

	// Imperative loops are faster than functional loops, see https://romgrk.com/posts/optimizing-javascript
	const keys = Object.keys(options);
	const keysLength = keys.length;
	for (let i = 0; i < keysLength; i += 1) {
		const key = keys[i];
		if (!Object.hasOwn(acceptedOptions, key)) {
			invalidArgs.push(`Invalid option provided '${key}'`);
			continue;
		}

		// @ts-ignore: Keys are from options, TS cannot infer this
		const option = options[key];
		const acceptedOption = acceptedOptions[key];
		const optionType = typeof option;

		if (acceptedOption.type === optionType) {
			// Boolean options set to false won't be passed to the binary; skip arg and version checks
			if (acceptedOption.type === "boolean" && !option) {
				continue;
			}
			args.push(acceptedOption.arg);
		} else {
			invalidArgs.push(
				`Invalid value type provided for option '${key}', expected ${
					acceptedOption.type
				} but received ${optionType}`
			);
		}

		if (lt(version, acceptedOption.minVersion)) {
			invalidArgs.push(
				`Invalid option provided for the current version of the binary used. '${key}' was introduced in v${acceptedOption.minVersion}, but received v${version}`
			);
		}

		if (
			acceptedOption.maxVersion &&
			gt(version, acceptedOption.maxVersion)
		) {
			invalidArgs.push(
				`Invalid option provided for the current version of the binary used. '${key}' is only present up to v${acceptedOption.maxVersion}, but received v${version}`
			);
		}
	}
	if (invalidArgs.length === 0) {
		return args;
	}
	throw new Error(invalidArgs.join("; "));
}

class UnRTF {
	#unrtfBin;
	#unrtfDir;
	#unrtfVersion;

	/** @type {UnRTFAcceptedOptions} */
	static #acceptedOptions = freeze({
		noPictures: {
			arg: "--nopict",
			type: "boolean",
			minVersion: "0.0.1",
			maxVersion: undefined,
		},
		noRemap: {
			arg: "--noremap",
			type: "boolean",
			minVersion: "0.20.5",
			maxVersion: undefined,
		},
		outputHtml: {
			arg: "--html",
			type: "boolean",
			minVersion: "0.0.1",
			maxVersion: undefined,
		},
		outputLatex: {
			arg: "--latex",
			type: "boolean",
			minVersion: "0.0.1",
			maxVersion: undefined,
		},
		outputPs: {
			arg: "--ps",
			type: "boolean",
			minVersion: "0.0.1",
			maxVersion: "0.19.4",
		},
		outputRtf: {
			arg: "--rtf",
			type: "boolean",
			minVersion: "0.21.3",
			maxVersion: undefined,
		},
		outputText: {
			arg: "--text",
			type: "boolean",
			minVersion: "0.0.1",
			maxVersion: undefined,
		},
		outputVt: {
			arg: "--vt",
			type: "boolean",
			minVersion: "0.0.1",
			maxVersion: undefined,
		},
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
			maxVersion: undefined,
		},
		quiet: {
			arg: "--quiet",
			type: "boolean",
			minVersion: "0.21.3",
			maxVersion: undefined,
		},
	});

	/**
	 * @param {string} [binDir] - Directory path of UnRTF binary.
	 * If not provided, the constructor will attempt to find the binary
	 * in the PATH environment variable.
	 *
	 * For `win32`, a binary is bundled with the package and will be used
	 * if a local installation is not found.
	 * @throws {Error} If UnRTF binary cannot be found or version cannot be determined.
	 */
	constructor(binDir) {
		this.#unrtfDir = "";

		if (binDir) {
			/** @type {string|undefined} */
			this.#unrtfDir = binDir;
		} else {
			/* istanbul ignore next: requires specific OS */
			const which = spawnSync(platform === "win32" ? "where" : "which", [
				"unrtf",
			]).stdout.toString();
			const unrtfDir = UNRTF_PATH_REG.exec(which)?.[1];

			if (unrtfDir) {
				this.#unrtfDir = unrtfDir;
			}

			/* istanbul ignore next: requires specific OS */
			if (platform === "win32" && !unrtfDir) {
				try {
					// @ts-ignore: Optional dependency
					// eslint-disable-next-line n/global-require -- Conditional require
					this.#unrtfDir = require("node-unrtf-win32");
				} catch {
					// Leave #unrtfDir empty; the generic "Unable to find ... binaries" error below will fire
				}
			}
		}

		if (!this.#unrtfDir) {
			throw new Error(
				`Unable to find ${platform} UnRTF binaries, please pass the installation directory as a parameter to the UnRTF instance.`
			);
		}
		this.#unrtfDir = normalize(this.#unrtfDir);

		this.#unrtfBin = pathResolve(this.#unrtfDir, "unrtf");

		// Version needed for option validation; which is output to stderr
		const version = spawnSync(this.#unrtfBin, [
			"--version",
		]).stderr.toString();
		this.#unrtfVersion = UNRTF_VERSION_REG.exec(version)?.[1] || "";

		if (!this.#unrtfVersion) {
			throw new Error("Unable to determine UnRTF version.");
		}
	}

	/**
	 * @description Returns the directory path of the UnRTF binary.
	 * @returns {string} Directory path of UnRTF binary.
	 */
	get path() {
		return this.#unrtfDir;
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
	 * @param {UnRTFExtraOptions} [extras] - Non-CLI options.
	 * @returns {Promise<string>}  A promise that resolves with a stdout string, or rejects with an `Error` object.
	 * @throws {Error} If the file is missing, not an RTF file, or if UnRTF returns an error.
	 */
	async convert(file, options = {}, extras = {}) {
		const { signal } = extras;

		let normalizedFile;

		// Catch empty strings, missing files, and non-RTF files, as UnRTF will attempt to convert them
		let fileHandle;
		try {
			normalizedFile = normalize(file);
			// eslint-disable-next-line security/detect-non-literal-fs-filename -- File open is wanted
			fileHandle = await open(normalizedFile, "r");

			const { buffer } = await fileHandle.read(
				Buffer.alloc(RTF_MAGIC_NUMBER_LENGTH),
				0,
				RTF_MAGIC_NUMBER_LENGTH,
				0
			);

			// Check for RTF specific magic number
			if (!buffer.equals(RTF_MAGIC_BUFFER)) {
				throw new Error(
					"File is not the correct media type, expected 'application/rtf'"
				);
			}
		} catch (err) {
			// @ts-ignore: Code property found in fs errors
			if (err instanceof Error && err.code !== "ENOENT") {
				throw err;
			}
			throw new Error("File missing");
		} finally {
			await fileHandle?.close();
		}

		const args = parseOptions(
			UnRTF.#acceptedOptions,
			options,
			this.#unrtfVersion
		);
		args.push(normalizedFile);

		return new Promise((resolve, reject) => {
			const child = spawn(this.#unrtfBin, args, { signal });

			let stdOut = "";
			let stdErr = "";
			let errorHandled = false;

			child.stdout.on("data", (data) => {
				stdOut += data;
			});

			child.stderr.on("data", (data) => {
				stdErr += data;
			});

			child.on("error", (err) => {
				errorHandled = true;
				reject(err);
			});

			child.on("close", (code) => {
				// If an error was already emitted, don't process the close event
				if (errorHandled) {
					return;
				}

				if (stdOut !== "") {
					resolve(stdOut.trim());
				} else if (stdErr === "") {
					reject(
						new Error(
							ERROR_MSGS[code ?? -1] ||
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

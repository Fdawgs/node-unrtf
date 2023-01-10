/* eslint-disable security/detect-child-process */
const fileType = require("file-type");
const fs = require("fs");
const path = require("upath");
const semver = require("semver");
const { execFile, spawn } = require("child_process");
const { promisify } = require("util");

const execFileAsync = promisify(execFile);

/**
 * @author Frazer Smith
 * @description Check each option provided is valid, of the correct type, and can be used by specified
 * version of binary.
 * @param {object} acceptedOptions - Object containing options that a binary accepts.
 * @param {object} options - Object containing options to pass to binary.
 * @param {string=} version - Semantic version of binary.
 * @returns {Array|Error} Array of CLI arguments or Error object if invalid arguments provided.
 */
function parseOptions(acceptedOptions, options, version) {
	const args = [];
	const invalidArgs = [];
	Object.keys(options).forEach((key) => {
		if (Object.prototype.hasOwnProperty.call(acceptedOptions, key)) {
			// eslint-disable-next-line valid-typeof
			if (typeof options[key] === acceptedOptions[key].type) {
				args.push(acceptedOptions[key].arg);
			} else {
				invalidArgs.push(
					`Invalid value type provided for option '${key}', expected ${
						acceptedOptions[key].type
					} but received ${typeof options[key]}`
				);
			}

			if (
				acceptedOptions[key].minVersion &&
				version &&
				semver.lt(version, acceptedOptions[key].minVersion)
			) {
				invalidArgs.push(
					`Invalid option provided for the current version of the binary used. '${key}' was introduced in v${acceptedOptions[key].minVersion}, but received v${version}`
				);
			}

			if (
				acceptedOptions[key].maxVersion &&
				version &&
				semver.gt(version, acceptedOptions[key].maxVersion)
			) {
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
	/**
	 * @param {string=} binPath - Path of UnRTF binary.
	 */
	constructor(binPath) {
		if (binPath) {
			this.unrtfPath = path.normalizeTrim(binPath);
		} else if (process.platform === "win32") {
			this.unrtfPath = path.joinSafe(
				__dirname,
				"lib",
				"win32",
				"unrtf-0.19.3",
				"bin"
			);
		} else {
			throw new Error(
				`${process.platform} UnRTF binaries are not provided, please pass the installation directory as a parameter to the UnRTF instance.`
			);
		}
	}

	/**
	 * @author Frazer Smith
	 * @description Converts an RTF file to HTML/LaTeX/RTF/TXT.
	 * UnRTF will use the directory of the original file to store embedded pictures.
	 * @param {string} file - Filepath of the RTF file to read.
	 * @param {object=} options - Object containing options to pass to binary.
	 * @param {boolean=} options.noPictures - Disable the automatic storing of embedded
	 * pictures to the directory of the original file.
	 * @param {boolean=} options.noRemap - Disable charset conversion (only works for 8-bit charsets)
	 * (UnRTF v0.20.5 or later only).
	 * @param {boolean=} options.outputHtml - Generate HTML output.
	 * @param {boolean=} options.outputLatex - Generate LaTeX output.
	 * @param {boolean=} options.outputPs - Generate PostScript (PS) output (UnRTF v0.19.4 or earlier only).
	 * @param {boolean=} options.outputRtf - Generate RTF output. (UnRTF v0.21.3 or later only).
	 * @param {boolean=} options.outputText - Generate ASCII text output.
	 * @param {boolean=} options.outputVt - Generate text output with VT100 escape codes.
	 * @param {boolean=} options.outputWpml - Generate WPML output (UnRTF v0.19.4 or earlier only).
	 * @param {boolean=} options.printVersionInfo - Print copyright and version info.
	 * @param {boolean=} options.quiet - Do not print any leading comments in output (UnRTF v0.21.3 or later only).
	 * @returns {Promise<string|Error>} Promise of stdout string on resolve, or Error object on rejection.
	 */
	async convert(file, options = {}) {
		const acceptedOptions = {
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

		try {
			/**
			 * UnRTF will attempt to convert empty strings/files, and non-RTF files
			 * so catch them here
			 */
			if (
				file === undefined ||
				// eslint-disable-next-line security/detect-non-literal-fs-filename
				fs.existsSync(path.normalizeTrim(file)) === false
			) {
				throw new Error("File missing");
			}

			const results = await fileType.fromFile(path.normalizeTrim(file));
			if (
				results === undefined ||
				results.mime === undefined ||
				results.mime !== "application/rtf"
			) {
				throw new Error(
					"File is not the correct media type, expected 'application/rtf'"
				);
			}

			const { stderr } = await execFileAsync(
				path.joinSafe(this.unrtfPath, "unrtf"),
				["--version"]
			);

			/**
			 * UnRTF outputs the version into stderr:
			 * v0.19.3 returns "0.19.3\r\n"
			 * v0.21.0 returns "0.21.10\nsearch path is: /usr/share/unrtf/\n"
			 */
			const versionInfo = /^(\d{1,2}\.\d{1,2}\.\d{1,2})/i.exec(stderr)[1];

			const args = parseOptions(acceptedOptions, options, versionInfo);
			args.push(path.normalizeTrim(file));

			return new Promise((resolve, reject) => {
				const child = spawn(
					path.joinSafe(this.unrtfPath, "unrtf"),
					args
				);

				let stdOut = "";
				let stdErr = "";

				child.stdout.on("data", async (data) => {
					stdOut += data;
				});

				child.stderr.on("data", async (data) => {
					stdErr += data;
				});

				child.on("close", async () => {
					/* istanbul ignore else */
					if (stdOut !== "") {
						resolve(stdOut.trim());
					} else {
						reject(new Error(stdErr.trim()));
					}
				});
			});
		} catch (err) {
			return Promise.reject(err);
		}
	}
}

module.exports = {
	UnRTF,
};

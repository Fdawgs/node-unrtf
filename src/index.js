const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFile } = require('child_process');
const util = require('util');

const execFileAsync = util.promisify(execFile);
const platform = os.platform();

/**
 * @author Frazer Smith
 * @description Check each option provided is valid and of the correct type.
 * @param {object} acceptedOptions - Object containing options that a binary accepts.
 * @param {object} options - Object containing options to pass to binary.
 * @returns {Promise<Array|Error>} Promise of array of CLI arguments on resolve, or Error object on rejection.
 */
function parseOptions(acceptedOptions, options) {
	return new Promise((resolve, reject) => {
		const args = [];
		const invalidArgs = [];
		Object.keys(options).forEach((key) => {
			if (Object.prototype.hasOwnProperty.call(acceptedOptions, key)) {
				// eslint-disable-next-line valid-typeof
				if (typeof options[key] === acceptedOptions[key].type) {
					args.push(acceptedOptions[key].arg);
					if (typeof options[key] !== 'boolean') {
						args.push(options[key]);
					}
				} else {
					invalidArgs.push(
						`Invalid value type provided for option '${key}', expected ${
							acceptedOptions[key].type
						} but recieved ${typeof options[key]}`
					);
				}
			} else {
				invalidArgs.push(`Invalid option provided '${key}'`);
			}
		});
		if (invalidArgs.length === 0) {
			resolve(args);
		} else {
			reject(new Error(invalidArgs.join('; ')));
		}
	});
}

class UnRTF {
	/**
	 * @param {string=} binPath - Path of UnRTF binary.
	 * Useful for Linux users who have UnRTF binary already installed.
	 */
	constructor(binPath) {
		if (binPath) {
			this.unrtfPath = binPath;
		} else {
			let unrtfPath;

			// Build path to UnRTF binary based on OS
			switch (platform) {
				// Windows OS
				case 'win32':
					unrtfPath = path.join(
						__dirname,
						'lib',
						'win32',
						'unrtf-0.19.3',
						'bin'
					);
					break;
				default:
					return new Error(`${platform} is NOT supported.`);
			}

			this.unrtfPath = unrtfPath;
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
			noPictures: { arg: '--nopict', type: 'boolean' },
			noRemap: { arg: '--noremap', type: 'boolean' },
			outputHtml: { arg: '--html', type: 'boolean' },
			outputLatex: { arg: '--latex', type: 'boolean' },
			outputPs: { arg: '--ps', type: 'boolean' },
			outputRtf: { arg: '--rtf', type: 'boolean' },
			outputText: { arg: '--text', type: 'boolean' },
			outputVt: { arg: '--vt', type: 'boolean' },
			outputWpml: { arg: '--wpml', type: 'boolean' },
			quiet: { arg: '--quiet', type: 'boolean' },
			printVersionInfo: { arg: '--version', type: 'boolean' }
		};

		try {
			// UnRTF still attempts to convert empty strings/files, so catch them here before
			if (file === undefined || fs.existsSync(file) === false) {
				throw new Error('File missing');
			}

			const args = await parseOptions(acceptedOptions, options);
			args.push(file);

			const { stdout } = await execFileAsync(
				path.join(this.unrtfPath, 'unrtf'),
				args
			);
			return Promise.resolve(stdout);
		} catch (err) {
			return Promise.reject(err);
		}
	}
}

module.exports = {
	UnRTF
};

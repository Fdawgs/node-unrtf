export default UnRTF;
export class UnRTF {
	/** @param {string} [binPath] - Path of UnRTF binary. */
	constructor(binPath?: string | undefined);
	unrtfPath: string;
	/**
	 * @author Frazer Smith
	 * @description Converts an RTF file to HTML/LaTeX/RTF/TXT.
	 * Defaults to HTML output if no `output*` options are provided.
	 * UnRTF will use the directory of the original file to store embedded pictures.
	 * @param {string} file - Filepath of the RTF file to read.
	 * @param {object} [options] - Object containing options to pass to binary.
	 * @param {boolean} [options.noPictures] - Disable the automatic storing of embedded
	 * pictures to the directory of the original file.
	 * @param {boolean} [options.noRemap] - Disable charset conversion (only works for 8-bit charsets)
	 * (UnRTF v0.20.5 or later only).
	 * @param {boolean} [options.outputHtml] - Generate HTML output.
	 * @param {boolean} [options.outputLatex] - Generate LaTeX output.
	 * @param {boolean} [options.outputPs] - Generate PostScript (PS) output (UnRTF v0.19.4 or earlier only).
	 * @param {boolean} [options.outputRtf] - Generate RTF output. (UnRTF v0.21.3 or later only).
	 * @param {boolean} [options.outputText] - Generate ASCII text output.
	 * @param {boolean} [options.outputVt] - Generate text output with VT100 escape codes.
	 * @param {boolean} [options.outputWpml] - Generate WPML output (UnRTF v0.19.4 or earlier only).
	 * @param {boolean} [options.printVersionInfo] - Print copyright and version info.
	 * @param {boolean} [options.quiet] - Do not print any leading comments in output (UnRTF v0.21.3 or later only).
	 * @returns {Promise<string>}  A promise that resolves with a stdout string, or rejects with an `Error` object.
	 */
	convert(
		file: string,
		options?:
			| {
					noPictures?: boolean | undefined;
					noRemap?: boolean | undefined;
					outputHtml?: boolean | undefined;
					outputLatex?: boolean | undefined;
					outputPs?: boolean | undefined;
					outputRtf?: boolean | undefined;
					outputText?: boolean | undefined;
					outputVt?: boolean | undefined;
					outputWpml?: boolean | undefined;
					printVersionInfo?: boolean | undefined;
					quiet?: boolean | undefined;
			  }
			| undefined
	): Promise<string>;
}

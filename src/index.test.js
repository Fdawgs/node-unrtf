/* eslint-disable jest/no-conditional-expect */
/* eslint-disable security/detect-non-literal-fs-filename */
const isHtml = require("is-html");
const path = require("upath");
const semver = require("semver");
const { execFile } = require("child_process");
const { promisify } = require("util");
const generateCombos = require("../test_resources/utils/genCombos");

const execFileAsync = promisify(execFile);
const { UnRTF } = require("./index");

const testDirectory = `${__dirname}/../test_resources/test_files/`;
const file = `${testDirectory}test-rtf-complex.rtf`;

let testBinaryPath;
switch (process.platform) {
	// macOS
	case "darwin":
		testBinaryPath = "/usr/local/bin";
		break;

	case "linux":
		testBinaryPath = "/usr/bin";
		break;

	// Windows OS
	case "win32":
	default:
		testBinaryPath = path.joinSafe(
			__dirname,
			"lib",
			"win32",
			"unrtf-0.19.3",
			"bin"
		);
		break;
}

describe("Constructor", () => {
	if (process.platform === "win32") {
		it("Converts RTF file to HTML without binary set on win32, and use included binary", async () => {
			const unRtf = new UnRTF();
			const options = {
				noPictures: true,
				outputHtml: true,
			};

			const res = await unRtf.convert(file, options);

			expect(isHtml(res)).toBe(true);
		});
	}

	if (process.platform !== "win32") {
		it(`Rejects with an Error object if binary path unset on ${process.platform}`, async () => {
			expect.assertions(1);
			try {
				// eslint-disable-next-line no-unused-vars
				const unRtf = new UnRTF();
			} catch (err) {
				expect(err.message).toBe(
					`${process.platform} UnRTF binaries are not provided, please pass the installation directory as a parameter to the UnRTF instance.`
				);
			}
		});
	}
});

describe("Convert function", () => {
	let version;

	beforeAll(async () => {
		const { stderr } = await execFileAsync(
			path.joinSafe(testBinaryPath, "unrtf"),
			["--version"]
		);
		version = /^(\d{1,2}\.\d{1,2}\.\d{1,2})/i.exec(stderr)[1];
	});

	it("Does not throw if any valid options are set", async () => {
		// Generates 32 different combinations
		const optionCombos = generateCombos([
			{ noPictures: true },
			{ outputHtml: true },
			{ outputLatex: true },
			{ outputText: true },
			{ outputVt: true },
		]);

		await Promise.all(
			optionCombos.map(async (options) => {
				const unRtf = new UnRTF(testBinaryPath);

				await expect(
					unRtf.convert(file, options)
				).resolves.not.toThrow();
			})
		);
	});

	it("Throws version info `printVersionInfo` option is set", async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			printVersionInfo: true,
		};

		await expect(unRtf.convert(file, options)).rejects.toThrow(
			expect.objectContaining({
				message: expect.stringContaining(version),
			})
		);
	});

	it("Converts RTF file to HTML with stored images", async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			outputHtml: true,
		};

		const res = await unRtf.convert(file, options);

		expect(isHtml(res)).toBe(true);
	});

	it("Converts RTF file to HTML with no options set", async () => {
		const unRtf = new UnRTF(testBinaryPath);

		const res = await unRtf.convert(file);

		expect(isHtml(res)).toBe(true);
	});

	it("Converts RTF file to HTML if the `output*` option is set to false", async () => {
		const outputOptions = [
			"outputHtml",
			"outputLatex",
			"outputText",
			"outputVt",
		];

		const unRtf = new UnRTF(testBinaryPath);

		await Promise.all(
			outputOptions.map(async (option) => {
				const options = {
					noPictures: true,
					[option]: false,
				};

				const res = await unRtf.convert(file, options);

				expect(isHtml(res)).toBe(true);
			})
		);
	});

	it("Converts RTF file to HTML without storing images", async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
			outputHtml: true,
		};

		const res = await unRtf.convert(file, options);

		expect(isHtml(res)).toBe(true);
	});

	it("Converts RTF file to LaTeX", async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
			outputLatex: true,
		};

		const res = await unRtf.convert(file, options);

		expect(res).toMatch("\\begin{document}");
		expect(isHtml(res)).toBe(false);
	});

	it("Converts RTF file to text", async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
			outputText: true,
		};

		const res = await unRtf.convert(file, options);

		expect(res).toMatch(
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		);
		expect(isHtml(res)).toBe(false);
	});

	it("Rejects with an Error object if file passed not RTF format", async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
		};
		await expect(
			unRtf.convert(`${testDirectory}test.txt`, options)
		).rejects.toThrow(
			"File is not the correct media type, expected 'application/rtf'"
		);
		await expect(
			unRtf.convert(`${testDirectory}test.pdf`, options)
		).rejects.toThrow(
			"File is not the correct media type, expected 'application/rtf'"
		);
	});

	it("Rejects with an Error object if invalid value types provided for an option are passed to function", async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
			outputHtml: "sure",
		};

		await expect(unRtf.convert(file, options)).rejects.toThrow(
			"Invalid value type provided for option 'outputHtml', expected boolean but received string"
		);
	});

	it("Rejects with an Error object if option provided is only available in a later version of the UnRTF binary than what was provided", async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
			outputRtf: true,
		};
		if (semver.lte(version, "0.21.3")) {
			await expect(unRtf.convert(file, options)).rejects.toThrow(
				`Invalid option provided for the current version of the binary used. 'outputRtf' was introduced in v0.21.3, but received v${version}`
			);
		}
	});

	it("Rejects with an Error object if option provided is only available in an earlier version of the UnRTF binary than what was provided", async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
			outputPs: true,
		};
		if (semver.gt(version, "0.19.4")) {
			await expect(unRtf.convert(file, options)).rejects.toThrow(
				`Invalid option provided for the current version of the binary used. 'outputPs' is only present up to v0.19.4, but received v${version}`
			);
		}
	});

	it("Rejects with an Error object if invalid option is passed to function", async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
			outputMp3: true,
		};

		await expect(unRtf.convert(file, options)).rejects.toThrow(
			"Invalid option provided 'outputMp3'"
		);
	});

	it("Rejects with an Error object if file is missing", async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
			outputHtml: "sure",
		};

		await expect(unRtf.convert(undefined, options)).rejects.toThrow(
			"File missing"
		);
	});
});

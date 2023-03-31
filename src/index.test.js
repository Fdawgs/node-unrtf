/* eslint-disable jest/no-conditional-expect */
/* eslint-disable security/detect-child-process */
/* eslint-disable security/detect-non-literal-fs-filename */
const isHtml = require("is-html");
const path = require("upath");
const semver = require("semver");
const { execFile } = require("child_process");
const { promisify } = require("util");

const execFileAsync = promisify(execFile);
const { UnRTF } = require("./index");

const testDirectory = `${__dirname}/../test_files/`;
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
		test("Should convert RTF file to HTML without binary set on win32, and use included binary", async () => {
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
		test(`Should return an Error object if binary path unset on ${process.platform}`, async () => {
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

	test("Should convert RTF file to HTML with stored images", async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			outputHtml: true,
		};

		const res = await unRtf.convert(file, options);

		expect(isHtml(res)).toBe(true);
	});

	test("Should convert RTF file to HTML with no options set", async () => {
		const unRtf = new UnRTF(testBinaryPath);

		const res = await unRtf.convert(file);

		expect(isHtml(res)).toBe(true);
	});

	test("Should convert RTF file to HTML without storing images", async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
			outputHtml: true,
		};

		const res = await unRtf.convert(file, options);

		expect(isHtml(res)).toBe(true);
	});

	test("Should convert RTF file to LaTeX", async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
			outputLatex: true,
		};

		const res = await unRtf.convert(file, options);

		expect(res).toMatch("\\begin{document}");
		expect(isHtml(res)).toBe(false);
	});

	test("Should convert RTF file to text", async () => {
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

	test("Should return an Error object if file passed not RTF format", async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
		};
		const testTxtFile = `${testDirectory}test.txt`;
		const testPdfFile = `${testDirectory}test.pdf`;

		expect.assertions(2);
		await unRtf.convert(testTxtFile, options).catch((err) => {
			expect(err.message).toBe(
				"File is not the correct media type, expected 'application/rtf'"
			);
		});

		await unRtf.convert(testPdfFile, options).catch((err) => {
			expect(err.message).toBe(
				"File is not the correct media type, expected 'application/rtf'"
			);
		});
	});

	test("Should return an Error object if invalid value types provided for an option are passed to function", async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
			outputHtml: "sure",
		};

		expect.assertions(1);
		await unRtf.convert(file, options).catch((err) => {
			expect(err.message).toBe(
				"Invalid value type provided for option 'outputHtml', expected boolean but received string"
			);
		});
	});

	test("Should return an Error object if option provided is only available in a later version of the UnRTF binary than what was provided", async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
			outputRtf: true,
		};
		if (semver.lte(version, "0.21.3")) {
			expect.assertions(1);
			await unRtf.convert(file, options).catch((err) => {
				expect(err.message).toBe(
					`Invalid option provided for the current version of the binary used. 'outputRtf' was introduced in v0.21.3, but received v${version}`
				);
			});
		}
	});

	test("Should return an Error object if option provided is only available in an earlier version of the UnRTF binary than what was provided", async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
			outputPs: true,
		};
		if (semver.gt(version, "0.19.4")) {
			expect.assertions(1);
			await unRtf.convert(file, options).catch((err) => {
				expect(err.message).toBe(
					`Invalid option provided for the current version of the binary used. 'outputPs' is only present up to v0.19.4, but received v${version}`
				);
			});
		}
	});

	test("Should return an Error object if invalid option is passed to function", async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
			outputMp3: true,
		};

		expect.assertions(1);
		await unRtf.convert(file, options).catch((err) => {
			expect(err.message).toBe("Invalid option provided 'outputMp3'");
		});
	});

	test("Should return an Error object if file is missing", async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
			outputHtml: "sure",
		};

		expect.assertions(1);
		await unRtf.convert(undefined, options).catch((err) => {
			expect(err.message).toBe("File missing");
		});
	});
});

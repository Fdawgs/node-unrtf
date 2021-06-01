/* eslint-disable jest/no-conditional-expect */
/* eslint-disable security/detect-non-literal-fs-filename */
const isHtml = require("is-html");
const os = require("os");
const path = require("path");
const semver = require("semver");
const { execFile } = require("child_process");
const util = require("util");

const execFileAsync = util.promisify(execFile);
const { UnRTF } = require("./index");

const testDirectory = `${__dirname}/../test_files/`;
const file = `${testDirectory}test-rtf-complex.rtf`;

let testBinaryPath;
const platform = os.platform();
switch (platform) {
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
		testBinaryPath = path.join(
			__dirname,
			"lib",
			"win32",
			"unrtf-0.19.3",
			"bin"
		);
		break;
}

if (platform === "win32") {
	describe("Constructor", () => {
		test("Should convert RTF file to HTML without binary set, and use included Windows binary", async () => {
			const unRtf = new UnRTF();
			const options = {
				noPictures: true,
				outputHtml: true,
			};

			const res = await unRtf.convert(file, options);

			expect(typeof res).toEqual("string");
			expect(res.substring(0, 6)).toEqual("<html>");
		});
	});
}

describe("Convert Function", () => {
	let version;

	beforeAll(async () => {
		const { stderr } = await execFileAsync(
			path.join(testBinaryPath, "unrtf"),
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

		expect(typeof res).toEqual("string");
		expect(isHtml(res)).toEqual(true);
	});

	test("Should convert RTF file to HTML with no options set", async () => {
		const unRtf = new UnRTF(testBinaryPath);

		const res = await unRtf.convert(file);

		expect(typeof res).toEqual("string");
		expect(isHtml(res)).toEqual(true);
	});

	test("Should convert RTF file to HTML without storing images", async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
			outputHtml: true,
		};

		const res = await unRtf.convert(file, options);

		expect(typeof res).toEqual("string");
		expect(isHtml(res)).toEqual(true);
	});

	test("Should convert RTF file to LaTeX", async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
			outputLatex: true,
		};

		const res = await unRtf.convert(file, options);

		expect(typeof res).toEqual("string");
		expect(res).toEqual(expect.stringContaining("\\begin{document}"));
		expect(isHtml(res)).toEqual(false);
	});

	test("Should convert RTF file to text", async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
			outputText: true,
		};

		const res = await unRtf.convert(file, options);

		expect(typeof res).toEqual("string");
		expect(res).toEqual(
			expect.stringContaining(
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
			)
		);
		expect(isHtml(res)).toEqual(false);
	});

	test("Should return an Error object if invalid value types provided for an option are passed to function", async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
			outputHtml: "sure",
		};

		expect.assertions(1);
		await unRtf.convert(file, options).catch((err) => {
			expect(err.message).toEqual(
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
				expect(err.message).toEqual(
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
				expect(err.message).toEqual(
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
			expect(err.message).toEqual("Invalid option provided 'outputMp3'");
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
			expect(err.message).toEqual("File missing");
		});
	});
});

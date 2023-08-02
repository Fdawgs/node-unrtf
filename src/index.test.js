/* eslint-disable jest/no-conditional-expect */
/* eslint-disable security/detect-non-literal-fs-filename */

"use strict";

const { execFile } = require("child_process");
const { promisify } = require("util");
const isHtml = require("is-html");
const path = require("upath");
const { gt, lte } = require("semver");
const generateCombos = require("../test_resources/utils/genCombos");

const execFileAsync = promisify(execFile);
const { UnRTF } = require("./index");

const testDirectory = `${__dirname}/../test_resources/test_files/`;
const file = `${testDirectory}test-rtf-complex.rtf`;

const windowsPath = path.joinSafe(
	__dirname,
	"lib",
	"win32",
	"unrtf-0.19.3",
	"bin"
);
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
		testBinaryPath = windowsPath;
		break;
}

describe("Constructor", () => {
	let platform;

	beforeEach(() => {
		// Copy the process platform
		({ platform } = process);
	});

	afterEach(() => {
		// Restore the process platform
		Object.defineProperty(process, "platform", {
			value: platform,
		});
	});

	it("Creates a new UnRTF instance without the binary path set on win32", () => {
		Object.defineProperty(process, "platform", {
			value: "win32",
		});

		const unRtf = new UnRTF();
		expect(unRtf.unrtfPath).toBe(windowsPath);
	});

	it("Throws an Error if the binary path is not set and the platform is not win32", () => {
		Object.defineProperty(process, "platform", {
			value: "mockOS",
		});

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
});

describe("Convert function", () => {
	let version;

	beforeAll(async () => {
		const { stderr } = await execFileAsync(
			path.joinSafe(testBinaryPath, "unrtf"),
			["--version"]
		);
		version = /^(\d{1,2}\.\d{1,2}\.\d{1,2})/u.exec(stderr)[1];
	});

	it("Converts RTF if any valid options are set", async () => {
		// Generates 32 different combinations
		const optionCombos = generateCombos([
			{ noPictures: true },
			{ outputHtml: true },
			{ outputLatex: true },
			{ outputText: true },
			{ outputVt: true },
		]);

		expect.assertions(optionCombos.length);
		await Promise.all(
			optionCombos.map(async (options) => {
				const unRtf = new UnRTF(testBinaryPath);

				await expect(
					unRtf.convert(file, options)
				).resolves.toStrictEqual(expect.any(String));
			})
		);
	});

	it("Rejects with version info `printVersionInfo` option is set", async () => {
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

	it("Converts RTF file to HTML if any `output*` option is set to false", async () => {
		const outputOptions = [
			"outputHtml",
			"outputLatex",
			"outputText",
			"outputVt",
		];

		const unRtf = new UnRTF(testBinaryPath);

		expect.assertions(outputOptions.length);
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

	it.each([
		{
			testName: "HTML with no options set",
			options: undefined,
			expected: {
				html: true,
				stringMatch:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			},
		},
		{
			testName: "HTML with `outputHtml` set to true",
			options: {
				outputHtml: true,
			},
			expected: {
				html: true,
				stringMatch:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			},
		},
		{
			testName: "LATeX with `outputLatex` set to true",
			options: {
				outputLatex: true,
			},
			expected: {
				html: false,
				stringMatch: "\\begin{document}",
			},
		},
		{
			testName: "Text with `outputText` set to true",
			options: {
				outputText: true,
			},
			expected: {
				html: false,
				stringMatch:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			},
		},
	])("Converts RTF file to $testName", async ({ options, expected }) => {
		const unRtf = new UnRTF(testBinaryPath);

		const res = await unRtf.convert(file, options);

		expect(isHtml(res)).toBe(expected.html);
		expect(res).toMatch(expected.stringMatch);
	});

	it("Rejects with an Error object if option provided is only available in a later version of the UnRTF binary than what was provided", async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
			outputRtf: true,
		};
		if (lte(version, "0.21.3")) {
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
		if (gt(version, "0.19.4")) {
			await expect(unRtf.convert(file, options)).rejects.toThrow(
				`Invalid option provided for the current version of the binary used. 'outputPs' is only present up to v0.19.4, but received v${version}`
			);
		}
	});

	it.each([
		{
			testName: "file is not RTF format",
			filePath: `${testDirectory}test.txt`,
			options: {
				outputHtml: true,
			},
			expError:
				"File is not the correct media type, expected 'application/rtf'",
		},

		{
			testName: "file is missing",
			filePath: undefined,
			options: {
				outputHtml: true,
			},
			expError: "File missing",
		},
		{
			testName: "invalid option is passed to function",
			filePath: file,
			options: {
				outputMp3: true,
			},
			expError: "Invalid option provided 'outputMp3'",
		},
		{
			testName:
				"invalid value types provided for an option are passed to function",
			filePath: file,
			options: {
				outputHtml: "sure",
			},
			expError:
				"Invalid value type provided for option 'outputHtml', expected boolean but received string",
		},
	])(
		"Rejects with an Error object if $testName",
		async ({ filePath, options, expError }) => {
			const unRtf = new UnRTF(testBinaryPath);

			await expect(
				unRtf.convert(filePath, {
					noPictures: true,
					...options,
				})
			).rejects.toThrow(expError);
		}
	);
});

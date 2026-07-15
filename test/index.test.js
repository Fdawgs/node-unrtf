/* eslint-disable n/global-require, security/detect-child-process -- Mocking child_process */
/* eslint-disable jest/no-conditional-expect -- Depends on the version of the binary */
/* eslint-disable security/detect-non-literal-fs-filename -- Filenames are not user-provided */

"use strict";

const { EventEmitter } = require("node:events");
const { execFile, spawnSync } = require("node:child_process");
const { unlink, writeFile } = require("node:fs/promises");
const { join, normalize, sep } = require("node:path");
const { platform } = require("node:process");
const { Readable } = require("node:stream");
const { promisify } = require("node:util");
const {
	afterEach,
	beforeAll,
	beforeEach,
	describe,
	expect,
	it,
	jest,
} = require("@jest/globals");
const { glob } = require("glob");
const generateCombos = require("./utils/gen-combos");

const execFileAsync = promisify(execFile);
const { UnRTF } = require("../src/index");

const testDirectory = join(__dirname, "fixtures") + sep;
const file = `${testDirectory}test-rtf-complex.rtf`;

// Cache immutable regex as they are expensive to create and garbage collect
const HTML_REG =
	/^\s*(?:<!doctype html\b[^>]*>|<(?:html|body)\b[^>]*>|<x-[^>]+>)/iu;

/** @type {typeof import("node:child_process")} */
const originalChildProcess = jest.requireActual("node:child_process");
/** @type {typeof import("node:process")} */
const originalProcess = jest.requireActual("node:process");

/**
 * @description Returns the path of the UnRTF binary directory based on OS.
 * @returns {string} Path of the UnRTF binary directory.
 * @throws {Error} If the OS is not supported or the UnRTF binary cannot be found.
 */
function getTestBinaryPath() {
	const which = spawnSync(platform === "win32" ? "where" : "which", [
		"unrtf",
	]).stdout.toString();
	let unrtfPath = /(.+)unrtf/u.exec(which)?.[1];

	if (platform === "win32" && !unrtfPath) {
		// @ts-ignore: Optional dependency
		unrtfPath = require("node-unrtf-win32");
	}

	if (!unrtfPath) {
		throw new Error(`Unable to find ${platform} UnRTF binary.`);
	}

	return normalize(unrtfPath);
}

const testBinaryPath = getTestBinaryPath();
describe("Node-UnRTF module", () => {
	afterEach(async () => {
		// Remove leftover test files
		const files = await glob("*.{emf,wmf,png}");
		await Promise.all(files.map((filed) => unlink(filed)));
	});

	describe("Constructor", () => {
		beforeEach(() => {
			jest.resetModules();
		});

		it("Creates a new UnRTF instance without the binary path set", () => {
			const unRtf = new UnRTF();
			expect(unRtf.path).toBe(testBinaryPath);
			expect(unRtf.version).toEqual(expect.any(String));
		});

		it("Throws an Error if the binary path is not found", () => {
			jest.doMock("node:process", () => ({
				...originalProcess,
				platform: "mockOS",
			}));
			const { platform: mockPlatform } = require("node:process");

			jest.doMock("node:child_process", () => ({
				...originalChildProcess,
				spawnSync: jest.fn(() => ({
					stdout: {
						toString: () => "",
					},
				})),
			}));
			require("node:child_process");
			const { UnRTF: UnRTFMock } = require("../src/index");

			expect.assertions(1);
			try {
				// eslint-disable-next-line no-unused-vars -- This is intentional
				const unRtf = new UnRTFMock();
			} catch (err) {
				if (err instanceof Error) {
					expect(err.message).toBe(
						`Unable to find ${mockPlatform} UnRTF binary, please pass the path to the binary directory as an argument to the UnRTF constructor.`
					);
				}
			}
		});

		it("Throws an Error if the version of the binary cannot be determined", () => {
			jest.doMock("node:child_process", () => ({
				...originalChildProcess,
				spawnSync: jest.fn(() => ({
					stdout: {
						toString: () => "/usr/bin/unrtf",
					},
					stderr: {
						toString: () => "",
					},
				})),
			}));
			require("node:child_process");
			const { UnRTF: UnRTFMock } = require("../src/index");

			expect.assertions(1);
			try {
				// eslint-disable-next-line no-unused-vars -- This is intentional
				const unRtf = new UnRTFMock();
			} catch (err) {
				if (err instanceof Error) {
					expect(err.message).toBe(
						"Unable to determine version of the UnRTF binary."
					);
				}
			}
		});
	});

	const unRtf = new UnRTF(testBinaryPath);

	describe("Convert function", () => {
		/** @type {string} */
		let version;

		beforeAll(async () => {
			const { stderr } = await execFileAsync(
				join(testBinaryPath, "unrtf"),
				["--version"]
			);

			const match = /^(\d{1,2}\.\d{1,2}\.\d{1,2})/u.exec(stderr);
			if (!match?.[1]) {
				throw new Error("Unable to parse UnRTF version from stderr");
			}
			version = match[1];
		});

		beforeEach(() => {
			jest.resetModules();
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
					await expect(
						unRtf.convert(file, options)
					).resolves.toStrictEqual(expect.any(String));
				})
			);
		});

		it("Rejects with version info `printVersionInfo` option is set", async () => {
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

			expect.assertions(outputOptions.length);
			await Promise.all(
				outputOptions.map(async (option) => {
					const options = {
						noPictures: true,
						[option]: false,
					};

					const res = await unRtf.convert(file, options);

					expect(res).toMatch(HTML_REG);
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
				testName: "HTML with `outputHtml` set to undefined",
				options: {
					outputHtml: undefined,
				},
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
			const res = await unRtf.convert(file, options);

			expect(HTML_REG.test(res)).toBe(expected.html);
			expect(res).toMatch(expected.stringMatch);
		});

		it.each([
			{
				testName: "2-byte character (£) is split across boundary",
				chunks: [
					Buffer.from([0xc2]), // first byte of £
					Buffer.from([0xa3, 0x21]), // last byte of £ + '!'
				],
				expected: "£!",
			},
			{
				testName: "3-byte character (€) is split across boundary",
				chunks: [
					Buffer.from([0xe2, 0x82]), // first 2 bytes of €
					Buffer.from([0xac, 0x21]), // last byte of € + '!'
				],
				expected: "€!",
			},
			{
				testName: "4-byte character (𝄞) is split across boundary",
				chunks: [
					Buffer.from([0xf0, 0x9d]), // first 2 bytes of 𝄞
					Buffer.from([0x84, 0x9e, 0x21]), // last 2 bytes of 𝄞 + '!'
				],
				expected: "𝄞!",
			},
		])(
			"Correctly decodes stdout when $testName",
			async ({ chunks, expected }) => {
				jest.doMock("node:child_process", () => ({
					...originalChildProcess,
					spawn: jest.fn(() => {
						const emitter =
							/** @type {import("node:child_process").ChildProcess} */ (
								new EventEmitter()
							);
						emitter.stdout = Readable.from(chunks);
						emitter.stderr = new Readable({
							read() {
								this.push(null);
							},
						});
						emitter.stdout.on("end", () => {
							setImmediate(() => emitter.emit("close", 0));
						});
						return emitter;
					}),
				}));
				require("node:child_process");
				const { UnRTF: UnRTFMock } = require("../src/index");
				const unRtfMock = new UnRTFMock(testBinaryPath);

				const result = await unRtfMock.convert(file, {
					noPictures: true,
				});

				expect(result).toBe(expected);
				expect(result).not.toContain("\uFFFD");
			}
		);

		it("Rejects with an Error object if option provided is only available in a later version of the UnRTF binary than what was provided", async () => {
			jest.doMock("node:child_process", () => ({
				...originalChildProcess,
				spawnSync: jest.fn(() => ({
					stdout: {
						toString: () => "/usr/bin/unrtf",
					},
					stderr: {
						toString: () => "0.19.0",
					},
				})),
			}));
			require("node:child_process");
			const { UnRTF: UnRTFMock } = require("../src/index");
			const unRtfMock = new UnRTFMock(testBinaryPath);
			const options = {
				noPictures: true,
				outputRtf: true,
			};

			await expect(unRtfMock.convert(file, options)).rejects.toThrow(
				"Invalid option provided for the current version of the binary used. 'outputRtf' was introduced in v0.21.3, but received v0.19.0"
			);
		});

		it("Rejects with an Error object if option provided is only available in an earlier version of the UnRTF binary than what was provided", async () => {
			const mockVersion = "0.21.0";

			jest.doMock("node:child_process", () => ({
				...originalChildProcess,
				spawnSync: jest.fn(() => ({
					stdout: {
						toString: () => "/usr/bin/unrtf",
					},
					stderr: {
						toString: () => mockVersion,
					},
				})),
			}));
			require("node:child_process");
			const { UnRTF: UnRTFMock } = require("../src/index");
			const unRtfMock = new UnRTFMock(testBinaryPath);
			const options = {
				noPictures: true,
				outputPs: true,
			};

			await expect(unRtfMock.convert(file, options)).rejects.toThrow(
				`Invalid option provided for the current version of the binary used. 'outputPs' is only present up to v0.19.4, but received v${mockVersion}`
			);
		});

		it("Does not reject when version-constrained boolean options are set to false on an older binary", async () => {
			jest.doMock("node:child_process", () => ({
				...originalChildProcess,
				spawnSync: jest.fn(() => ({
					stdout: {
						toString: () => "/usr/bin/unrtf",
					},
					stderr: {
						toString: () => "0.19.0",
					},
				})),
			}));
			require("node:child_process");
			const { UnRTF: UnRTFMock } = require("../src/index");
			const unRtfMock = new UnRTFMock(testBinaryPath);

			// outputRtf requires v0.21.3+ and quiet requires v0.21.3+,
			const options = {
				noPictures: true,
				outputRtf: false,
				quiet: false,
			};

			await expect(
				unRtfMock.convert(file, options)
			).resolves.toStrictEqual(expect.any(String));
		});

		it("Does not reject when version-constrained boolean options are set to false on a newer binary", async () => {
			jest.doMock("node:child_process", () => ({
				...originalChildProcess,
				spawnSync: jest.fn(() => ({
					stdout: {
						toString: () => "/usr/bin/unrtf",
					},
					stderr: {
						toString: () => "0.21.0",
					},
				})),
			}));
			require("node:child_process");
			const { UnRTF: UnRTFMock } = require("../src/index");
			const unRtfMock = new UnRTFMock(testBinaryPath);

			// outputPs and outputWpml have maxVersion 0.19.4
			const options = {
				noPictures: true,
				outputPs: false,
				outputWpml: false,
			};

			await expect(
				unRtfMock.convert(file, options)
			).resolves.toStrictEqual(expect.any(String));
		});

		// Child process exit code handling tests
		it.each([
			{
				testName: "a non-zero code and no output",
				exitCode: 1,
				expectedError: /exited with code 1/u,
			},
			{
				testName: "a segmentation fault",
				exitCode: 3221225477,
				expectedError: "Segmentation fault",
			},
			{
				testName: "a null code and no output",
				exitCode: null,
				expectedError: /exited with code null/u,
			},
		])(
			"Rejects with an Error object if UnRTF exits with $testName",
			async ({ exitCode, expectedError }) => {
				jest.doMock("node:child_process", () => ({
					...originalChildProcess,
					spawn: jest.fn(() => {
						const emitter =
							/** @type {import("node:child_process").ChildProcess} */ (
								new EventEmitter()
							);
						emitter.stdout = new Readable({
							read() {
								this.push(null);
							},
						});
						emitter.stderr = new Readable({
							read() {
								this.push(null);
							},
						});
						setImmediate(() => emitter.emit("close", exitCode));
						return emitter;
					}),
				}));
				require("node:child_process");
				const { UnRTF: UnRTFMock } = require("../src/index");
				const unRtfMock = new UnRTFMock(testBinaryPath);

				await expect(
					unRtfMock.convert(file, { noPictures: true })
				).rejects.toThrow(expectedError);
			}
		);

		// General argument validation tests
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
				await expect(
					// @ts-expect-error: Testing invalid argument
					unRtf.convert(filePath, {
						noPictures: true,
						...options,
					})
				).rejects.toThrow(expError);
			}
		);

		// File size validation tests
		it.each([
			{
				testName: "file is empty (0 bytes)",
				content: Buffer.alloc(0),
			},
			{
				testName: "file is 1 byte",
				content: Buffer.from("{"),
			},
			{
				testName: "file is 3 bytes with RTF-like prefix",
				content: Buffer.from("{\\r"),
			},
			{
				testName:
					"file is 5 bytes (one byte short of the magic number)",
				content: Buffer.from("{\\rtf"),
			},
		])("Rejects with an Error object if $testName", async ({ content }) => {
			const shortFile = `${testDirectory}short-file-test.rtf`;
			await writeFile(shortFile, content);
			try {
				await expect(
					unRtf.convert(shortFile, { noPictures: true })
				).rejects.toThrow(
					expect.objectContaining({
						message: expect.stringContaining(
							"File is not the correct media type, expected 'application/rtf'"
						),
					})
				);
			} finally {
				await unlink(shortFile);
			}
		});

		// AbortSignal handling tests
		it.each([
			{
				testName: "signal is already aborted before starting",
				abortBefore: true,
				abortDuring: false,
			},
			{
				testName: "signal is aborted during conversion",
				abortBefore: false,
				abortDuring: true,
			},
		])(
			"Rejects with an Error object if $testName",
			async ({ abortBefore, abortDuring }) => {
				const controller = new AbortController();

				if (abortBefore) {
					controller.abort();
				}

				if (abortDuring) {
					setImmediate(() => controller.abort());
				}

				await expect(
					unRtf.convert(
						file,
						{ noPictures: true },
						{ signal: controller.signal }
					)
				).rejects.toThrow(
					expect.objectContaining({
						name: "AbortError",
					})
				);
			}
		);

		it("Converts RTF file to HTML with `signal` extra provided but never aborted", async () => {
			const controller = new AbortController();

			const result = await unRtf.convert(
				file,
				{ noPictures: true },
				{ signal: controller.signal }
			);

			expect(result).toStrictEqual(expect.any(String));
		});
	});
});

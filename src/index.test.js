/* eslint-disable security/detect-non-literal-fs-filename */
const os = require('os');
const path = require('path');
const { UnRTF } = require('./index');

const testDirectory = `${__dirname}/../test_files/`;
const file = `${testDirectory}test-rtf-complex.rtf`;

let testBinaryPath;
const platform = os.platform();
switch (platform) {
	case 'darwin':
		testBinaryPath = '/usr/local/bin';
		break;

	case 'linux':
		testBinaryPath = '/usr/bin';
		break;

	// Windows OS
	case 'win32':
	default:
		testBinaryPath = path.join(
			__dirname,
			'lib',
			'win32',
			'unrtf-0.19.3',
			'bin'
		);
		break;
}

if (platform === 'win32') {
	describe('Constructor', () => {
		test('Should convert RTF file to HTML without binary set, and use included Windows binary', async () => {
			const unRtf = new UnRTF();
			const options = {
				noPictures: true,
				outputHtml: true
			};

			const res = await unRtf.convert(options, file);

			expect(typeof res).toBe('string');
			expect(res.substring(0, 6)).toBe('<html>');
		});
	});
}

describe('convert function', () => {
	test('Should convert RTF file to HTML with stored images', async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			outputHtml: true
		};

		const res = await unRtf.convert(options, file);

		expect(typeof res).toBe('string');
		expect(res.substring(0, 6)).toBe('<html>');
	});

	test('Should convert RTF file to HTML without storing images', async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
			outputHtml: true
		};

		const res = await unRtf.convert(options, file);

		expect(typeof res).toBe('string');
		expect(res.substring(0, 6)).toBe('<html>');
	});

	test('Should convert RTF file to LaTeX', async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
			outputLatex: true
		};

		const res = await unRtf.convert(options, file);
		expect(typeof res).toBe('string');
	});

	test('Should convert RTF file to text', async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
			outputText: true
		};

		const res = await unRtf.convert(options, file);

		expect(typeof res).toBe('string');
	});

	test('Should convert RTF file to text with VT100 escape codes', async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
			outputVt: true
		};

		const res = await unRtf.convert(options, file);
		expect(typeof res).toBe('string');
	});

	test('Should return an Error object if invalid value types provided for an option are passed to function', async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
			outputHtml: 'sure'
		};

		await unRtf.convert(options, file).catch((err) => {
			expect(err.message).toEqual(
				"Invalid value type provided for option 'outputHtml', expected boolean but recieved string"
			);
		});
	});

	test('Should return an Error object if invalid option is passed to function', async () => {
		const unRtf = new UnRTF(testBinaryPath);
		const options = {
			noPictures: true,
			outputMp3: true
		};

		await unRtf.convert(options, file).catch((err) => {
			expect(err.message).toEqual("Invalid option provided 'outputMp3'");
		});
	});
});

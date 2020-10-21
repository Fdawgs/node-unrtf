/* eslint-disable security/detect-non-literal-fs-filename */
// eslint-disable-next-line no-unused-vars
const fs = require('fs');
const os = require('os');
const path = require('path');
const { UnRTF } = require('./index');

const testDirectory = `${__dirname}/../test_files/`;
const file = `${testDirectory}test-rtf.rtf`;

let testBinaryPath;
const platform = os.platform();
switch (platform) {
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

describe('convert function', () => {
    test('Should convert RTF file to HTML', async () => {
		const unRtf = new UnRTF(testBinaryPath);

		const res = await unRtf.convert({outputHtml: true}, file);
        console.log(res);
		expect(typeof res).toBe('string');
	});
})
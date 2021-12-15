# node-unrtf

[![GitHub Release](https://img.shields.io/github/release/Fdawgs/node-unrtf.svg)](https://github.com/Fdawgs/node-unrtf/releases/latest/)
[![npm version](https://img.shields.io/npm/v/node-unrtf)](https://www.npmjs.com/package/node-unrtf)
![Build Status](https://github.com/Fdawgs/node-unrtf/workflows/CI/badge.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/Fdawgs/node-unrtf/badge.svg?branch=master)](https://coveralls.io/github/Fdawgs/node-unrtf?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/Fdawgs/node-unrtf/badge.svg)](https://snyk.io/test/github/Fdawgs/node-unrtf)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

> Asynchronous node.js wrapper for the UnRTF RTF conversion program

## Intro

[UnRTF](https://www.gnu.org/software/unrtf/) is a CLI program that allows for the manipulation and extraction of data from RTF documents such as converting RTF files to HTML or TXT.

The `node-unrtf` module provides an asynchronous node.js wrapper around said CLI program for easier use.
It was created out of a need for an RTF-to-HTML conversion module at [Yeovil District Hospital NHS Foundation Trust](https://yeovilhospital.co.uk/) to convert clinical documents.

## Installation

Install using [`npm`](https://www.npmjs.com/package/node-unrtf):

```bash
npm install node-unrtf
```

Or [`yarn`](https://yarnpkg.com/en/package/node-unrtf):

```bash
yarn add node-unrtf
```

node-unrtf's test scripts use npm commands.

### Known Issues With Included Windows Binary and Recommendations

An UnRTF v0.19.3 Windows binary is included with this module which, due to its age, has several issues.

#### Inability To Convert RTF Documents Generated From 2007 Onwards

Discovered in [#83](https://github.com/Fdawgs/node-unrtf/issues/83) by [@thegoathearder](https://github.com/thegoatherder).

The binary was released in 2005 when v1.8 of the RTF specification was standard.
RTF v1.9 was released in 2007, and Microsoft Word 2007 onwards saves new RTFs using v1.9.1.

The included binary will throw errors and fails to convert any RTF documents that were generated from 2007 onwards using RTF >=1.9.

#### `noPictures` option still generates pictures

Discovered in [#81](https://github.com/Fdawgs/node-unrtf/issues/81) by [@olliebreeden](https://github.com/olliebreeden).

The `noPictures` option, when passed to the unRTF class, will still generate pictures:

```js
unRTF.convert(file.Path, {
	noPictures: true,
	outputText: true,
});
```

#### Recommendations

The above issues were fixed in later versions of UnRTF.
GnuWin was the organisation porting GNU utilities to Win32, and they are no longer maintained since 2017.
Due to this, it is highly unlikely newer versions of UnRTF will be released for Windows.

As such, it is recommended that whatever application is using the `node-unrtf` module is run in a Linux environment (as a Docker container or otherwise), by following the steps in [Linux and macOS/Darwin Support](#linux-and-macosdarwin-support).

### Linux and macOS/Darwin Support

For Linux and Mac users, you will need to download the `unrtf` binary separately.

An example of downloading the binary on a Debian system:

```
sudo apt-get install unrtf
```

For macOS, the binary can be installed with [Homebrew](https://brew.sh/):

```
brew install unrtf
```

Once they have been installed, you will need to pass the `unrtf` installation directory as a parameter to an instance of the UnRTF class:

```js
const { UnRTF } = require("node-unrtf");
const unRtf = new UnRTF("./usr/bin");
```

## API

```js
const { UnRTF } = require("node-unrtf");
```

[**API Documentation can be found here**](https://github.com/Fdawgs/node-unrtf/blob/master/API.md)

## Examples

### Async Await

Example of an `async` `await` call to convert an RTF file to HTML, and then output the result to console:

```js
const { UnRTF } = require("node-unrtf");

const file = "test_document.rtf";
const unRtf = new UnRTF();
const options = {
	outputHtml: true,
};

const res = await unRtf.convert(file, options);
console.log(res);
```

### Promise Chaining

Example of calling unRTF.convert with a promise chain:

```js
const { UnRTF } = require("node-unrtf");

const file = "test_document.rtf";
const unRtf = new UnRTF("./usr/bin");
const options = {
	outputHtml: true,
};

unRTF.convert(file, options).then((res) => {
	console.log(res);
});
```

## Contributing

Contributions are welcome, and any help is greatly appreciated!

See [CONTRIBUTING.md](./CONTRIBUTING.md) for details on how to get started.
Please adhere to this project's [Code of Conduct](./CODE_OF_CONDUCT.md) when contributing.

## License

`node-unrtf` is licensed under the [MIT](./LICENSE) license.

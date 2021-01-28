# node-unrtf

[![GitHub Release](https://img.shields.io/github/release/Fdawgs/node-unrtf.svg)](https://github.com/Fdawgs/node-unrtf/releases/latest/) [![npm version](https://img.shields.io/npm/v/node-unrtf)](https://www.npmjs.com/package/node-unrtf)
![Build Status](https://github.com/Fdawgs/node-unrtf/workflows/CI/badge.svg?branch=master) [![Coverage Status](https://coveralls.io/repos/github/Fdawgs/node-unrtf/badge.svg?branch=master)](https://coveralls.io/github/Fdawgs/node-unrtf?branch=master) [![Known Vulnerabilities](https://snyk.io/test/github/Fdawgs/node-unrtf/badge.svg)](https://snyk.io/test/github/Fdawgs/node-unrtf) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

> Asynchronous node.js wrapper for the UnRTF RTF conversion program

## Intro

The node-unrtf module was created out of a need for a RTF-to-HTML conversion module at [Yeovil District Hospital NHS Foundation Trust](https://yeovilhospital.co.uk/) to convert clinical documents in RTF format to HTML.

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

### Linux and macOS/Darwin support

A Windows binary (v0.19.3) is provided with this repository.
For Linux and Mac users, you will need to download the `unrtf` binary separately.

An example of downloading the binary on a Debian system:

```
sudo apt-get install unrtf
```

For macOS, the binary can be installed with [Homebrew](https://brew.sh/):

```
brew install unrtf
```

Once they have been installed, you will need to pass the `unrtf` installation directory in as parameters to an instance of the UnRTF class:

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

Please see [CONTRIBUTING.md](https://github.com/Fdawgs/node-unrtf/blob/master/CONTRIBUTING.md) for more details regarding contributing to this project.

## License

`node-unrtf` is licensed under the [MIT](https://github.com/Fdawgs/node-unrtf/blob/master/LICENSE) license.

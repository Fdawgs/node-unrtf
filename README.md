> **Note**
> An UnRTF v0.19.3 Windows binary is included with this module which, due to its age, has several issues,
> such as the [inability to convert RTF documents generated from 2007 onwards](https://github.com/Fdawgs/node-unrtf/issues/83), and a [bug in the
> `noPictures` option that still generates pictures](https://github.com/Fdawgs/node-unrtf/issues/81).
> It is recommended that whatever application is using the `node-unrtf` module is run in a Linux environment using the latest
> available UnRTF binaries, which do not have these bugs.

# node-unrtf

[![GitHub release](https://img.shields.io/github/release/Fdawgs/node-unrtf.svg)](https://github.com/Fdawgs/node-unrtf/releases/latest/)
[![npm version](https://img.shields.io/npm/v/node-unrtf)](https://npmjs.com/package/node-unrtf)
[![Build status](https://github.com/Fdawgs/node-unrtf/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Fdawgs/node-unrtf/actions/workflows/ci.yml)
[![Coverage status](https://coveralls.io/repos/github/Fdawgs/node-unrtf/badge.svg?branch=main)](https://coveralls.io/github/Fdawgs/node-unrtf?branch=main)
[![code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

> Asynchronous node.js wrapper for the UnRTF RTF conversion program

## Overview

[UnRTF](https://gnu.org/software/unrtf/) is a CLI program that allows for the manipulation and extraction of data from RTF documents such as converting RTF files to HTML or TXT.

The `node-unrtf` module provides an asynchronous node.js wrapper around said CLI program for easier use.

## Installation

Install using `npm`:

```bash
npm i node-unrtf
```

### Linux and macOS/Darwin support

For Linux and Mac users, you will need to download the `unrtf` binary separately.

An example of downloading the binary on a Debian system:

```
sudo apt-get install unrtf
```

For macOS, the binary can be installed with [Homebrew](https://brew.sh/):

```
brew install unrtf
```

## Example usage

Please refer to the [JSDoc comments in the source code](./src/index.js) or the [generated type definitions](https://www.npmjs.com/package/node-unrtf?activeTab=code) for information on the available options.

### Async Await

Example of an `async` `await` call to convert an RTF file to HTML in an ESM environment:

```js
import { UnRTF } from "node-unrtf";

const file = "test_document.rtf";
const unRtf = new UnRTF();
const options = {
	outputHtml: true,
};

const res = await unRtf.convert(file, options);
console.log(res);
```

### Promise chaining

Example of calling unRTF.convert with a promise chain in a CJS environment:

```js
const { UnRTF } = require("node-unrtf");

const file = "test_document.rtf";
const unRtf = new UnRTF("/usr/bin");
const options = {
	outputHtml: true,
};

unRTF
	.convert(file, options)
	.then((res) => {
		console.log(res);
		return res;
	})
	.catch((err) => {
		console.error(err);
		throw err;
	});
```

## Contributing

Contributions are welcome, and any help is greatly appreciated!

See [the contributing guide](https://github.com/Fdawgs/.github/blob/main/CONTRIBUTING.md) for details on how to get started.
Please adhere to this project's [Code of Conduct](https://github.com/Fdawgs/.github/blob/main/CODE_OF_CONDUCT.md) when contributing.

## License

`node-unrtf` is licensed under the [MIT](./LICENSE) license.

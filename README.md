# node-unrtf

[![GitHub Release](https://img.shields.io/github/release/Fdawgs/node-unrtf.svg)](https://github.com/Fdawgs/node-unrtf/releases/latest/) [![npm version](https://img.shields.io/npm/v/node-unrtf)](https://www.npmjs.com/package/node-unrtf)
[![Build Status](https://travis-ci.com/Fdawgs/node-unrtf.svg?branch=master)](https://travis-ci.com/Fdawgs/node-unrtf) [![Coverage Status](https://coveralls.io/repos/github/Fdawgs/node-unrtf/badge.svg?branch=master)](https://coveralls.io/github/Fdawgs/node-unrtf?branch=master) [![Known Vulnerabilities](https://snyk.io/test/github/Fdawgs/node-unrtf/badge.svg)](https://snyk.io/test/github/Fdawgs/node-unrtf) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

> Asynchronous node.js wrapper for the UnRTF RTF conversion program

## Intro

The node-unrtf module was created out of a need for a RTF-to-HTML conversion module at [Yeovil District Hospital NHSFT](https://yeovilhospital.co.uk/) to convert clinical documents in RTF format to HTML.

## Installation

### Linux support

A Windows binary (v0.19.3) is provided with this repository.
For Linux users, you will need to download the `unrtf` binary separately.

An example of downloading the binary on a Debian system:

```
sudo apt-get install unrtf
```

Once they have been installed, you will need to pass the `unrtf` installation directory in as parameters to an instance of the Poppler class:

```js
const { UnRTF } = require('node-unrtf');
const unRtf = new UnRTF('./usr/bin');
```

## Contributing

Please see [CONTRIBUTING.md](https://github.com/Fdawgs/node-unrtf/blob/master/CONTRIBUTING.md) for more details regarding contributing to this project.

## License

`node-unrtf` is licensed under the [MIT](https://github.com/Fdawgs/node-unrtf/blob/master/LICENSE) license.

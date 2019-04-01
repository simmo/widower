# Widower

[![npm][image-npm]][url-npm] [![downloads][image-downloads]][url-npm] [![Travis][image-travis]][url-travis]

Often when working with responsive designs, text will wrap leaving a widowed word on a new line. This JavaScript function replaces the last space with a non breaking space.

## Install

```bash
npm i @simmo/widower
```

## Usage

```javascript
const widower = require('widow-killer')

widower('Hello world')
// => Hello\u00A0world
```

MIT © [Mike Simmonds](https://simmo.me)

[image-downloads]: https://img.shields.io/npm/dm/@simmo/widower.svg?style=flat-square
[image-npm]: https://img.shields.io/npm/v/@simmo/widower.svg?style=flat-square
[image-travis]: https://img.shields.io/travis/com/simmo/widower.svg?style=flat-square
[url-npm]: https://npmjs.org/package/@simmo/widower
[url-travis]: https://travis-ci.com/simmo/widower

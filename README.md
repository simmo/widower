# Widower

[![npm][image-npm]][url-npm] [![downloads][image-downloads]][url-npm]

Often when working with responsive designs, text will wrap leaving a widowed word on a new line. This JavaScript function replaces the last space with a non breaking space.

## Install

```bash
npm i @simmo/widower
```

## Usage

```ts
import widower from 'widow-killer';

widower('Hello world');
// => Hello\u00A0world
```

MIT © [Mike Simmonds](https://mike.id)

[image-downloads]: https://img.shields.io/npm/dm/@simmo/widower.svg?style=flat-square
[image-npm]: https://img.shields.io/npm/v/@simmo/widower.svg?style=flat-square
[url-npm]: https://npmjs.org/package/@simmo/widower

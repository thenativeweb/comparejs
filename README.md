# comparejs

comparejs implements JavaScript's comparison operators the way you would expect them to be.

## Installation

```shell
$ npm install comparejs
```

## Quick Start

To use comparejs you need to reference it from your application by adding the following line:

```javascript
const compare = require('comparejs');
```

### Features

- Supports comparison of `array`, `boolean`, `function`, `null`, `number`, `object`, `string` and `undefined`.
- Supports comparison of native data types and constructor-created data types, such as `number` and `new Number()`.
- Supports comparison of objects and arrays using deep-equal.
- Supports comparison of objects and arrays with `<`, `<=`, `>` and `>=` by handling them as subsets.
- Supports comparison of objects by structure.
- Supports comparison with `undefined` correctly, as `<=` and `>=` are problematic in plain JavaScript.
- Supports comparison in a perfectly type-safe way out-of-the-box.
- Supports comparison by equality and identity, depending on what makes sense.

### Basic usage

Now you are able to use the various comparison operators. All you need to do is access the `compare` object and use its functions:

| Operator | Alias | Description |
|-|-|-|
| `equal(left, right)` | `eq(left, right)` | equal |
| `notEqual(left, right)` | `ne(left, right)` | not equal |
| `lessThan(left, right)` | `lt(left, right)` | less than |
| `lessThanOrEqual(left, right)` | `lte(left, right)` | less than or equal |
| `greaterThan(left, right)` | `gt(left, right)` | greater than |
| `greaterThanOrEqual(left, right)` | `gte(left, right)` | greater than or equal |
| `identity(left, right)` | `id(left, right)` | identity |

Please note that each comparison operator works on each combination of types and does what you would expect it to do.

### Structure comparison operators

For objects, there are special operators that compare by structure. Among other things, they can be used to verify objects against interfaces:

| Operator | Alias | Description |
|-|-|-|
| `equalByStructure(left, right)` | `eqs(left, right)` | equal by structure |
| `notEqualByStructure(left, right)` | `nes(left, right)` | not equal by structure |
| `lessThanByStructure(left, right)` | `lts(left, right)` | less than by structure |
| `lessThanOrEqualByStructure(left, right)` | `ltes(left, right)` | less than or equal by structure |
| `greaterThanByStructure(left, right)` | `gts(left, right)` | greater than by structure |
| `greaterThanOrEqualByStructure(left, right)` | `gtes(left, right)` | greater than or equal by structure |

Please note that these operators only work for objects. For any other type, they return `false`.

## Running the build

To build this module use [roboter](https://www.npmjs.com/package/roboter).

```shell
$ npx roboter
```

## License

The MIT License (MIT)
Copyright (c) 2012-2019 the native web.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

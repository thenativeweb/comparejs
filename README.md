# compare.js

compare.js implements JavaScript's comparison operators for Node.js the way you would expect them to be.

## Installation

    $ npm install compare.js

## Features

- Supports comparison of `number`, `string`, `boolean`, `function`, `object`, `array` and `undefined`.
- Supports comparison of native data types and constructor-created data types, such as `number` and `new Number()`.
- Supports comparison of objects and arrays using deep-equal.
- Supports comparison with `undefined` correctly, as <= and >= are problematic in plain JavaScript.
- Supports comparison in a perfectly type-safe way out-of-the-box.
- Supports comparison by equality and identity, depending on what makes sense.
- Developed using TDD and backed up by more than 300 unit tests.

## Quick Start

Using compare.js is easy. All you need to do is to add a reference to it within your Node.js application:

```javascript
var cmp = require('compare.js');
```

Now you are able to use the various comparison operators:

<table>
  <tr><th>Operator</th><th>Description</th></tr>
  <tr><td>cmp.eq(first, second)</td><td>equal</td></tr>
  <tr><td>cmp.ne(first, second)</td><td>not equal</td></tr>
  <tr><td>cmp.gt(first, second)</td><td>greater than</td></tr>
  <tr><td>cmp.ge(first, second)</td><td>greater than or equal</td></tr>
  <tr><td>cmp.lt(first, second)</td><td>less than</td></tr>
  <tr><td>cmp.le(first, second)</td><td>less than or equal</td></tr>
  <tr><td>cmp.id(first, second)</td><td>identical</td></tr>
</table>

Please note that each comparison operator works on each combination of types and does what you would expect it to do.

That's it :-)!

## Running the tests

Go to the folder where you have cloned compare.js to and run [mocha](https://github.com/visionmedia/mocha):

    $ mocha

## Copyright

(c) Copyright 2012 [Golo Roden](http://www.goloroden.de), contact using webmaster@goloroden.de
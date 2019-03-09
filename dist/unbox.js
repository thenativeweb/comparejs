'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var unbox = function unbox(value) {
  if ((0, _typeof2.default)(value) !== 'object') {
    return value;
  }

  if (value === null) {
    return value;
  }

  if (!value.constructor) {
    return value;
  }

  if (![Boolean, Number, String].includes(value.constructor)) {
    return value;
  }

  return value.valueOf();
};

module.exports = unbox;
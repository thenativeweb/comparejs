'use strict';

const unbox = function (value) {
  if (typeof value !== 'object') {
    return value;
  }
  if (value === null) {
    return value;
  }
  if (!value.constructor) {
    return value;
  }
  if (![ Boolean, Number, String ].includes(value.constructor)) {
    return value;
  }

  return value.valueOf();
};

module.exports = unbox;

'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var alias = {
  eq: 'equal',
  ne: 'notEqual',
  gt: 'greaterThan',
  ge: 'greaterThanOrEqual',
  lt: 'lessThan',
  le: 'lessThanOrEqual',
  id: 'identical',
  eqs: 'equalByStructure',
  nes: 'notEqualByStructure',
  gts: 'greaterThanByStructure',
  ges: 'greaterThanOrEqualByStructure',
  lts: 'lessThanByStructure',
  les: 'lessThanOrEqualByStructure'
};
var cmp;

var isSubset = function isSubset(potentialSubset, superset) {
  var visited = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if ((0, _typeof2.default)(potentialSubset) !== 'object') {
    throw new Error('Potential subset must be an object.');
  }

  if ((0, _typeof2.default)(superset) !== 'object') {
    throw new Error('Superset must be an object.');
  }

  if (potentialSubset === null && superset !== null || potentialSubset !== null && superset === null) {
    return false;
  }

  if (potentialSubset === null && superset === null) {
    return true;
  }

  if (Array.isArray(potentialSubset) && !Array.isArray(superset) || !Array.isArray(potentialSubset) && Array.isArray(superset)) {
    return false;
  }

  if (Array.isArray(potentialSubset) && Array.isArray(superset)) {
    if (potentialSubset.length > superset.length) {
      return false;
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop = function _loop() {
        var item = _step.value;

        if ((0, _typeof2.default)(item) === 'object') {
          if (visited.includes(item)) {
            return "continue";
          }

          visited.push(item);
          /* eslint-disable no-loop-func */

          var _supersetHasItem = superset.some(function (superItem) {
            return cmp.eq(item, superItem);
          });
          /* eslint-enable no-loop-func */


          if (!_supersetHasItem) {
            return {
              v: false
            };
          }

          return "continue";
        }
        /* eslint-disable no-loop-func */


        var supersetHasItem = superset.some(function (superItem) {
          return cmp.eq(item, superItem);
        });
        /* eslint-enable no-loop-func */

        if (!supersetHasItem) {
          return {
            v: false
          };
        }
      };

      for (var _iterator = potentialSubset[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _ret = _loop();

        switch (_ret) {
          case "continue":
            continue;

          default:
            if ((0, _typeof2.default)(_ret) === "object") return _ret.v;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return true;
  }

  if (Object.keys(potentialSubset).length > Object.keys(superset).length) {
    return false;
  }

  var _arr = Object.entries(potentialSubset);

  for (var _i = 0; _i < _arr.length; _i++) {
    var _arr$_i = (0, _slicedToArray2.default)(_arr[_i], 2),
        key = _arr$_i[0],
        value = _arr$_i[1];

    if ((0, _typeof2.default)(value) === 'object') {
      if (visited.includes(value)) {
        continue;
      }

      visited.push(value);

      if ((0, _typeof2.default)(superset[key]) !== 'object') {
        return false;
      }

      if (!isSubset(value, superset[key], visited)) {
        return false;
      }

      continue;
    }

    if (cmp.ne(value, superset[key])) {
      return false;
    }
  }

  return true;
};

var isSubsetStructure = function isSubsetStructure(derived, base, verified) {
  if (!verified) {
    verified = [];
  }

  for (var i in derived) {
    if (verified.indexOf(derived[i]) === -1) {
      if ((0, _typeof2.default)(derived[i]) === 'object') {
        verified.push(derived[i]);
      }

      if ((0, _typeof2.default)(base[i]) !== (0, _typeof2.default)(derived[i]) || (0, _typeof2.default)(derived[i]) === 'object' && !isSubsetStructure(derived[i], base[i], verified)) {
        return false;
      }
    }
  }

  return true;
};

var wrap = function wrap(fn1, fn2) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Reflect.apply(fn2, this, [fn1].concat(args));
  };
};

var unwrap = function unwrap(obj) {
  if (obj === null) {
    return obj;
  } else if ((0, _typeof2.default)(obj) === 'object' && (obj.constructor === Number || obj.constructor === String || obj.constructor === Boolean)) {
    return obj.valueOf();
  }

  return obj;
};

var processTypes = function processTypes(fn, first, second) {
  first = unwrap(first);
  second = unwrap(second);
  return fn(first, second);
};

var processTypesStructure = function processTypesStructure(fn, first, second) {
  if ((0, _typeof2.default)(first) !== 'object' || (0, _typeof2.default)(second) !== 'object') {
    return false;
  }

  if (first && second && (first.constructor === Array || second.constructor === Array)) {
    return false;
  }

  return fn(first, second);
};

cmp = {
  eq: function eq(first, second) {
    // If two functions shall be compared, compare their source code.
    if (typeof first === 'function' && typeof second === 'function') {
      first = first.toString();
      second = second.toString();
    } // Objects are compared as subsets, but only if both are defined (i.e. not null, undefined, ...).


    if ((0, _typeof2.default)(first) === 'object' && (0, _typeof2.default)(second) === 'object' && first && second) {
      if (Array.isArray(first) && !Array.isArray(second) || !Array.isArray(first) && Array.isArray(second)) {
        return false;
      }

      return isSubset(first, second) && isSubset(second, first);
    }

    return first === second;
  },
  eqs: function eqs(first, second) {
    // If exactly one is null, they are not equal by structure.
    if (first && !second || !first && second) {
      return false;
    } // If both are null, they are equal by structure.


    if (!first && !second) {
      return true;
    }

    return isSubsetStructure(first, second) && isSubsetStructure(second, first);
  },
  ne: function ne(first, second) {
    return !this.eq(first, second);
  },
  nes: function nes(first, second) {
    return !this.eqs(first, second);
  },
  gt: function gt(first, second) {
    // If at least one parameter is a function, greater than does not make sense.
    if (typeof first === 'function' || typeof second === 'function') {
      return false;
    } // Objects are compared as subsets, but only if both are defined (i.e. not null, undefined, ...).


    if ((0, _typeof2.default)(first) === 'object' && (0, _typeof2.default)(second) === 'object' && first && second) {
      return isSubset(second, first) && !isSubset(first, second);
    } // If an object is compared with null, neither is greater.


    if ((0, _typeof2.default)(first) === 'object' && !second || (0, _typeof2.default)(second) === 'object' && !first) {
      return false;
    }

    return first > second;
  },
  gts: function gts(first, second) {
    // If the second object is null, the first is greater by structure.
    if (first && !second) {
      return true;
    } // Otherwise, if the first is null, it is not greater (no matter what the second is).


    if (!first) {
      return false;
    } // If both are not null, compare as a subset. Note that second must be a subset of first, if first
    // is greater than second.


    return isSubsetStructure(second, first) && !isSubsetStructure(first, second);
  },
  ge: function ge(first, second) {
    return this.gt(first, second) || this.eq(first, second);
  },
  ges: function ges(first, second) {
    return this.gts(first, second) || this.eqs(first, second);
  },
  lt: function lt(first, second) {
    // If at least one parameter is a function, less than does not make sense.
    if (typeof first === 'function' || typeof second === 'function') {
      return false;
    } // Objects are compared as subsets, but only if both are defined (i.e. not null, undefined, ...).


    if ((0, _typeof2.default)(first) === 'object' && (0, _typeof2.default)(second) === 'object' && first && second) {
      return isSubset(first, second) && !isSubset(second, first);
    } // If an object is compared with null, neither is greater.


    if ((0, _typeof2.default)(first) === 'object' && !second || (0, _typeof2.default)(second) === 'object' && !first) {
      return false;
    }

    return first < second;
  },
  lts: function lts(first, second) {
    // If the first object is null, it is less by structure.
    if (!first && second) {
      return true;
    } // Otherwise, if the second is null, the first is not less (no matter what it is).


    if (!second) {
      return false;
    } // If both are not null, compare as a subset. Note that first must be a subset of second, if first
    // is less than second.


    return isSubsetStructure(first, second) && !isSubsetStructure(second, first);
  },
  le: function le(first, second) {
    return this.lt(first, second) || this.eq(first, second);
  },
  les: function les(first, second) {
    return this.lts(first, second) || this.eqs(first, second);
  },
  id: function id(first, second) {
    // Functions and objects need to be compared by reference, all other types are compared by value.
    if (typeof first === 'function' && typeof second === 'function' || (0, _typeof2.default)(first) === 'object' && (0, _typeof2.default)(second) === 'object') {
      return first === second;
    }

    return this.eq(first, second);
  }
};

var setupFunction = function setupFunction(comparer, fn) {
  return wrap(comparer.bind(cmp), fn);
};

for (var j in cmp) {
  if (cmp.hasOwnProperty(j)) {
    if (j.length === 3) {
      module.exports[j] = module.exports[alias[j]] = setupFunction(cmp[j], processTypesStructure);
    } else {
      module.exports[j] = module.exports[alias[j]] = setupFunction(cmp[j], processTypes);
    }
  }
}
'use strict';

const alias = {
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

let cmp;

const isSubset = function (potentialSubset, superset, visited = []) {
  if (typeof potentialSubset !== 'object') {
    throw new Error('Potential subset must be an object.');
  }
  if (typeof superset !== 'object') {
    throw new Error('Superset must be an object.');
  }

  if (
    (potentialSubset === null && superset !== null) ||
    (potentialSubset !== null && superset === null)
  ) {
    return false;
  }

  if (potentialSubset === null && superset === null) {
    return true;
  }

  if (
    (Array.isArray(potentialSubset) && !Array.isArray(superset)) ||
    (!Array.isArray(potentialSubset) && Array.isArray(superset))
  ) {
    return false;
  }

  if (Array.isArray(potentialSubset) && Array.isArray(superset)) {
    if (potentialSubset.length > superset.length) {
      return false;
    }

    for (const item of potentialSubset) {
      if (typeof item === 'object') {
        if (visited.includes(item)) {
          continue;
        }

        visited.push(item);

        /* eslint-disable no-loop-func */
        const supersetHasItem = superset.some(superItem => cmp.eq(item, superItem));
        /* eslint-enable no-loop-func */

        if (!supersetHasItem) {
          return false;
        }

        continue;
      }

      /* eslint-disable no-loop-func */
      const supersetHasItem = superset.some(superItem => cmp.eq(item, superItem));
      /* eslint-enable no-loop-func */

      if (!supersetHasItem) {
        return false;
      }
    }

    return true;
  }

  if (Object.keys(potentialSubset).length > Object.keys(superset).length) {
    return false;
  }

  for (const [ key, value ] of Object.entries(potentialSubset)) {
    if (typeof value === 'object') {
      if (visited.includes(value)) {
        continue;
      }

      visited.push(value);

      if (typeof superset[key] !== 'object') {
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

const isSubsetStructure = function (derived, base, verified) {
  if (!verified) {
    verified = [];
  }

  for (const i in derived) {
    if (verified.indexOf(derived[i]) === -1) {
      if (typeof derived[i] === 'object') {
        verified.push(derived[i]);
      }
      if (
        (typeof base[i] !== typeof derived[i]) ||
        (typeof derived[i] === 'object' && !isSubsetStructure(derived[i], base[i], verified))
      ) {
        return false;
      }
    }
  }

  return true;
};

const wrap = function (fn1, fn2) {
  return function (...args) {
    return Reflect.apply(fn2, this, [ fn1, ...args ]);
  };
};

const unwrap = function (obj) {
  if (obj === null) {
    return obj;
  } else if (typeof obj === 'object' && (obj.constructor === Number || obj.constructor === String || obj.constructor === Boolean)) {
    return obj.valueOf();
  }

  return obj;
};

const processTypes = function (fn, first, second) {
  first = unwrap(first);
  second = unwrap(second);

  return fn(first, second);
};

const processTypesStructure = function (fn, first, second) {
  if (typeof first !== 'object' || typeof second !== 'object') {
    return false;
  }

  if (first && second && (first.constructor === Array || second.constructor === Array)) {
    return false;
  }

  return fn(first, second);
};

cmp = {
  eq (first, second) {
    // If two functions shall be compared, compare their source code.
    if (typeof first === 'function' && typeof second === 'function') {
      first = first.toString();
      second = second.toString();
    }

    // Objects are compared as subsets, but only if both are defined (i.e. not null, undefined, ...).
    if (typeof first === 'object' && typeof second === 'object' && first && second) {
      if (
        (Array.isArray(first) && !Array.isArray(second)) ||
        (!Array.isArray(first) && Array.isArray(second))
      ) {
        return false;
      }

      return isSubset(first, second) && isSubset(second, first);
    }

    return first === second;
  },

  eqs (first, second) {
    // If exactly one is null, they are not equal by structure.
    if ((first && !second) || (!first && second)) {
      return false;
    }

    // If both are null, they are equal by structure.
    if (!first && !second) {
      return true;
    }

    return isSubsetStructure(first, second) && isSubsetStructure(second, first);
  },

  ne (first, second) {
    return !this.eq(first, second);
  },

  nes (first, second) {
    return !this.eqs(first, second);
  },

  gt (first, second) {
    // If at least one parameter is a function, greater than does not make sense.
    if (typeof first === 'function' || typeof second === 'function') {
      return false;
    }

    // Objects are compared as subsets, but only if both are defined (i.e. not null, undefined, ...).
    if (typeof first === 'object' && typeof second === 'object' && first && second) {
      return isSubset(second, first) && !isSubset(first, second);
    }

    // If an object is compared with null, neither is greater.
    if ((typeof first === 'object' && !second) || (typeof second === 'object' && !first)) {
      return false;
    }

    return first > second;
  },

  gts (first, second) {
    // If the second object is null, the first is greater by structure.
    if (first && !second) {
      return true;
    }

    // Otherwise, if the first is null, it is not greater (no matter what the second is).
    if (!first) {
      return false;
    }

    // If both are not null, compare as a subset. Note that second must be a subset of first, if first
    // is greater than second.
    return isSubsetStructure(second, first) && !isSubsetStructure(first, second);
  },

  ge (first, second) {
    return this.gt(first, second) || this.eq(first, second);
  },

  ges (first, second) {
    return this.gts(first, second) || this.eqs(first, second);
  },

  lt (first, second) {
    // If at least one parameter is a function, less than does not make sense.
    if (typeof first === 'function' || typeof second === 'function') {
      return false;
    }

    // Objects are compared as subsets, but only if both are defined (i.e. not null, undefined, ...).
    if (typeof first === 'object' && typeof second === 'object' && first && second) {
      return isSubset(first, second) && !isSubset(second, first);
    }

    // If an object is compared with null, neither is greater.
    if ((typeof first === 'object' && !second) || (typeof second === 'object' && !first)) {
      return false;
    }

    return first < second;
  },

  lts (first, second) {
    // If the first object is null, it is less by structure.
    if (!first && second) {
      return true;
    }

    // Otherwise, if the second is null, the first is not less (no matter what it is).
    if (!second) {
      return false;
    }

    // If both are not null, compare as a subset. Note that first must be a subset of second, if first
    // is less than second.
    return isSubsetStructure(first, second) && !isSubsetStructure(second, first);
  },

  le (first, second) {
    return this.lt(first, second) || this.eq(first, second);
  },

  les (first, second) {
    return this.lts(first, second) || this.eqs(first, second);
  },

  id (first, second) {
    // Functions and objects need to be compared by reference, all other types are compared by value.
    if (
      (typeof first === 'function' && typeof second === 'function') ||
      (typeof first === 'object' && typeof second === 'object')
    ) {
      return first === second;
    }

    return this.eq(first, second);
  }
};

const setupFunction = function (comparer, fn) {
  return wrap(comparer.bind(cmp), fn);
};

for (const j in cmp) {
  if (cmp.hasOwnProperty(j)) {
    if (j.length === 3) {
      module.exports[j] = module.exports[alias[j]] = setupFunction(cmp[j], processTypesStructure);
    } else {
      module.exports[j] = module.exports[alias[j]] = setupFunction(cmp[j], processTypes);
    }
  }
}

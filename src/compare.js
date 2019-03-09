'use strict';

const isSubsetOf = require('is-subset-of'),
      Type = require('typedescriptor');

const unbox = require('./unbox');

const compare = {
  equal (left, right) {
    const leftType = Type.of(left),
          rightType = Type.of(right);

    if (leftType === 'array' && rightType === 'array') {
      if (left.length !== right.length) {
        return false;
      }

      for (let i = 0; i < left.length; i++) {
        const leftItem = left[i],
              rightItem = right[i];

        const areEqual = compare.equal(leftItem, rightItem);

        if (!areEqual) {
          return false;
        }
      }

      return true;
    }

    if (leftType === 'object' && rightType === 'object') {
      const areEqual = isSubsetOf(left, right) && isSubsetOf(right, left);

      return areEqual;
    }

    if (leftType === 'function' && rightType === 'function') {
      const leftSource = left.toString(),
            rightSource = right.toString();

      return leftSource === rightSource;
    }

    const leftUnboxed = unbox(left),
          rightUnboxed = unbox(right);

    return leftUnboxed === rightUnboxed;
  },
  notEqual (left, right) {
    return !compare.equal(left, right);
  },
  lessThan (left, right) {
    const leftType = Type.of(left),
          rightType = Type.of(right);

    if (
      (leftType !== rightType) ||
      (leftType === 'function' && rightType === 'function')
    ) {
      return false;
    }

    if (
      (leftType === 'array' && rightType === 'array') ||
      (leftType === 'object' && rightType === 'object')
    ) {
      const isLessThan = isSubsetOf(left, right) && !isSubsetOf(right, left);

      return isLessThan;
    }

    const leftUnboxed = unbox(left),
          rightUnboxed = unbox(right);

    return leftUnboxed < rightUnboxed;
  },
  lessThanOrEqual (left, right) {
    return compare.lessThan(left, right) || compare.equal(left, right);
  },
  greaterThan (left, right) {
    return compare.lessThan(right, left);
  },
  greaterThanOrEqual (left, right) {
    return compare.lessThan(right, left) || compare.equal(right, left);
  },
  identity (left, right) {
    return left === right;
  },

  equalByStructure (left, right) {
    const leftType = Type.of(left),
          rightType = Type.of(right);

    if (leftType !== 'object' || rightType !== 'object') {
      return false;
    }

    const areEqualByStructure =
      isSubsetOf.structural(left, right) &&
      isSubsetOf.structural(right, left);

    return areEqualByStructure;
  },
  notEqualByStructure (left, right) {
    const leftType = Type.of(left),
          rightType = Type.of(right);

    if (leftType !== 'object' || rightType !== 'object') {
      return false;
    }

    return !compare.equalByStructure(left, right);
  },
  lessThanByStructure (left, right) {
    const leftType = Type.of(left),
          rightType = Type.of(right);

    if (leftType !== 'object' || rightType !== 'object') {
      return false;
    }

    const isLessThanByStructure =
      isSubsetOf.structural(left, right) &&
      !isSubsetOf.structural(right, left);

    return isLessThanByStructure;
  },
  lessThanOrEqualByStructure (left, right) {
    const leftType = Type.of(left),
          rightType = Type.of(right);

    if (leftType !== 'object' || rightType !== 'object') {
      return false;
    }

    return compare.lessThanByStructure(left, right) || compare.equalByStructure(left, right);
  },
  greaterThanByStructure (left, right) {
    const leftType = Type.of(left),
          rightType = Type.of(right);

    if (leftType !== 'object' || rightType !== 'object') {
      return false;
    }

    return compare.lessThanByStructure(right, left);
  },
  greaterThanOrEqualByStructure (left, right) {
    const leftType = Type.of(left),
          rightType = Type.of(right);

    if (leftType !== 'object' || rightType !== 'object') {
      return false;
    }

    return compare.lessThanByStructure(right, left) || compare.equalByStructure(right, left);
  },

  eq (left, right) {
    return compare.equal(left, right);
  },
  ne (left, right) {
    return compare.notEqual(left, right);
  },
  lt (left, right) {
    return compare.lessThan(left, right);
  },
  lte (left, right) {
    return compare.lessThanOrEqual(left, right);
  },
  gt (left, right) {
    return compare.greaterThan(left, right);
  },
  gte (left, right) {
    return compare.greaterThanOrEqual(left, right);
  },
  id (left, right) {
    return compare.identity(left, right);
  },

  eqs (left, right) {
    return compare.equalByStructure(left, right);
  },
  nes (left, right) {
    return compare.notEqualByStructure(left, right);
  },
  lts (left, right) {
    return compare.lessThanByStructure(left, right);
  },
  ltes (left, right) {
    return compare.lessThanOrEqualByStructure(left, right);
  },
  gts (left, right) {
    return compare.greaterThanByStructure(left, right);
  },
  gtes (left, right) {
    return compare.greaterThanOrEqualByStructure(left, right);
  }
};

module.exports = compare;

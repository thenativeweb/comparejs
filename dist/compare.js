'use strict';

var isSubsetOf = require('is-subset-of'),
    Type = require('typedescriptor');

var unbox = require('./unbox');

var compare = {
  equal: function equal(left, right) {
    var leftType = Type.of(left),
        rightType = Type.of(right);

    if (leftType === 'array' && rightType === 'array') {
      if (left.length !== right.length) {
        return false;
      }

      for (var i = 0; i < left.length; i++) {
        var leftItem = left[i],
            rightItem = right[i];
        var areEqual = compare.equal(leftItem, rightItem);

        if (!areEqual) {
          return false;
        }
      }

      return true;
    }

    if (leftType === 'object' && rightType === 'object') {
      var _areEqual = isSubsetOf(left, right) && isSubsetOf(right, left);

      return _areEqual;
    }

    if (leftType === 'function' && rightType === 'function') {
      var leftSource = left.toString(),
          rightSource = right.toString();
      return leftSource === rightSource;
    }

    var leftUnboxed = unbox(left),
        rightUnboxed = unbox(right);
    return leftUnboxed === rightUnboxed;
  },
  notEqual: function notEqual(left, right) {
    return !compare.equal(left, right);
  },
  lessThan: function lessThan(left, right) {
    var leftType = Type.of(left),
        rightType = Type.of(right);

    if (leftType !== rightType || leftType === 'function' && rightType === 'function') {
      return false;
    }

    if (leftType === 'array' && rightType === 'array' || leftType === 'object' && rightType === 'object') {
      var isLessThan = isSubsetOf(left, right) && !isSubsetOf(right, left);
      return isLessThan;
    }

    var leftUnboxed = unbox(left),
        rightUnboxed = unbox(right);
    return leftUnboxed < rightUnboxed;
  },
  lessThanOrEqual: function lessThanOrEqual(left, right) {
    return compare.lessThan(left, right) || compare.equal(left, right);
  },
  greaterThan: function greaterThan(left, right) {
    return compare.lessThan(right, left);
  },
  greaterThanOrEqual: function greaterThanOrEqual(left, right) {
    return compare.lessThan(right, left) || compare.equal(right, left);
  },
  identity: function identity(left, right) {
    return left === right;
  },
  equalByStructure: function equalByStructure(left, right) {
    var leftType = Type.of(left),
        rightType = Type.of(right);

    if (leftType !== 'object' || rightType !== 'object') {
      return false;
    }

    var areEqualByStructure = isSubsetOf.structural(left, right) && isSubsetOf.structural(right, left);
    return areEqualByStructure;
  },
  notEqualByStructure: function notEqualByStructure(left, right) {
    var leftType = Type.of(left),
        rightType = Type.of(right);

    if (leftType !== 'object' || rightType !== 'object') {
      return false;
    }

    return !compare.equalByStructure(left, right);
  },
  lessThanByStructure: function lessThanByStructure(left, right) {
    var leftType = Type.of(left),
        rightType = Type.of(right);

    if (leftType !== 'object' || rightType !== 'object') {
      return false;
    }

    var isLessThanByStructure = isSubsetOf.structural(left, right) && !isSubsetOf.structural(right, left);
    return isLessThanByStructure;
  },
  lessThanOrEqualByStructure: function lessThanOrEqualByStructure(left, right) {
    var leftType = Type.of(left),
        rightType = Type.of(right);

    if (leftType !== 'object' || rightType !== 'object') {
      return false;
    }

    return compare.lessThanByStructure(left, right) || compare.equalByStructure(left, right);
  },
  greaterThanByStructure: function greaterThanByStructure(left, right) {
    var leftType = Type.of(left),
        rightType = Type.of(right);

    if (leftType !== 'object' || rightType !== 'object') {
      return false;
    }

    return compare.lessThanByStructure(right, left);
  },
  greaterThanOrEqualByStructure: function greaterThanOrEqualByStructure(left, right) {
    var leftType = Type.of(left),
        rightType = Type.of(right);

    if (leftType !== 'object' || rightType !== 'object') {
      return false;
    }

    return compare.lessThanByStructure(right, left) || compare.equalByStructure(right, left);
  },
  eq: function eq(left, right) {
    return compare.equal(left, right);
  },
  ne: function ne(left, right) {
    return compare.notEqual(left, right);
  },
  lt: function lt(left, right) {
    return compare.lessThan(left, right);
  },
  lte: function lte(left, right) {
    return compare.lessThanOrEqual(left, right);
  },
  gt: function gt(left, right) {
    return compare.greaterThan(left, right);
  },
  gte: function gte(left, right) {
    return compare.greaterThanOrEqual(left, right);
  },
  id: function id(left, right) {
    return compare.identity(left, right);
  },
  eqs: function eqs(left, right) {
    return compare.equalByStructure(left, right);
  },
  nes: function nes(left, right) {
    return compare.notEqualByStructure(left, right);
  },
  lts: function lts(left, right) {
    return compare.lessThanByStructure(left, right);
  },
  ltes: function ltes(left, right) {
    return compare.lessThanOrEqualByStructure(left, right);
  },
  gts: function gts(left, right) {
    return compare.greaterThanByStructure(left, right);
  },
  gtes: function gtes(left, right) {
    return compare.greaterThanOrEqualByStructure(left, right);
  }
};
module.exports = compare;
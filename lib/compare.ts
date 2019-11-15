import { isSubsetOf } from 'is-subset-of';
import { Type } from 'typedescriptor';
import { unbox } from './unbox';

const compare = {
  equal (left: any, right: any): boolean {
    if (Type.isArray(left) && Type.isArray(right)) {
      if (left.length !== right.length) {
        return false;
      }

      for (const [ i, leftItem ] of left.entries()) {
        const rightItem = right[i];

        const areEqual = compare.equal(leftItem, rightItem);

        if (!areEqual) {
          return false;
        }
      }

      return true;
    }

    if (Type.isObject(left) && Type.isObject(right)) {
      const areEqual = isSubsetOf(left, right) && isSubsetOf(right, left);

      return areEqual;
    }

    if (Type.isFunction(left) && Type.isFunction(right)) {
      const leftSource = left.toString(),
            rightSource = right.toString();

      return leftSource === rightSource;
    }

    const leftUnboxed = unbox(left),
          rightUnboxed = unbox(right);

    return leftUnboxed === rightUnboxed;
  },
  notEqual (left: any, right: any): boolean {
    return !compare.equal(left, right);
  },
  lessThan (left: any, right: any): boolean {
    const leftType = Type.of(left),
          rightType = Type.of(right);

    if (
      (leftType !== rightType) ||
      (Type.isFunction(left) && Type.isFunction(right))
    ) {
      return false;
    }

    if (
      (Type.isArray(left) && Type.isArray(right)) ||
      (Type.isObject(left) && Type.isObject(right))
    ) {
      const isLessThan = isSubsetOf(left, right) && !isSubsetOf(right, left);

      return isLessThan;
    }

    const leftUnboxed = unbox(left),
          rightUnboxed = unbox(right);

    return leftUnboxed < rightUnboxed;
  },
  lessThanOrEqual (left: any, right: any): boolean {
    return compare.lessThan(left, right) || compare.equal(left, right);
  },
  greaterThan (left: any, right: any): boolean {
    return compare.lessThan(right, left);
  },
  greaterThanOrEqual (left: any, right: any): boolean {
    return compare.lessThan(right, left) || compare.equal(right, left);
  },
  identity (left: any, right: any): boolean {
    return left === right;
  },

  equalByStructure (left: any, right: any): boolean {
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
  notEqualByStructure (left: any, right: any): boolean {
    const leftType = Type.of(left),
          rightType = Type.of(right);

    if (leftType !== 'object' || rightType !== 'object') {
      return false;
    }

    return !compare.equalByStructure(left, right);
  },
  lessThanByStructure (left: any, right: any): boolean {
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
  lessThanOrEqualByStructure (left: any, right: any): boolean {
    const leftType = Type.of(left),
          rightType = Type.of(right);

    if (leftType !== 'object' || rightType !== 'object') {
      return false;
    }

    return compare.lessThanByStructure(left, right) || compare.equalByStructure(left, right);
  },
  greaterThanByStructure (left: any, right: any): boolean {
    const leftType = Type.of(left),
          rightType = Type.of(right);

    if (leftType !== 'object' || rightType !== 'object') {
      return false;
    }

    return compare.lessThanByStructure(right, left);
  },
  greaterThanOrEqualByStructure (left: any, right: any): boolean {
    const leftType = Type.of(left),
          rightType = Type.of(right);

    if (leftType !== 'object' || rightType !== 'object') {
      return false;
    }

    return compare.lessThanByStructure(right, left) || compare.equalByStructure(right, left);
  },

  eq (left: any, right: any): boolean {
    return compare.equal(left, right);
  },
  ne (left: any, right: any): boolean {
    return compare.notEqual(left, right);
  },
  lt (left: any, right: any): boolean {
    return compare.lessThan(left, right);
  },
  lte (left: any, right: any): boolean {
    return compare.lessThanOrEqual(left, right);
  },
  gt (left: any, right: any): boolean {
    return compare.greaterThan(left, right);
  },
  gte (left: any, right: any): boolean {
    return compare.greaterThanOrEqual(left, right);
  },
  id (left: any, right: any): boolean {
    return compare.identity(left, right);
  },

  eqs (left: any, right: any): boolean {
    return compare.equalByStructure(left, right);
  },
  nes (left: any, right: any): boolean {
    return compare.notEqualByStructure(left, right);
  },
  lts (left: any, right: any): boolean {
    return compare.lessThanByStructure(left, right);
  },
  ltes (left: any, right: any): boolean {
    return compare.lessThanOrEqualByStructure(left, right);
  },
  gts (left: any, right: any): boolean {
    return compare.greaterThanByStructure(left, right);
  },
  gtes (left: any, right: any): boolean {
    return compare.greaterThanOrEqualByStructure(left, right);
  }
};

export { compare };

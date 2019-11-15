import { compare } from '../../lib/compare';
import 'should';

suite('array x array', (): void => {
  /* eslint-disable @typescript-eslint/no-array-constructor */
  const A1 = new Array(),
        A2 = new Array(),
        B1 = new Array(),
        Empty = new Array();
  /* eslint-enable @typescript-eslint/no-array-constructor */

  const a1 = [ 2 ],
        a2 = [ 2 ],
        b1 = [ 3 ],
        empty: any[] = [];

  A1.push(2);
  A2.push(2);
  B1.push(3);

  suite('eq', (): void => {
    suite('equal => true', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.eq(a1, a2).should.equal(true);
      });

      test('array x Array()', async (): Promise<void> => {
        compare.eq(a1, A1).should.equal(true);
      });

      test('Array() x array', async (): Promise<void> => {
        compare.eq(A1, a1).should.equal(true);
      });

      test('Array() x Array()', async (): Promise<void> => {
        compare.eq(A1, A2).should.equal(true);
      });

      test('null x null', async (): Promise<void> => {
        compare.eq(null, null).should.equal(true);
      });

      test('array[3] x array[3]', async (): Promise<void> => {
        compare.eq([ 2, 3, 4 ], [ 2, 3, 4 ]).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.eq(a1, b1).should.equal(false);
      });

      test('array x Array()', async (): Promise<void> => {
        compare.eq(a1, B1).should.equal(false);
      });

      test('Array() x array', async (): Promise<void> => {
        compare.eq(A1, b1).should.equal(false);
      });

      test('Array() x Array()', async (): Promise<void> => {
        compare.eq(A1, B1).should.equal(false);
      });

      test('array x null', async (): Promise<void> => {
        compare.eq(a1, null).should.equal(false);
      });

      test('Array() x null', async (): Promise<void> => {
        compare.eq(A1, null).should.equal(false);
      });

      test('null x array', async (): Promise<void> => {
        compare.eq(null, a1).should.equal(false);
      });

      test('null x Array()', async (): Promise<void> => {
        compare.eq(null, A1).should.equal(false);
      });

      test('array[3] x array[3]', async (): Promise<void> => {
        compare.eq([ 2, 3, 4 ], [ 4, 5, 6 ]).should.equal(false);
      });
    });
  });

  suite('eqs', (): void => {
    suite('any => false', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.eqs(a1, a1).should.equal(false);
      });
    });
  });

  suite('ne', (): void => {
    suite('equal => false', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.ne(a1, a2).should.equal(false);
      });

      test('array x Array()', async (): Promise<void> => {
        compare.ne(a1, A1).should.equal(false);
      });

      test('Array() x array', async (): Promise<void> => {
        compare.ne(A1, a1).should.equal(false);
      });

      test('Array() x Array()', async (): Promise<void> => {
        compare.ne(A1, A2).should.equal(false);
      });

      test('null x null', async (): Promise<void> => {
        compare.ne(null, null).should.equal(false);
      });

      test('array[3] x array[3]', async (): Promise<void> => {
        compare.ne([ 2, 3, 4 ], [ 2, 3, 4 ]).should.equal(false);
      });
    });

    suite('not equal => true', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.ne(a1, b1).should.equal(true);
      });

      test('array x Array()', async (): Promise<void> => {
        compare.ne(a1, B1).should.equal(true);
      });

      test('Array() x array', async (): Promise<void> => {
        compare.ne(A1, b1).should.equal(true);
      });

      test('Array() x Array()', async (): Promise<void> => {
        compare.ne(A1, B1).should.equal(true);
      });

      test('array x null', async (): Promise<void> => {
        compare.ne(a1, null).should.equal(true);
      });

      test('Array() x null', async (): Promise<void> => {
        compare.ne(A1, null).should.equal(true);
      });

      test('null x array', async (): Promise<void> => {
        compare.ne(null, a1).should.equal(true);
      });

      test('null x Array()', async (): Promise<void> => {
        compare.ne(null, A1).should.equal(true);
      });

      test('array[3] x array[3]', async (): Promise<void> => {
        compare.ne([ 2, 3, 4 ], [ 4, 5, 6 ]).should.equal(true);
      });
    });
  });

  suite('nes', (): void => {
    suite('any => false', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.nes(a1, a1).should.equal(false);
      });
    });
  });

  suite('gt', (): void => {
    suite('greater than => true', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.gt(a1, empty).should.equal(true);
      });

      test('array x Array()', async (): Promise<void> => {
        compare.gt(a1, Empty).should.equal(true);
      });

      test('Array() x array', async (): Promise<void> => {
        compare.gt(A1, empty).should.equal(true);
      });

      test('Array() x Array()', async (): Promise<void> => {
        compare.gt(A1, Empty).should.equal(true);
      });

      test('array[3] x array[1]', async (): Promise<void> => {
        compare.gt([ 2, 3, 4 ], [ 3 ]).should.equal(true);
      });
    });

    suite('equal => false', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.gt(a1, a2).should.equal(false);
      });

      test('array x Array()', async (): Promise<void> => {
        compare.gt(a1, A1).should.equal(false);
      });

      test('Array() x array', async (): Promise<void> => {
        compare.gt(A1, a1).should.equal(false);
      });

      test('Array() x Array()', async (): Promise<void> => {
        compare.gt(A1, A2).should.equal(false);
      });

      test('null x null', async (): Promise<void> => {
        compare.gt(null, null).should.equal(false);
      });

      test('array[3] x array[3]', async (): Promise<void> => {
        compare.gt([ 2, 3, 4 ], [ 2, 3, 4 ]).should.equal(false);
      });
    });

    suite('not equal => false', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.gt(a1, b1).should.equal(false);
      });

      test('array x Array()', async (): Promise<void> => {
        compare.gt(a1, B1).should.equal(false);
      });

      test('Array() x array', async (): Promise<void> => {
        compare.gt(A1, b1).should.equal(false);
      });

      test('Array() x Array()', async (): Promise<void> => {
        compare.gt(A1, B1).should.equal(false);
      });

      test('array x null', async (): Promise<void> => {
        compare.gt(a1, null).should.equal(false);
      });

      test('Array() x null', async (): Promise<void> => {
        compare.gt(A1, null).should.equal(false);
      });

      test('null x array', async (): Promise<void> => {
        compare.gt(null, a1).should.equal(false);
      });

      test('null x Array()', async (): Promise<void> => {
        compare.gt(null, A1).should.equal(false);
      });

      test('array[3] x array[3]', async (): Promise<void> => {
        compare.gt([ 2, 3, 4 ], [ 4, 5, 6 ]).should.equal(false);
      });
    });

    suite('less than => false', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.gt(empty, a1).should.equal(false);
      });

      test('array x Array()', async (): Promise<void> => {
        compare.gt(Empty, a1).should.equal(false);
      });

      test('Array() x array', async (): Promise<void> => {
        compare.gt(empty, A1).should.equal(false);
      });

      test('Array() x Array()', async (): Promise<void> => {
        compare.gt(Empty, A1).should.equal(false);
      });

      test('array[1] x array[3]', async (): Promise<void> => {
        compare.gt([ 3 ], [ 2, 3, 4 ]).should.equal(false);
      });
    });
  });

  suite('gts', (): void => {
    suite('any => false', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.gts(a1, a1).should.equal(false);
      });
    });
  });

  suite('gte', (): void => {
    suite('greater than => true', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.gte(a1, empty).should.equal(true);
      });

      test('array x Array()', async (): Promise<void> => {
        compare.gte(a1, Empty).should.equal(true);
      });

      test('Array() x array', async (): Promise<void> => {
        compare.gte(A1, empty).should.equal(true);
      });

      test('Array() x Array()', async (): Promise<void> => {
        compare.gte(A1, Empty).should.equal(true);
      });

      test('array[3] x array[1]', async (): Promise<void> => {
        compare.gte([ 2, 3, 4 ], [ 3 ]).should.equal(true);
      });
    });

    suite('equal => true', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.gte(a1, a2).should.equal(true);
      });

      test('array x Array()', async (): Promise<void> => {
        compare.gte(a1, A1).should.equal(true);
      });

      test('Array() x array', async (): Promise<void> => {
        compare.gte(A1, a1).should.equal(true);
      });

      test('Array() x Array()', async (): Promise<void> => {
        compare.gte(A1, A2).should.equal(true);
      });

      test('null x null', async (): Promise<void> => {
        compare.gte(null, null).should.equal(true);
      });

      test('array[3] x array[3]', async (): Promise<void> => {
        compare.gte([ 2, 3, 4 ], [ 2, 3, 4 ]).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.gte(a1, b1).should.equal(false);
      });

      test('array x Array()', async (): Promise<void> => {
        compare.gte(a1, B1).should.equal(false);
      });

      test('Array() x array', async (): Promise<void> => {
        compare.gte(A1, b1).should.equal(false);
      });

      test('Array() x Array()', async (): Promise<void> => {
        compare.gte(A1, B1).should.equal(false);
      });

      test('array x null', async (): Promise<void> => {
        compare.gte(a1, null).should.equal(false);
      });

      test('Array() x null', async (): Promise<void> => {
        compare.gte(A1, null).should.equal(false);
      });

      test('null x array', async (): Promise<void> => {
        compare.gte(null, a1).should.equal(false);
      });

      test('null x Array()', async (): Promise<void> => {
        compare.gte(null, A1).should.equal(false);
      });

      test('array[3] x array[3]', async (): Promise<void> => {
        compare.gte([ 2, 3, 4 ], [ 4, 5, 6 ]).should.equal(false);
      });
    });

    suite('less than => false', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.gte(empty, a1).should.equal(false);
      });

      test('array x Array()', async (): Promise<void> => {
        compare.gte(Empty, a1).should.equal(false);
      });

      test('Array() x array', async (): Promise<void> => {
        compare.gte(empty, A1).should.equal(false);
      });

      test('Array() x Array()', async (): Promise<void> => {
        compare.gte(Empty, A1).should.equal(false);
      });

      test('array[1] x array[3]', async (): Promise<void> => {
        compare.gte([ 3 ], [ 2, 3, 4 ]).should.equal(false);
      });
    });
  });

  suite('gtes', (): void => {
    suite('any => false', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.gtes(a1, a1).should.equal(false);
      });
    });
  });

  suite('lt', (): void => {
    suite('greater than => false', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.lt(a1, empty).should.equal(false);
      });

      test('array x Array()', async (): Promise<void> => {
        compare.lt(a1, Empty).should.equal(false);
      });

      test('Array() x array', async (): Promise<void> => {
        compare.lt(A1, empty).should.equal(false);
      });

      test('Array() x Array()', async (): Promise<void> => {
        compare.lt(A1, Empty).should.equal(false);
      });

      test('array[3] x array[1]', async (): Promise<void> => {
        compare.lt([ 2, 3, 4 ], [ 3 ]).should.equal(false);
      });
    });

    suite('equal => false', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.lt(a1, a2).should.equal(false);
      });

      test('array x Array()', async (): Promise<void> => {
        compare.lt(a1, A1).should.equal(false);
      });

      test('Array() x array', async (): Promise<void> => {
        compare.lt(A1, a1).should.equal(false);
      });

      test('Array() x Array()', async (): Promise<void> => {
        compare.lt(A1, A2).should.equal(false);
      });

      test('null x null', async (): Promise<void> => {
        compare.lt(null, null).should.equal(false);
      });

      test('array[3] x array[3]', async (): Promise<void> => {
        compare.lt([ 2, 3, 4 ], [ 2, 3, 4 ]).should.equal(false);
      });
    });

    suite('not equal => false', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.lt(a1, b1).should.equal(false);
      });

      test('array x Array()', async (): Promise<void> => {
        compare.lt(a1, B1).should.equal(false);
      });

      test('Array() x array', async (): Promise<void> => {
        compare.lt(A1, b1).should.equal(false);
      });

      test('Array() x Array()', async (): Promise<void> => {
        compare.lt(A1, B1).should.equal(false);
      });

      test('array x null', async (): Promise<void> => {
        compare.lt(a1, null).should.equal(false);
      });

      test('Array() x null', async (): Promise<void> => {
        compare.lt(A1, null).should.equal(false);
      });

      test('null x array', async (): Promise<void> => {
        compare.lt(null, a1).should.equal(false);
      });

      test('null x Array()', async (): Promise<void> => {
        compare.lt(null, A1).should.equal(false);
      });

      test('array[3] x array[3]', async (): Promise<void> => {
        compare.lt([ 2, 3, 4 ], [ 4, 5, 6 ]).should.equal(false);
      });
    });

    suite('less than => true', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.lt(empty, a1).should.equal(true);
      });

      test('array x Array()', async (): Promise<void> => {
        compare.lt(Empty, a1).should.equal(true);
      });

      test('Array() x array', async (): Promise<void> => {
        compare.lt(empty, A1).should.equal(true);
      });

      test('Array() x Array()', async (): Promise<void> => {
        compare.lt(Empty, A1).should.equal(true);
      });

      test('array[1] x array[3]', async (): Promise<void> => {
        compare.lt([ 3 ], [ 2, 3, 4 ]).should.equal(true);
      });
    });
  });

  suite('lts', (): void => {
    suite('any => false', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.lts(a1, a1).should.equal(false);
      });
    });
  });

  suite('lte', (): void => {
    suite('greater than => false', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.lte(a1, empty).should.equal(false);
      });

      test('array x Array()', async (): Promise<void> => {
        compare.lte(a1, Empty).should.equal(false);
      });

      test('Array() x array', async (): Promise<void> => {
        compare.lte(A1, empty).should.equal(false);
      });

      test('Array() x Array()', async (): Promise<void> => {
        compare.lte(A1, Empty).should.equal(false);
      });

      test('array[3] x array[1]', async (): Promise<void> => {
        compare.lte([ 2, 3, 4 ], [ 3 ]).should.equal(false);
      });
    });

    suite('equal => true', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.lte(a1, a2).should.equal(true);
      });

      test('array x Array()', async (): Promise<void> => {
        compare.lte(a1, A1).should.equal(true);
      });

      test('Array() x array', async (): Promise<void> => {
        compare.lte(A1, a1).should.equal(true);
      });

      test('Array() x Array()', async (): Promise<void> => {
        compare.lte(A1, A2).should.equal(true);
      });

      test('null x null', async (): Promise<void> => {
        compare.lte(null, null).should.equal(true);
      });

      test('array[3] x array[3]', async (): Promise<void> => {
        compare.lte([ 2, 3, 4 ], [ 2, 3, 4 ]).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.lte(a1, b1).should.equal(false);
      });

      test('array x Array()', async (): Promise<void> => {
        compare.lte(a1, B1).should.equal(false);
      });

      test('Array() x array', async (): Promise<void> => {
        compare.lte(A1, b1).should.equal(false);
      });

      test('Array() x Array()', async (): Promise<void> => {
        compare.lte(A1, B1).should.equal(false);
      });

      test('array x null', async (): Promise<void> => {
        compare.lte(a1, null).should.equal(false);
      });

      test('Array() x null', async (): Promise<void> => {
        compare.lte(A1, null).should.equal(false);
      });

      test('null x array', async (): Promise<void> => {
        compare.lte(null, a1).should.equal(false);
      });

      test('null x Array()', async (): Promise<void> => {
        compare.lte(null, A1).should.equal(false);
      });

      test('array[3] x array[3]', async (): Promise<void> => {
        compare.lte([ 2, 3, 4 ], [ 4, 5, 6 ]).should.equal(false);
      });
    });

    suite('less than => true', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.lte(empty, a1).should.equal(true);
      });

      test('array x Array()', async (): Promise<void> => {
        compare.lte(Empty, a1).should.equal(true);
      });

      test('Array() x array', async (): Promise<void> => {
        compare.lte(empty, A1).should.equal(true);
      });

      test('Array() x Array()', async (): Promise<void> => {
        compare.lte(Empty, A1).should.equal(true);
      });

      test('array[1] x array[3]', async (): Promise<void> => {
        compare.lte([ 3 ], [ 2, 3, 4 ]).should.equal(true);
      });
    });
  });

  suite('ltes', (): void => {
    suite('any => false', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.ltes(a1, a1).should.equal(false);
      });
    });
  });

  suite('id', (): void => {
    suite('identical => true', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.id(a1, a1).should.equal(true);
      });

      test('Array() x Array()', async (): Promise<void> => {
        compare.id(A1, A1).should.equal(true);
      });

      test('null x null', async (): Promise<void> => {
        compare.id(null, null).should.equal(true);
      });
    });

    suite('not identical => false', (): void => {
      test('array x array', async (): Promise<void> => {
        compare.id(a1, a2).should.equal(false);
      });

      test('array x Array()', async (): Promise<void> => {
        compare.id(a1, A1).should.equal(false);
      });

      test('Array() x array', async (): Promise<void> => {
        compare.id(A1, a1).should.equal(false);
      });

      test('Array() x Array()', async (): Promise<void> => {
        compare.id(A1, A2).should.equal(false);
      });
    });
  });
});

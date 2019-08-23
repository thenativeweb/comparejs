import cmp from '../../lib/compare';
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
        cmp.eq(a1, a2).should.equal(true);
      });

      test('array x Array()', async (): Promise<void> => {
        cmp.eq(a1, A1).should.equal(true);
      });

      test('Array() x array', async (): Promise<void> => {
        cmp.eq(A1, a1).should.equal(true);
      });

      test('Array() x Array()', async (): Promise<void> => {
        cmp.eq(A1, A2).should.equal(true);
      });

      test('null x null', async (): Promise<void> => {
        cmp.eq(null, null).should.equal(true);
      });

      test('array[3] x array[3]', async (): Promise<void> => {
        cmp.eq([ 2, 3, 4 ], [ 2, 3, 4 ]).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('array x array', async (): Promise<void> => {
        cmp.eq(a1, b1).should.equal(false);
      });

      test('array x Array()', async (): Promise<void> => {
        cmp.eq(a1, B1).should.equal(false);
      });

      test('Array() x array', async (): Promise<void> => {
        cmp.eq(A1, b1).should.equal(false);
      });

      test('Array() x Array()', async (): Promise<void> => {
        cmp.eq(A1, B1).should.equal(false);
      });

      test('array x null', async (): Promise<void> => {
        cmp.eq(a1, null).should.equal(false);
      });

      test('Array() x null', async (): Promise<void> => {
        cmp.eq(A1, null).should.equal(false);
      });

      test('null x array', async (): Promise<void> => {
        cmp.eq(null, a1).should.equal(false);
      });

      test('null x Array()', async (): Promise<void> => {
        cmp.eq(null, A1).should.equal(false);
      });

      test('array[3] x array[3]', async (): Promise<void> => {
        cmp.eq([ 2, 3, 4 ], [ 4, 5, 6 ]).should.equal(false);
      });
    });
  });

  suite('eqs', (): void => {
    suite('any => false', (): void => {
      test('array x array', async (): Promise<void> => {
        cmp.eqs(a1, a1).should.equal(false);
      });
    });
  });

  suite('ne', (): void => {
    suite('equal => false', (): void => {
      test('array x array', async (): Promise<void> => {
        cmp.ne(a1, a2).should.equal(false);
      });

      test('array x Array()', async (): Promise<void> => {
        cmp.ne(a1, A1).should.equal(false);
      });

      test('Array() x array', async (): Promise<void> => {
        cmp.ne(A1, a1).should.equal(false);
      });

      test('Array() x Array()', async (): Promise<void> => {
        cmp.ne(A1, A2).should.equal(false);
      });

      test('null x null', async (): Promise<void> => {
        cmp.ne(null, null).should.equal(false);
      });

      test('array[3] x array[3]', async (): Promise<void> => {
        cmp.ne([ 2, 3, 4 ], [ 2, 3, 4 ]).should.equal(false);
      });
    });

    suite('not equal => true', (): void => {
      test('array x array', async (): Promise<void> => {
        cmp.ne(a1, b1).should.equal(true);
      });

      test('array x Array()', async (): Promise<void> => {
        cmp.ne(a1, B1).should.equal(true);
      });

      test('Array() x array', async (): Promise<void> => {
        cmp.ne(A1, b1).should.equal(true);
      });

      test('Array() x Array()', async (): Promise<void> => {
        cmp.ne(A1, B1).should.equal(true);
      });

      test('array x null', async (): Promise<void> => {
        cmp.ne(a1, null).should.equal(true);
      });

      test('Array() x null', async (): Promise<void> => {
        cmp.ne(A1, null).should.equal(true);
      });

      test('null x array', async (): Promise<void> => {
        cmp.ne(null, a1).should.equal(true);
      });

      test('null x Array()', async (): Promise<void> => {
        cmp.ne(null, A1).should.equal(true);
      });

      test('array[3] x array[3]', async (): Promise<void> => {
        cmp.ne([ 2, 3, 4 ], [ 4, 5, 6 ]).should.equal(true);
      });
    });
  });

  suite('nes', (): void => {
    suite('any => false', (): void => {
      test('array x array', async (): Promise<void> => {
        cmp.nes(a1, a1).should.equal(false);
      });
    });
  });

  suite('gt', (): void => {
    suite('greater than => true', (): void => {
      test('array x array', async (): Promise<void> => {
        cmp.gt(a1, empty).should.equal(true);
      });

      test('array x Array()', async (): Promise<void> => {
        cmp.gt(a1, Empty).should.equal(true);
      });

      test('Array() x array', async (): Promise<void> => {
        cmp.gt(A1, empty).should.equal(true);
      });

      test('Array() x Array()', async (): Promise<void> => {
        cmp.gt(A1, Empty).should.equal(true);
      });

      test('array[3] x array[1]', async (): Promise<void> => {
        cmp.gt([ 2, 3, 4 ], [ 3 ]).should.equal(true);
      });
    });

    suite('equal => false', (): void => {
      test('array x array', async (): Promise<void> => {
        cmp.gt(a1, a2).should.equal(false);
      });

      test('array x Array()', async (): Promise<void> => {
        cmp.gt(a1, A1).should.equal(false);
      });

      test('Array() x array', async (): Promise<void> => {
        cmp.gt(A1, a1).should.equal(false);
      });

      test('Array() x Array()', async (): Promise<void> => {
        cmp.gt(A1, A2).should.equal(false);
      });

      test('null x null', async (): Promise<void> => {
        cmp.gt(null, null).should.equal(false);
      });

      test('array[3] x array[3]', async (): Promise<void> => {
        cmp.gt([ 2, 3, 4 ], [ 2, 3, 4 ]).should.equal(false);
      });
    });

    suite('not equal => false', (): void => {
      test('array x array', async (): Promise<void> => {
        cmp.gt(a1, b1).should.equal(false);
      });

      test('array x Array()', async (): Promise<void> => {
        cmp.gt(a1, B1).should.equal(false);
      });

      test('Array() x array', async (): Promise<void> => {
        cmp.gt(A1, b1).should.equal(false);
      });

      test('Array() x Array()', async (): Promise<void> => {
        cmp.gt(A1, B1).should.equal(false);
      });

      test('array x null', async (): Promise<void> => {
        cmp.gt(a1, null).should.equal(false);
      });

      test('Array() x null', async (): Promise<void> => {
        cmp.gt(A1, null).should.equal(false);
      });

      test('null x array', async (): Promise<void> => {
        cmp.gt(null, a1).should.equal(false);
      });

      test('null x Array()', async (): Promise<void> => {
        cmp.gt(null, A1).should.equal(false);
      });

      test('array[3] x array[3]', async (): Promise<void> => {
        cmp.gt([ 2, 3, 4 ], [ 4, 5, 6 ]).should.equal(false);
      });
    });

    suite('less than => false', (): void => {
      test('array x array', async (): Promise<void> => {
        cmp.gt(empty, a1).should.equal(false);
      });

      test('array x Array()', async (): Promise<void> => {
        cmp.gt(Empty, a1).should.equal(false);
      });

      test('Array() x array', async (): Promise<void> => {
        cmp.gt(empty, A1).should.equal(false);
      });

      test('Array() x Array()', async (): Promise<void> => {
        cmp.gt(Empty, A1).should.equal(false);
      });

      test('array[1] x array[3]', async (): Promise<void> => {
        cmp.gt([ 3 ], [ 2, 3, 4 ]).should.equal(false);
      });
    });
  });

  suite('gts', (): void => {
    suite('any => false', (): void => {
      test('array x array', async (): Promise<void> => {
        cmp.gts(a1, a1).should.equal(false);
      });
    });
  });

  suite('gte', (): void => {
    suite('greater than => true', (): void => {
      test('array x array', async (): Promise<void> => {
        cmp.gte(a1, empty).should.equal(true);
      });

      test('array x Array()', async (): Promise<void> => {
        cmp.gte(a1, Empty).should.equal(true);
      });

      test('Array() x array', async (): Promise<void> => {
        cmp.gte(A1, empty).should.equal(true);
      });

      test('Array() x Array()', async (): Promise<void> => {
        cmp.gte(A1, Empty).should.equal(true);
      });

      test('array[3] x array[1]', async (): Promise<void> => {
        cmp.gte([ 2, 3, 4 ], [ 3 ]).should.equal(true);
      });
    });

    suite('equal => true', (): void => {
      test('array x array', async (): Promise<void> => {
        cmp.gte(a1, a2).should.equal(true);
      });

      test('array x Array()', async (): Promise<void> => {
        cmp.gte(a1, A1).should.equal(true);
      });

      test('Array() x array', async (): Promise<void> => {
        cmp.gte(A1, a1).should.equal(true);
      });

      test('Array() x Array()', async (): Promise<void> => {
        cmp.gte(A1, A2).should.equal(true);
      });

      test('null x null', async (): Promise<void> => {
        cmp.gte(null, null).should.equal(true);
      });

      test('array[3] x array[3]', async (): Promise<void> => {
        cmp.gte([ 2, 3, 4 ], [ 2, 3, 4 ]).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('array x array', async (): Promise<void> => {
        cmp.gte(a1, b1).should.equal(false);
      });

      test('array x Array()', async (): Promise<void> => {
        cmp.gte(a1, B1).should.equal(false);
      });

      test('Array() x array', async (): Promise<void> => {
        cmp.gte(A1, b1).should.equal(false);
      });

      test('Array() x Array()', async (): Promise<void> => {
        cmp.gte(A1, B1).should.equal(false);
      });

      test('array x null', async (): Promise<void> => {
        cmp.gte(a1, null).should.equal(false);
      });

      test('Array() x null', async (): Promise<void> => {
        cmp.gte(A1, null).should.equal(false);
      });

      test('null x array', async (): Promise<void> => {
        cmp.gte(null, a1).should.equal(false);
      });

      test('null x Array()', async (): Promise<void> => {
        cmp.gte(null, A1).should.equal(false);
      });

      test('array[3] x array[3]', async (): Promise<void> => {
        cmp.gte([ 2, 3, 4 ], [ 4, 5, 6 ]).should.equal(false);
      });
    });

    suite('less than => false', (): void => {
      test('array x array', async (): Promise<void> => {
        cmp.gte(empty, a1).should.equal(false);
      });

      test('array x Array()', async (): Promise<void> => {
        cmp.gte(Empty, a1).should.equal(false);
      });

      test('Array() x array', async (): Promise<void> => {
        cmp.gte(empty, A1).should.equal(false);
      });

      test('Array() x Array()', async (): Promise<void> => {
        cmp.gte(Empty, A1).should.equal(false);
      });

      test('array[1] x array[3]', async (): Promise<void> => {
        cmp.gte([ 3 ], [ 2, 3, 4 ]).should.equal(false);
      });
    });
  });

  suite('gtes', (): void => {
    suite('any => false', (): void => {
      test('array x array', async (): Promise<void> => {
        cmp.gtes(a1, a1).should.equal(false);
      });
    });
  });

  suite('lt', (): void => {
    suite('greater than => false', (): void => {
      test('array x array', async (): Promise<void> => {
        cmp.lt(a1, empty).should.equal(false);
      });

      test('array x Array()', async (): Promise<void> => {
        cmp.lt(a1, Empty).should.equal(false);
      });

      test('Array() x array', async (): Promise<void> => {
        cmp.lt(A1, empty).should.equal(false);
      });

      test('Array() x Array()', async (): Promise<void> => {
        cmp.lt(A1, Empty).should.equal(false);
      });

      test('array[3] x array[1]', async (): Promise<void> => {
        cmp.lt([ 2, 3, 4 ], [ 3 ]).should.equal(false);
      });
    });

    suite('equal => false', (): void => {
      test('array x array', async (): Promise<void> => {
        cmp.lt(a1, a2).should.equal(false);
      });

      test('array x Array()', async (): Promise<void> => {
        cmp.lt(a1, A1).should.equal(false);
      });

      test('Array() x array', async (): Promise<void> => {
        cmp.lt(A1, a1).should.equal(false);
      });

      test('Array() x Array()', async (): Promise<void> => {
        cmp.lt(A1, A2).should.equal(false);
      });

      test('null x null', async (): Promise<void> => {
        cmp.lt(null, null).should.equal(false);
      });

      test('array[3] x array[3]', async (): Promise<void> => {
        cmp.lt([ 2, 3, 4 ], [ 2, 3, 4 ]).should.equal(false);
      });
    });

    suite('not equal => false', (): void => {
      test('array x array', async (): Promise<void> => {
        cmp.lt(a1, b1).should.equal(false);
      });

      test('array x Array()', async (): Promise<void> => {
        cmp.lt(a1, B1).should.equal(false);
      });

      test('Array() x array', async (): Promise<void> => {
        cmp.lt(A1, b1).should.equal(false);
      });

      test('Array() x Array()', async (): Promise<void> => {
        cmp.lt(A1, B1).should.equal(false);
      });

      test('array x null', async (): Promise<void> => {
        cmp.lt(a1, null).should.equal(false);
      });

      test('Array() x null', async (): Promise<void> => {
        cmp.lt(A1, null).should.equal(false);
      });

      test('null x array', async (): Promise<void> => {
        cmp.lt(null, a1).should.equal(false);
      });

      test('null x Array()', async (): Promise<void> => {
        cmp.lt(null, A1).should.equal(false);
      });

      test('array[3] x array[3]', async (): Promise<void> => {
        cmp.lt([ 2, 3, 4 ], [ 4, 5, 6 ]).should.equal(false);
      });
    });

    suite('less than => true', (): void => {
      test('array x array', async (): Promise<void> => {
        cmp.lt(empty, a1).should.equal(true);
      });

      test('array x Array()', async (): Promise<void> => {
        cmp.lt(Empty, a1).should.equal(true);
      });

      test('Array() x array', async (): Promise<void> => {
        cmp.lt(empty, A1).should.equal(true);
      });

      test('Array() x Array()', async (): Promise<void> => {
        cmp.lt(Empty, A1).should.equal(true);
      });

      test('array[1] x array[3]', async (): Promise<void> => {
        cmp.lt([ 3 ], [ 2, 3, 4 ]).should.equal(true);
      });
    });
  });

  suite('lts', (): void => {
    suite('any => false', (): void => {
      test('array x array', async (): Promise<void> => {
        cmp.lts(a1, a1).should.equal(false);
      });
    });
  });

  suite('lte', (): void => {
    suite('greater than => false', (): void => {
      test('array x array', async (): Promise<void> => {
        cmp.lte(a1, empty).should.equal(false);
      });

      test('array x Array()', async (): Promise<void> => {
        cmp.lte(a1, Empty).should.equal(false);
      });

      test('Array() x array', async (): Promise<void> => {
        cmp.lte(A1, empty).should.equal(false);
      });

      test('Array() x Array()', async (): Promise<void> => {
        cmp.lte(A1, Empty).should.equal(false);
      });

      test('array[3] x array[1]', async (): Promise<void> => {
        cmp.lte([ 2, 3, 4 ], [ 3 ]).should.equal(false);
      });
    });

    suite('equal => true', (): void => {
      test('array x array', async (): Promise<void> => {
        cmp.lte(a1, a2).should.equal(true);
      });

      test('array x Array()', async (): Promise<void> => {
        cmp.lte(a1, A1).should.equal(true);
      });

      test('Array() x array', async (): Promise<void> => {
        cmp.lte(A1, a1).should.equal(true);
      });

      test('Array() x Array()', async (): Promise<void> => {
        cmp.lte(A1, A2).should.equal(true);
      });

      test('null x null', async (): Promise<void> => {
        cmp.lte(null, null).should.equal(true);
      });

      test('array[3] x array[3]', async (): Promise<void> => {
        cmp.lte([ 2, 3, 4 ], [ 2, 3, 4 ]).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('array x array', async (): Promise<void> => {
        cmp.lte(a1, b1).should.equal(false);
      });

      test('array x Array()', async (): Promise<void> => {
        cmp.lte(a1, B1).should.equal(false);
      });

      test('Array() x array', async (): Promise<void> => {
        cmp.lte(A1, b1).should.equal(false);
      });

      test('Array() x Array()', async (): Promise<void> => {
        cmp.lte(A1, B1).should.equal(false);
      });

      test('array x null', async (): Promise<void> => {
        cmp.lte(a1, null).should.equal(false);
      });

      test('Array() x null', async (): Promise<void> => {
        cmp.lte(A1, null).should.equal(false);
      });

      test('null x array', async (): Promise<void> => {
        cmp.lte(null, a1).should.equal(false);
      });

      test('null x Array()', async (): Promise<void> => {
        cmp.lte(null, A1).should.equal(false);
      });

      test('array[3] x array[3]', async (): Promise<void> => {
        cmp.lte([ 2, 3, 4 ], [ 4, 5, 6 ]).should.equal(false);
      });
    });

    suite('less than => true', (): void => {
      test('array x array', async (): Promise<void> => {
        cmp.lte(empty, a1).should.equal(true);
      });

      test('array x Array()', async (): Promise<void> => {
        cmp.lte(Empty, a1).should.equal(true);
      });

      test('Array() x array', async (): Promise<void> => {
        cmp.lte(empty, A1).should.equal(true);
      });

      test('Array() x Array()', async (): Promise<void> => {
        cmp.lte(Empty, A1).should.equal(true);
      });

      test('array[1] x array[3]', async (): Promise<void> => {
        cmp.lte([ 3 ], [ 2, 3, 4 ]).should.equal(true);
      });
    });
  });

  suite('ltes', (): void => {
    suite('any => false', (): void => {
      test('array x array', async (): Promise<void> => {
        cmp.ltes(a1, a1).should.equal(false);
      });
    });
  });

  suite('id', (): void => {
    suite('identical => true', (): void => {
      test('array x array', async (): Promise<void> => {
        cmp.id(a1, a1).should.equal(true);
      });

      test('Array() x Array()', async (): Promise<void> => {
        cmp.id(A1, A1).should.equal(true);
      });

      test('null x null', async (): Promise<void> => {
        cmp.id(null, null).should.equal(true);
      });
    });

    suite('not identical => false', (): void => {
      test('array x array', async (): Promise<void> => {
        cmp.id(a1, a2).should.equal(false);
      });

      test('array x Array()', async (): Promise<void> => {
        cmp.id(a1, A1).should.equal(false);
      });

      test('Array() x array', async (): Promise<void> => {
        cmp.id(A1, a1).should.equal(false);
      });

      test('Array() x Array()', async (): Promise<void> => {
        cmp.id(A1, A2).should.equal(false);
      });
    });
  });
});

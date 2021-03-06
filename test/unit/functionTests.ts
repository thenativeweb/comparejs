import { compare } from '../../lib/compare';
import 'should';

suite('function x function', (): void => {
  /* eslint-disable no-new-func, @typescript-eslint/no-implied-eval */
  const F1 = new Function('return 23;'),
        F2 = new Function('return 23;'),
        G1 = new Function('return 42;');
  /* eslint-enable no-new-func, @typescript-eslint/no-implied-eval */

  /* eslint-disable unicorn/consistent-function-scoping */
  const f1 = function (): number {
          return 23;
        },
        f2 = function (): number {
          return 23;
        },
        g1 = function (): number {
          return 42;
        };
  /* eslint-enable unicorn/consistent-function-scoping */

  suite('eq', (): void => {
    suite('equal => true', (): void => {
      test('function x function', async (): Promise<void> => {
        compare.eq(f1, f2).should.equal(true);
      });

      test('Function() x Function()', async (): Promise<void> => {
        compare.eq(F1, F2).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('function x function', async (): Promise<void> => {
        compare.eq(f1, g1).should.equal(false);
      });

      test('function x Function()', async (): Promise<void> => {
        compare.eq(f1, F1).should.equal(false);
      });

      test('Function() x function', async (): Promise<void> => {
        compare.eq(F1, f1).should.equal(false);
      });

      test('Function() x Function()', async (): Promise<void> => {
        compare.eq(F1, G1).should.equal(false);
      });
    });
  });

  suite('eqs', (): void => {
    suite('any => false', (): void => {
      test('function x function', async (): Promise<void> => {
        compare.eqs(f1, f1).should.equal(false);
      });
    });
  });

  suite('ne', (): void => {
    suite('equal => false', (): void => {
      test('function x function', async (): Promise<void> => {
        compare.ne(f1, f2).should.equal(false);
      });

      test('Function() x Function()', async (): Promise<void> => {
        compare.ne(F1, F2).should.equal(false);
      });
    });

    suite('not equal => true', (): void => {
      test('function x function', async (): Promise<void> => {
        compare.ne(f1, g1).should.equal(true);
      });

      test('function x Function()', async (): Promise<void> => {
        compare.ne(f1, F1).should.equal(true);
      });

      test('Function() x function', async (): Promise<void> => {
        compare.ne(F1, f1).should.equal(true);
      });

      test('Function() x Function()', async (): Promise<void> => {
        compare.ne(F1, G1).should.equal(true);
      });
    });
  });

  suite('nes', (): void => {
    suite('any => false', (): void => {
      test('function x function', async (): Promise<void> => {
        compare.nes(f1, f1).should.equal(false);
      });
    });
  });

  suite('gt', (): void => {
    suite('any => false', (): void => {
      test('function x function (same body)', async (): Promise<void> => {
        compare.gt(f1, f2).should.equal(false);
      });

      test('function x function (different body)', async (): Promise<void> => {
        compare.gt(f1, g1).should.equal(false);
      });

      test('function x Function()', async (): Promise<void> => {
        compare.gt(f1, F1).should.equal(false);
      });

      test('Function() x function', async (): Promise<void> => {
        compare.gt(F1, f1).should.equal(false);
      });

      test('Function() x Function() (same body)', async (): Promise<void> => {
        compare.gt(F1, F2).should.equal(false);
      });

      test('Function() x Function() (different body)', async (): Promise<void> => {
        compare.gt(F1, G1).should.equal(false);
      });
    });
  });

  suite('gts', (): void => {
    suite('any => false', (): void => {
      test('function x function', async (): Promise<void> => {
        compare.gts(f1, f1).should.equal(false);
      });
    });
  });

  suite('gte', (): void => {
    suite('equal => true', (): void => {
      test('function x function', async (): Promise<void> => {
        compare.gte(f1, f2).should.equal(true);
      });

      test('Function() x Function()', async (): Promise<void> => {
        compare.gte(F1, F2).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('function x function', async (): Promise<void> => {
        compare.gte(f1, g1).should.equal(false);
      });

      test('function x Function()', async (): Promise<void> => {
        compare.gte(f1, F1).should.equal(false);
      });

      test('Function() x function', async (): Promise<void> => {
        compare.gte(F1, f1).should.equal(false);
      });

      test('Function() x Function()', async (): Promise<void> => {
        compare.gte(F1, G1).should.equal(false);
      });
    });
  });

  suite('gtes', (): void => {
    suite('any => false', (): void => {
      test('function x function', async (): Promise<void> => {
        compare.gtes(f1, f1).should.equal(false);
      });
    });
  });

  suite('lt', (): void => {
    suite('any => false', (): void => {
      test('function x function (same body)', async (): Promise<void> => {
        compare.lt(f1, f2).should.equal(false);
      });

      test('function x function (different body)', async (): Promise<void> => {
        compare.lt(f1, g1).should.equal(false);
      });

      test('function x Function()', async (): Promise<void> => {
        compare.lt(f1, F1).should.equal(false);
      });

      test('Function() x function', async (): Promise<void> => {
        compare.lt(F1, f1).should.equal(false);
      });

      test('Function() x Function() (same body)', async (): Promise<void> => {
        compare.lt(F1, F2).should.equal(false);
      });

      test('Function() x Function() (different body)', async (): Promise<void> => {
        compare.lt(F1, G1).should.equal(false);
      });
    });
  });

  suite('lts', (): void => {
    suite('any => false', (): void => {
      test('function x function', async (): Promise<void> => {
        compare.lts(f1, f1).should.equal(false);
      });
    });
  });

  suite('lte', (): void => {
    suite('equal => true', (): void => {
      test('function x function', async (): Promise<void> => {
        compare.lte(f1, f2).should.equal(true);
      });

      test('Function() x Function()', async (): Promise<void> => {
        compare.lte(F1, F2).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('function x function', async (): Promise<void> => {
        compare.lte(f1, g1).should.equal(false);
      });

      test('function x Function()', async (): Promise<void> => {
        compare.lte(f1, F1).should.equal(false);
      });

      test('Function() x function', async (): Promise<void> => {
        compare.lte(F1, f1).should.equal(false);
      });

      test('Function() x Function()', async (): Promise<void> => {
        compare.lte(F1, G1).should.equal(false);
      });
    });
  });

  suite('ltes', (): void => {
    suite('any => false', (): void => {
      test('function x function', async (): Promise<void> => {
        compare.ltes(f1, f1).should.equal(false);
      });
    });
  });

  suite('id', (): void => {
    suite('equal => true', (): void => {
      test('function x function', async (): Promise<void> => {
        compare.id(f1, f1).should.equal(true);
      });

      test('Function() x Function()', async (): Promise<void> => {
        compare.id(F1, F1).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('function x function (same body)', async (): Promise<void> => {
        compare.id(f1, f2).should.equal(false);
      });

      test('function x function (different body)', async (): Promise<void> => {
        compare.id(f1, g1).should.equal(false);
      });

      test('function x Function()', async (): Promise<void> => {
        compare.id(f1, F1).should.equal(false);
      });

      test('Function() x function', async (): Promise<void> => {
        compare.id(F1, f1).should.equal(false);
      });

      test('Function() x Function() (same body)', async (): Promise<void> => {
        compare.id(F1, F2).should.equal(false);
      });

      test('Function() x Function() (different body)', async (): Promise<void> => {
        compare.id(F1, G1).should.equal(false);
      });
    });
  });
});

import cmp from '../../lib/compare';
import 'should';

suite('function x function', (): void => {
  /* eslint-disable no-new-func */
  const F1 = new Function('return 23;'),
        F2 = new Function('return 23;'),
        G1 = new Function('return 42;');
  /* eslint-enable no-new-func */

  const f1 = function (): number {
          return 23;
        },
        f2 = function (): number {
          return 23;
        },
        g1 = function (): number {
          return 42;
        };

  suite('eq', (): void => {
    suite('equal => true', (): void => {
      test('function x function', async (): Promise<void> => {
        cmp.eq(f1, f2).should.equal(true);
      });

      test('Function() x Function()', async (): Promise<void> => {
        cmp.eq(F1, F2).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('function x function', async (): Promise<void> => {
        cmp.eq(f1, g1).should.equal(false);
      });

      test('function x Function()', async (): Promise<void> => {
        cmp.eq(f1, F1).should.equal(false);
      });

      test('Function() x function', async (): Promise<void> => {
        cmp.eq(F1, f1).should.equal(false);
      });

      test('Function() x Function()', async (): Promise<void> => {
        cmp.eq(F1, G1).should.equal(false);
      });
    });
  });

  suite('eqs', (): void => {
    suite('any => false', (): void => {
      test('function x function', async (): Promise<void> => {
        cmp.eqs(f1, f1).should.equal(false);
      });
    });
  });

  suite('ne', (): void => {
    suite('equal => false', (): void => {
      test('function x function', async (): Promise<void> => {
        cmp.ne(f1, f2).should.equal(false);
      });

      test('Function() x Function()', async (): Promise<void> => {
        cmp.ne(F1, F2).should.equal(false);
      });
    });

    suite('not equal => true', (): void => {
      test('function x function', async (): Promise<void> => {
        cmp.ne(f1, g1).should.equal(true);
      });

      test('function x Function()', async (): Promise<void> => {
        cmp.ne(f1, F1).should.equal(true);
      });

      test('Function() x function', async (): Promise<void> => {
        cmp.ne(F1, f1).should.equal(true);
      });

      test('Function() x Function()', async (): Promise<void> => {
        cmp.ne(F1, G1).should.equal(true);
      });
    });
  });

  suite('nes', (): void => {
    suite('any => false', (): void => {
      test('function x function', async (): Promise<void> => {
        cmp.nes(f1, f1).should.equal(false);
      });
    });
  });

  suite('gt', (): void => {
    suite('any => false', (): void => {
      test('function x function (same body)', async (): Promise<void> => {
        cmp.gt(f1, f2).should.equal(false);
      });

      test('function x function (different body)', async (): Promise<void> => {
        cmp.gt(f1, g1).should.equal(false);
      });

      test('function x Function()', async (): Promise<void> => {
        cmp.gt(f1, F1).should.equal(false);
      });

      test('Function() x function', async (): Promise<void> => {
        cmp.gt(F1, f1).should.equal(false);
      });

      test('Function() x Function() (same body)', async (): Promise<void> => {
        cmp.gt(F1, F2).should.equal(false);
      });

      test('Function() x Function() (different body)', async (): Promise<void> => {
        cmp.gt(F1, G1).should.equal(false);
      });
    });
  });

  suite('gts', (): void => {
    suite('any => false', (): void => {
      test('function x function', async (): Promise<void> => {
        cmp.gts(f1, f1).should.equal(false);
      });
    });
  });

  suite('gte', (): void => {
    suite('equal => true', (): void => {
      test('function x function', async (): Promise<void> => {
        cmp.gte(f1, f2).should.equal(true);
      });

      test('Function() x Function()', async (): Promise<void> => {
        cmp.gte(F1, F2).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('function x function', async (): Promise<void> => {
        cmp.gte(f1, g1).should.equal(false);
      });

      test('function x Function()', async (): Promise<void> => {
        cmp.gte(f1, F1).should.equal(false);
      });

      test('Function() x function', async (): Promise<void> => {
        cmp.gte(F1, f1).should.equal(false);
      });

      test('Function() x Function()', async (): Promise<void> => {
        cmp.gte(F1, G1).should.equal(false);
      });
    });
  });

  suite('gtes', (): void => {
    suite('any => false', (): void => {
      test('function x function', async (): Promise<void> => {
        cmp.gtes(f1, f1).should.equal(false);
      });
    });
  });

  suite('lt', (): void => {
    suite('any => false', (): void => {
      test('function x function (same body)', async (): Promise<void> => {
        cmp.lt(f1, f2).should.equal(false);
      });

      test('function x function (different body)', async (): Promise<void> => {
        cmp.lt(f1, g1).should.equal(false);
      });

      test('function x Function()', async (): Promise<void> => {
        cmp.lt(f1, F1).should.equal(false);
      });

      test('Function() x function', async (): Promise<void> => {
        cmp.lt(F1, f1).should.equal(false);
      });

      test('Function() x Function() (same body)', async (): Promise<void> => {
        cmp.lt(F1, F2).should.equal(false);
      });

      test('Function() x Function() (different body)', async (): Promise<void> => {
        cmp.lt(F1, G1).should.equal(false);
      });
    });
  });

  suite('lts', (): void => {
    suite('any => false', (): void => {
      test('function x function', async (): Promise<void> => {
        cmp.lts(f1, f1).should.equal(false);
      });
    });
  });

  suite('lte', (): void => {
    suite('equal => true', (): void => {
      test('function x function', async (): Promise<void> => {
        cmp.lte(f1, f2).should.equal(true);
      });

      test('Function() x Function()', async (): Promise<void> => {
        cmp.lte(F1, F2).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('function x function', async (): Promise<void> => {
        cmp.lte(f1, g1).should.equal(false);
      });

      test('function x Function()', async (): Promise<void> => {
        cmp.lte(f1, F1).should.equal(false);
      });

      test('Function() x function', async (): Promise<void> => {
        cmp.lte(F1, f1).should.equal(false);
      });

      test('Function() x Function()', async (): Promise<void> => {
        cmp.lte(F1, G1).should.equal(false);
      });
    });
  });

  suite('ltes', (): void => {
    suite('any => false', (): void => {
      test('function x function', async (): Promise<void> => {
        cmp.ltes(f1, f1).should.equal(false);
      });
    });
  });

  suite('id', (): void => {
    suite('equal => true', (): void => {
      test('function x function', async (): Promise<void> => {
        cmp.id(f1, f1).should.equal(true);
      });

      test('Function() x Function()', async (): Promise<void> => {
        cmp.id(F1, F1).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('function x function (same body)', async (): Promise<void> => {
        cmp.id(f1, f2).should.equal(false);
      });

      test('function x function (different body)', async (): Promise<void> => {
        cmp.id(f1, g1).should.equal(false);
      });

      test('function x Function()', async (): Promise<void> => {
        cmp.id(f1, F1).should.equal(false);
      });

      test('Function() x function', async (): Promise<void> => {
        cmp.id(F1, f1).should.equal(false);
      });

      test('Function() x Function() (same body)', async (): Promise<void> => {
        cmp.id(F1, F2).should.equal(false);
      });

      test('Function() x Function() (different body)', async (): Promise<void> => {
        cmp.id(F1, G1).should.equal(false);
      });
    });
  });
});

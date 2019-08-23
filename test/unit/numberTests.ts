import cmp from '../../lib/compare';
import 'should';

suite('number x number', (): void => {
  /* eslint-disable no-new-wrappers, unicorn/new-for-builtins */
  const LargeNumber = new Number(42),
        SmallNumber = new Number(23);
  /* eslint-enable no-new-wrappers, unicorn/new-for-builtins */

  const largeNumber = 42,
        notANumber = Number.NaN,
        smallNumber = 23;

  suite('eq', (): void => {
    suite('equal => true', (): void => {
      test('number x number', async (): Promise<void> => {
        cmp.eq(smallNumber, smallNumber).should.equal(true);
      });

      test('number x Number()', async (): Promise<void> => {
        cmp.eq(smallNumber, SmallNumber).should.equal(true);
      });

      test('Number() x number', async (): Promise<void> => {
        cmp.eq(SmallNumber, smallNumber).should.equal(true);
      });

      test('Number() x Number()', async (): Promise<void> => {
        cmp.eq(SmallNumber, SmallNumber).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('number x number', async (): Promise<void> => {
        cmp.eq(smallNumber, largeNumber).should.equal(false);
      });

      test('number x Number()', async (): Promise<void> => {
        cmp.eq(smallNumber, LargeNumber).should.equal(false);
      });

      test('Number() x number', async (): Promise<void> => {
        cmp.eq(SmallNumber, largeNumber).should.equal(false);
      });

      test('Number() x Number()', async (): Promise<void> => {
        cmp.eq(SmallNumber, LargeNumber).should.equal(false);
      });
    });

    suite('isNaN => false', (): void => {
      test('number x isNaN', async (): Promise<void> => {
        cmp.eq(smallNumber, notANumber).should.equal(false);
      });

      test('Number() x isNaN', async (): Promise<void> => {
        cmp.eq(SmallNumber, notANumber).should.equal(false);
      });

      test('isNaN x isNaN', async (): Promise<void> => {
        cmp.eq(notANumber, notANumber).should.equal(false);
      });

      test('isNan x number', async (): Promise<void> => {
        cmp.eq(notANumber, smallNumber).should.equal(false);
      });

      test('isNan x Number()', async (): Promise<void> => {
        cmp.eq(notANumber, SmallNumber).should.equal(false);
      });
    });
  });

  suite('eqs', (): void => {
    suite('any => false', (): void => {
      test('number x number', async (): Promise<void> => {
        cmp.eqs(smallNumber, smallNumber).should.equal(false);
      });
    });
  });

  suite('ne', (): void => {
    suite('equal => false', (): void => {
      test('number x number', async (): Promise<void> => {
        cmp.ne(smallNumber, smallNumber).should.equal(false);
      });

      test('number x Number()', async (): Promise<void> => {
        cmp.ne(smallNumber, SmallNumber).should.equal(false);
      });

      test('Number() x number', async (): Promise<void> => {
        cmp.ne(SmallNumber, smallNumber).should.equal(false);
      });

      test('Number() x Number()', async (): Promise<void> => {
        cmp.ne(SmallNumber, SmallNumber).should.equal(false);
      });
    });

    suite('not equal => true', (): void => {
      test('number x number', async (): Promise<void> => {
        cmp.ne(smallNumber, largeNumber).should.equal(true);
      });

      test('number x Number()', async (): Promise<void> => {
        cmp.ne(smallNumber, LargeNumber).should.equal(true);
      });

      test('Number() x number', async (): Promise<void> => {
        cmp.ne(SmallNumber, largeNumber).should.equal(true);
      });

      test('Number() x Number()', async (): Promise<void> => {
        cmp.ne(SmallNumber, LargeNumber).should.equal(true);
      });
    });

    suite('isNaN => true', (): void => {
      test('number x isNaN', async (): Promise<void> => {
        cmp.ne(smallNumber, notANumber).should.equal(true);
      });

      test('Number() x isNaN', async (): Promise<void> => {
        cmp.ne(SmallNumber, notANumber).should.equal(true);
      });

      test('isNaN x isNaN', async (): Promise<void> => {
        cmp.ne(notANumber, notANumber).should.equal(true);
      });

      test('isNan x number', async (): Promise<void> => {
        cmp.ne(notANumber, smallNumber).should.equal(true);
      });

      test('isNan x Number()', async (): Promise<void> => {
        cmp.ne(notANumber, SmallNumber).should.equal(true);
      });
    });
  });

  suite('nes', (): void => {
    suite('any => false', (): void => {
      test('number x number', async (): Promise<void> => {
        cmp.nes(smallNumber, smallNumber).should.equal(false);
      });
    });
  });

  suite('gt', (): void => {
    suite('greater => true', (): void => {
      test('number x number', async (): Promise<void> => {
        cmp.gt(largeNumber, smallNumber).should.equal(true);
      });

      test('number x Number()', async (): Promise<void> => {
        cmp.gt(largeNumber, SmallNumber).should.equal(true);
      });

      test('Number() x number', async (): Promise<void> => {
        cmp.gt(LargeNumber, smallNumber).should.equal(true);
      });

      test('Number() x Number()', async (): Promise<void> => {
        cmp.gt(LargeNumber, SmallNumber).should.equal(true);
      });
    });

    suite('equal => false', (): void => {
      test('number x number', async (): Promise<void> => {
        cmp.gt(smallNumber, smallNumber).should.equal(false);
      });

      test('number x Number()', async (): Promise<void> => {
        cmp.gt(smallNumber, SmallNumber).should.equal(false);
      });

      test('Number() x number', async (): Promise<void> => {
        cmp.gt(SmallNumber, smallNumber).should.equal(false);
      });

      test('Number() x Number()', async (): Promise<void> => {
        cmp.gt(SmallNumber, SmallNumber).should.equal(false);
      });
    });

    suite('less => false', (): void => {
      test('number x number', async (): Promise<void> => {
        cmp.gt(smallNumber, largeNumber).should.equal(false);
      });

      test('number x Number()', async (): Promise<void> => {
        cmp.gt(smallNumber, LargeNumber).should.equal(false);
      });

      test('Number() x number', async (): Promise<void> => {
        cmp.gt(SmallNumber, largeNumber).should.equal(false);
      });

      test('Number() x Number()', async (): Promise<void> => {
        cmp.gt(SmallNumber, LargeNumber).should.equal(false);
      });
    });

    suite('isNan => false', (): void => {
      test('number x isNaN', async (): Promise<void> => {
        cmp.gt(smallNumber, notANumber).should.equal(false);
      });

      test('Number() x isNaN', async (): Promise<void> => {
        cmp.gt(SmallNumber, notANumber).should.equal(false);
      });

      test('isNaN x isNaN', async (): Promise<void> => {
        cmp.gt(notANumber, notANumber).should.equal(false);
      });

      test('isNan x number', async (): Promise<void> => {
        cmp.gt(notANumber, smallNumber).should.equal(false);
      });

      test('isNan x Number()', async (): Promise<void> => {
        cmp.gt(notANumber, SmallNumber).should.equal(false);
      });
    });
  });

  suite('gts', (): void => {
    suite('any => false', (): void => {
      test('number x number', async (): Promise<void> => {
        cmp.gts(smallNumber, smallNumber).should.equal(false);
      });
    });
  });

  suite('gte', (): void => {
    suite('greater => true', (): void => {
      test('number x number', async (): Promise<void> => {
        cmp.gte(largeNumber, smallNumber).should.equal(true);
      });

      test('number x Number()', async (): Promise<void> => {
        cmp.gte(largeNumber, SmallNumber).should.equal(true);
      });

      test('Number() x number', async (): Promise<void> => {
        cmp.gte(LargeNumber, smallNumber).should.equal(true);
      });

      test('Number() x Number()', async (): Promise<void> => {
        cmp.gte(LargeNumber, SmallNumber).should.equal(true);
      });
    });

    suite('equal => true', (): void => {
      test('number x number', async (): Promise<void> => {
        cmp.gte(smallNumber, smallNumber).should.equal(true);
      });

      test('number x Number()', async (): Promise<void> => {
        cmp.gte(smallNumber, SmallNumber).should.equal(true);
      });

      test('Number() x number', async (): Promise<void> => {
        cmp.gte(SmallNumber, smallNumber).should.equal(true);
      });

      test('Number() x Number()', async (): Promise<void> => {
        cmp.gte(SmallNumber, SmallNumber).should.equal(true);
      });
    });

    suite('less => false', (): void => {
      test('number x number', async (): Promise<void> => {
        cmp.gte(smallNumber, largeNumber).should.equal(false);
      });

      test('number x Number()', async (): Promise<void> => {
        cmp.gte(smallNumber, LargeNumber).should.equal(false);
      });

      test('Number() x number', async (): Promise<void> => {
        cmp.gte(SmallNumber, largeNumber).should.equal(false);
      });

      test('Number() x Number()', async (): Promise<void> => {
        cmp.gte(SmallNumber, LargeNumber).should.equal(false);
      });
    });

    suite('isNan => false', (): void => {
      test('number x isNaN', async (): Promise<void> => {
        cmp.gte(smallNumber, notANumber).should.equal(false);
      });

      test('Number() x isNaN', async (): Promise<void> => {
        cmp.gte(SmallNumber, notANumber).should.equal(false);
      });

      test('isNaN x isNaN', async (): Promise<void> => {
        cmp.gte(notANumber, notANumber).should.equal(false);
      });

      test('isNan x number', async (): Promise<void> => {
        cmp.gte(notANumber, smallNumber).should.equal(false);
      });

      test('isNan x Number()', async (): Promise<void> => {
        cmp.gte(notANumber, SmallNumber).should.equal(false);
      });
    });
  });

  suite('gtes', (): void => {
    suite('any => false', (): void => {
      test('number x number', async (): Promise<void> => {
        cmp.gtes(smallNumber, smallNumber).should.equal(false);
      });
    });
  });

  suite('lt', (): void => {
    suite('greater => false', (): void => {
      test('number x number', async (): Promise<void> => {
        cmp.lt(largeNumber, smallNumber).should.equal(false);
      });

      test('number x Number()', async (): Promise<void> => {
        cmp.lt(largeNumber, SmallNumber).should.equal(false);
      });

      test('Number() x number', async (): Promise<void> => {
        cmp.lt(LargeNumber, smallNumber).should.equal(false);
      });

      test('Number() x Number()', async (): Promise<void> => {
        cmp.lt(LargeNumber, SmallNumber).should.equal(false);
      });
    });

    suite('equal => false', (): void => {
      test('number x number', async (): Promise<void> => {
        cmp.lt(smallNumber, smallNumber).should.equal(false);
      });

      test('number x Number()', async (): Promise<void> => {
        cmp.lt(smallNumber, SmallNumber).should.equal(false);
      });

      test('Number() x number', async (): Promise<void> => {
        cmp.lt(SmallNumber, smallNumber).should.equal(false);
      });

      test('Number() x Number()', async (): Promise<void> => {
        cmp.lt(SmallNumber, SmallNumber).should.equal(false);
      });
    });

    suite('less => true', (): void => {
      test('number x number', async (): Promise<void> => {
        cmp.lt(smallNumber, largeNumber).should.equal(true);
      });

      test('number x Number()', async (): Promise<void> => {
        cmp.lt(smallNumber, LargeNumber).should.equal(true);
      });

      test('Number() x number', async (): Promise<void> => {
        cmp.lt(SmallNumber, largeNumber).should.equal(true);
      });

      test('Number() x Number()', async (): Promise<void> => {
        cmp.lt(SmallNumber, LargeNumber).should.equal(true);
      });
    });

    suite('isNan => false', (): void => {
      test('number x isNaN', async (): Promise<void> => {
        cmp.lt(smallNumber, notANumber).should.equal(false);
      });

      test('Number() x isNaN', async (): Promise<void> => {
        cmp.lt(SmallNumber, notANumber).should.equal(false);
      });

      test('isNaN x isNaN', async (): Promise<void> => {
        cmp.lt(notANumber, notANumber).should.equal(false);
      });

      test('isNan x number', async (): Promise<void> => {
        cmp.lt(notANumber, smallNumber).should.equal(false);
      });

      test('isNan x Number()', async (): Promise<void> => {
        cmp.lt(notANumber, SmallNumber).should.equal(false);
      });
    });
  });

  suite('lts', (): void => {
    suite('any => false', (): void => {
      test('number x number', async (): Promise<void> => {
        cmp.lts(smallNumber, smallNumber).should.equal(false);
      });
    });
  });

  suite('lte', (): void => {
    suite('greater => false', (): void => {
      test('number x number', async (): Promise<void> => {
        cmp.lte(largeNumber, smallNumber).should.equal(false);
      });

      test('number x Number()', async (): Promise<void> => {
        cmp.lte(largeNumber, SmallNumber).should.equal(false);
      });

      test('Number() x number', async (): Promise<void> => {
        cmp.lte(LargeNumber, smallNumber).should.equal(false);
      });

      test('Number() x Number()', async (): Promise<void> => {
        cmp.lte(LargeNumber, SmallNumber).should.equal(false);
      });
    });

    suite('equal => true', (): void => {
      test('number x number', async (): Promise<void> => {
        cmp.lte(smallNumber, smallNumber).should.equal(true);
      });

      test('number x Number()', async (): Promise<void> => {
        cmp.lte(smallNumber, SmallNumber).should.equal(true);
      });

      test('Number() x number', async (): Promise<void> => {
        cmp.lte(SmallNumber, smallNumber).should.equal(true);
      });

      test('Number() x Number()', async (): Promise<void> => {
        cmp.lte(SmallNumber, SmallNumber).should.equal(true);
      });
    });

    suite('less => true', (): void => {
      test('number x number', async (): Promise<void> => {
        cmp.lte(smallNumber, largeNumber).should.equal(true);
      });

      test('number x Number()', async (): Promise<void> => {
        cmp.lte(smallNumber, LargeNumber).should.equal(true);
      });

      test('Number() x number', async (): Promise<void> => {
        cmp.lte(SmallNumber, largeNumber).should.equal(true);
      });

      test('Number() x Number()', async (): Promise<void> => {
        cmp.lte(SmallNumber, LargeNumber).should.equal(true);
      });
    });

    suite('isNan => false', (): void => {
      test('number x isNaN', async (): Promise<void> => {
        cmp.lte(smallNumber, notANumber).should.equal(false);
      });

      test('Number() x isNaN', async (): Promise<void> => {
        cmp.lte(SmallNumber, notANumber).should.equal(false);
      });

      test('isNaN x isNaN', async (): Promise<void> => {
        cmp.lte(notANumber, notANumber).should.equal(false);
      });

      test('isNan x number', async (): Promise<void> => {
        cmp.lte(notANumber, smallNumber).should.equal(false);
      });

      test('isNan x Number()', async (): Promise<void> => {
        cmp.lte(notANumber, SmallNumber).should.equal(false);
      });
    });
  });

  suite('ltes', (): void => {
    suite('any => false', (): void => {
      test('number x number', async (): Promise<void> => {
        cmp.ltes(smallNumber, smallNumber).should.equal(false);
      });
    });
  });

  suite('id', (): void => {
    suite('identical => true', (): void => {
      test('number x number', async (): Promise<void> => {
        cmp.id(smallNumber, smallNumber).should.equal(true);
      });

      test('Number() x Number()', async (): Promise<void> => {
        cmp.id(SmallNumber, SmallNumber).should.equal(true);
      });
    });

    suite('not identical => false', (): void => {
      test('number x number', async (): Promise<void> => {
        cmp.id(smallNumber, largeNumber).should.equal(false);
      });

      test('number x Number()', async (): Promise<void> => {
        cmp.id(smallNumber, SmallNumber).should.equal(false);
      });

      test('Number() x number', async (): Promise<void> => {
        cmp.id(SmallNumber, smallNumber).should.equal(false);
      });

      test('Number() x Number()', async (): Promise<void> => {
        cmp.id(SmallNumber, LargeNumber).should.equal(false);
      });
    });

    suite('isNaN => false', (): void => {
      test('number x isNaN', async (): Promise<void> => {
        cmp.id(smallNumber, notANumber).should.equal(false);
      });

      test('Number() x isNaN', async (): Promise<void> => {
        cmp.id(SmallNumber, notANumber).should.equal(false);
      });

      test('isNaN x isNaN', async (): Promise<void> => {
        cmp.id(notANumber, notANumber).should.equal(false);
      });

      test('isNan x number', async (): Promise<void> => {
        cmp.id(notANumber, smallNumber).should.equal(false);
      });

      test('isNan x Number()', async (): Promise<void> => {
        cmp.id(notANumber, SmallNumber).should.equal(false);
      });
    });
  });
});

import { compare } from '../../lib/compare';
import 'should';

suite('number x number', (): void => {
  /* eslint-disable no-new-wrappers, unicorn/new-for-builtins */
  const LargeNumber = new Number(42),
        SmallNumber = new Number(23);
  /* eslint-enable no-new-wrappers, unicorn/new-for-builtins */

  const largeNumber = 42,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        notANumber = Number.NaN,
        smallNumber = 23;

  suite('eq', (): void => {
    suite('equal => true', (): void => {
      test('number x number', async (): Promise<void> => {
        compare.eq(smallNumber, smallNumber).should.equal(true);
      });

      test('number x Number()', async (): Promise<void> => {
        compare.eq(smallNumber, SmallNumber).should.equal(true);
      });

      test('Number() x number', async (): Promise<void> => {
        compare.eq(SmallNumber, smallNumber).should.equal(true);
      });

      test('Number() x Number()', async (): Promise<void> => {
        compare.eq(SmallNumber, SmallNumber).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('number x number', async (): Promise<void> => {
        compare.eq(smallNumber, largeNumber).should.equal(false);
      });

      test('number x Number()', async (): Promise<void> => {
        compare.eq(smallNumber, LargeNumber).should.equal(false);
      });

      test('Number() x number', async (): Promise<void> => {
        compare.eq(SmallNumber, largeNumber).should.equal(false);
      });

      test('Number() x Number()', async (): Promise<void> => {
        compare.eq(SmallNumber, LargeNumber).should.equal(false);
      });
    });

    suite('isNaN => false', (): void => {
      test('number x isNaN', async (): Promise<void> => {
        compare.eq(smallNumber, notANumber).should.equal(false);
      });

      test('Number() x isNaN', async (): Promise<void> => {
        compare.eq(SmallNumber, notANumber).should.equal(false);
      });

      test('isNaN x isNaN', async (): Promise<void> => {
        compare.eq(notANumber, notANumber).should.equal(false);
      });

      test('isNan x number', async (): Promise<void> => {
        compare.eq(notANumber, smallNumber).should.equal(false);
      });

      test('isNan x Number()', async (): Promise<void> => {
        compare.eq(notANumber, SmallNumber).should.equal(false);
      });
    });
  });

  suite('eqs', (): void => {
    suite('any => false', (): void => {
      test('number x number', async (): Promise<void> => {
        compare.eqs(smallNumber, smallNumber).should.equal(false);
      });
    });
  });

  suite('ne', (): void => {
    suite('equal => false', (): void => {
      test('number x number', async (): Promise<void> => {
        compare.ne(smallNumber, smallNumber).should.equal(false);
      });

      test('number x Number()', async (): Promise<void> => {
        compare.ne(smallNumber, SmallNumber).should.equal(false);
      });

      test('Number() x number', async (): Promise<void> => {
        compare.ne(SmallNumber, smallNumber).should.equal(false);
      });

      test('Number() x Number()', async (): Promise<void> => {
        compare.ne(SmallNumber, SmallNumber).should.equal(false);
      });
    });

    suite('not equal => true', (): void => {
      test('number x number', async (): Promise<void> => {
        compare.ne(smallNumber, largeNumber).should.equal(true);
      });

      test('number x Number()', async (): Promise<void> => {
        compare.ne(smallNumber, LargeNumber).should.equal(true);
      });

      test('Number() x number', async (): Promise<void> => {
        compare.ne(SmallNumber, largeNumber).should.equal(true);
      });

      test('Number() x Number()', async (): Promise<void> => {
        compare.ne(SmallNumber, LargeNumber).should.equal(true);
      });
    });

    suite('isNaN => true', (): void => {
      test('number x isNaN', async (): Promise<void> => {
        compare.ne(smallNumber, notANumber).should.equal(true);
      });

      test('Number() x isNaN', async (): Promise<void> => {
        compare.ne(SmallNumber, notANumber).should.equal(true);
      });

      test('isNaN x isNaN', async (): Promise<void> => {
        compare.ne(notANumber, notANumber).should.equal(true);
      });

      test('isNan x number', async (): Promise<void> => {
        compare.ne(notANumber, smallNumber).should.equal(true);
      });

      test('isNan x Number()', async (): Promise<void> => {
        compare.ne(notANumber, SmallNumber).should.equal(true);
      });
    });
  });

  suite('nes', (): void => {
    suite('any => false', (): void => {
      test('number x number', async (): Promise<void> => {
        compare.nes(smallNumber, smallNumber).should.equal(false);
      });
    });
  });

  suite('gt', (): void => {
    suite('greater => true', (): void => {
      test('number x number', async (): Promise<void> => {
        compare.gt(largeNumber, smallNumber).should.equal(true);
      });

      test('number x Number()', async (): Promise<void> => {
        compare.gt(largeNumber, SmallNumber).should.equal(true);
      });

      test('Number() x number', async (): Promise<void> => {
        compare.gt(LargeNumber, smallNumber).should.equal(true);
      });

      test('Number() x Number()', async (): Promise<void> => {
        compare.gt(LargeNumber, SmallNumber).should.equal(true);
      });
    });

    suite('equal => false', (): void => {
      test('number x number', async (): Promise<void> => {
        compare.gt(smallNumber, smallNumber).should.equal(false);
      });

      test('number x Number()', async (): Promise<void> => {
        compare.gt(smallNumber, SmallNumber).should.equal(false);
      });

      test('Number() x number', async (): Promise<void> => {
        compare.gt(SmallNumber, smallNumber).should.equal(false);
      });

      test('Number() x Number()', async (): Promise<void> => {
        compare.gt(SmallNumber, SmallNumber).should.equal(false);
      });
    });

    suite('less => false', (): void => {
      test('number x number', async (): Promise<void> => {
        compare.gt(smallNumber, largeNumber).should.equal(false);
      });

      test('number x Number()', async (): Promise<void> => {
        compare.gt(smallNumber, LargeNumber).should.equal(false);
      });

      test('Number() x number', async (): Promise<void> => {
        compare.gt(SmallNumber, largeNumber).should.equal(false);
      });

      test('Number() x Number()', async (): Promise<void> => {
        compare.gt(SmallNumber, LargeNumber).should.equal(false);
      });
    });

    suite('isNan => false', (): void => {
      test('number x isNaN', async (): Promise<void> => {
        compare.gt(smallNumber, notANumber).should.equal(false);
      });

      test('Number() x isNaN', async (): Promise<void> => {
        compare.gt(SmallNumber, notANumber).should.equal(false);
      });

      test('isNaN x isNaN', async (): Promise<void> => {
        compare.gt(notANumber, notANumber).should.equal(false);
      });

      test('isNan x number', async (): Promise<void> => {
        compare.gt(notANumber, smallNumber).should.equal(false);
      });

      test('isNan x Number()', async (): Promise<void> => {
        compare.gt(notANumber, SmallNumber).should.equal(false);
      });
    });
  });

  suite('gts', (): void => {
    suite('any => false', (): void => {
      test('number x number', async (): Promise<void> => {
        compare.gts(smallNumber, smallNumber).should.equal(false);
      });
    });
  });

  suite('gte', (): void => {
    suite('greater => true', (): void => {
      test('number x number', async (): Promise<void> => {
        compare.gte(largeNumber, smallNumber).should.equal(true);
      });

      test('number x Number()', async (): Promise<void> => {
        compare.gte(largeNumber, SmallNumber).should.equal(true);
      });

      test('Number() x number', async (): Promise<void> => {
        compare.gte(LargeNumber, smallNumber).should.equal(true);
      });

      test('Number() x Number()', async (): Promise<void> => {
        compare.gte(LargeNumber, SmallNumber).should.equal(true);
      });
    });

    suite('equal => true', (): void => {
      test('number x number', async (): Promise<void> => {
        compare.gte(smallNumber, smallNumber).should.equal(true);
      });

      test('number x Number()', async (): Promise<void> => {
        compare.gte(smallNumber, SmallNumber).should.equal(true);
      });

      test('Number() x number', async (): Promise<void> => {
        compare.gte(SmallNumber, smallNumber).should.equal(true);
      });

      test('Number() x Number()', async (): Promise<void> => {
        compare.gte(SmallNumber, SmallNumber).should.equal(true);
      });
    });

    suite('less => false', (): void => {
      test('number x number', async (): Promise<void> => {
        compare.gte(smallNumber, largeNumber).should.equal(false);
      });

      test('number x Number()', async (): Promise<void> => {
        compare.gte(smallNumber, LargeNumber).should.equal(false);
      });

      test('Number() x number', async (): Promise<void> => {
        compare.gte(SmallNumber, largeNumber).should.equal(false);
      });

      test('Number() x Number()', async (): Promise<void> => {
        compare.gte(SmallNumber, LargeNumber).should.equal(false);
      });
    });

    suite('isNan => false', (): void => {
      test('number x isNaN', async (): Promise<void> => {
        compare.gte(smallNumber, notANumber).should.equal(false);
      });

      test('Number() x isNaN', async (): Promise<void> => {
        compare.gte(SmallNumber, notANumber).should.equal(false);
      });

      test('isNaN x isNaN', async (): Promise<void> => {
        compare.gte(notANumber, notANumber).should.equal(false);
      });

      test('isNan x number', async (): Promise<void> => {
        compare.gte(notANumber, smallNumber).should.equal(false);
      });

      test('isNan x Number()', async (): Promise<void> => {
        compare.gte(notANumber, SmallNumber).should.equal(false);
      });
    });
  });

  suite('gtes', (): void => {
    suite('any => false', (): void => {
      test('number x number', async (): Promise<void> => {
        compare.gtes(smallNumber, smallNumber).should.equal(false);
      });
    });
  });

  suite('lt', (): void => {
    suite('greater => false', (): void => {
      test('number x number', async (): Promise<void> => {
        compare.lt(largeNumber, smallNumber).should.equal(false);
      });

      test('number x Number()', async (): Promise<void> => {
        compare.lt(largeNumber, SmallNumber).should.equal(false);
      });

      test('Number() x number', async (): Promise<void> => {
        compare.lt(LargeNumber, smallNumber).should.equal(false);
      });

      test('Number() x Number()', async (): Promise<void> => {
        compare.lt(LargeNumber, SmallNumber).should.equal(false);
      });
    });

    suite('equal => false', (): void => {
      test('number x number', async (): Promise<void> => {
        compare.lt(smallNumber, smallNumber).should.equal(false);
      });

      test('number x Number()', async (): Promise<void> => {
        compare.lt(smallNumber, SmallNumber).should.equal(false);
      });

      test('Number() x number', async (): Promise<void> => {
        compare.lt(SmallNumber, smallNumber).should.equal(false);
      });

      test('Number() x Number()', async (): Promise<void> => {
        compare.lt(SmallNumber, SmallNumber).should.equal(false);
      });
    });

    suite('less => true', (): void => {
      test('number x number', async (): Promise<void> => {
        compare.lt(smallNumber, largeNumber).should.equal(true);
      });

      test('number x Number()', async (): Promise<void> => {
        compare.lt(smallNumber, LargeNumber).should.equal(true);
      });

      test('Number() x number', async (): Promise<void> => {
        compare.lt(SmallNumber, largeNumber).should.equal(true);
      });

      test('Number() x Number()', async (): Promise<void> => {
        compare.lt(SmallNumber, LargeNumber).should.equal(true);
      });
    });

    suite('isNan => false', (): void => {
      test('number x isNaN', async (): Promise<void> => {
        compare.lt(smallNumber, notANumber).should.equal(false);
      });

      test('Number() x isNaN', async (): Promise<void> => {
        compare.lt(SmallNumber, notANumber).should.equal(false);
      });

      test('isNaN x isNaN', async (): Promise<void> => {
        compare.lt(notANumber, notANumber).should.equal(false);
      });

      test('isNan x number', async (): Promise<void> => {
        compare.lt(notANumber, smallNumber).should.equal(false);
      });

      test('isNan x Number()', async (): Promise<void> => {
        compare.lt(notANumber, SmallNumber).should.equal(false);
      });
    });
  });

  suite('lts', (): void => {
    suite('any => false', (): void => {
      test('number x number', async (): Promise<void> => {
        compare.lts(smallNumber, smallNumber).should.equal(false);
      });
    });
  });

  suite('lte', (): void => {
    suite('greater => false', (): void => {
      test('number x number', async (): Promise<void> => {
        compare.lte(largeNumber, smallNumber).should.equal(false);
      });

      test('number x Number()', async (): Promise<void> => {
        compare.lte(largeNumber, SmallNumber).should.equal(false);
      });

      test('Number() x number', async (): Promise<void> => {
        compare.lte(LargeNumber, smallNumber).should.equal(false);
      });

      test('Number() x Number()', async (): Promise<void> => {
        compare.lte(LargeNumber, SmallNumber).should.equal(false);
      });
    });

    suite('equal => true', (): void => {
      test('number x number', async (): Promise<void> => {
        compare.lte(smallNumber, smallNumber).should.equal(true);
      });

      test('number x Number()', async (): Promise<void> => {
        compare.lte(smallNumber, SmallNumber).should.equal(true);
      });

      test('Number() x number', async (): Promise<void> => {
        compare.lte(SmallNumber, smallNumber).should.equal(true);
      });

      test('Number() x Number()', async (): Promise<void> => {
        compare.lte(SmallNumber, SmallNumber).should.equal(true);
      });
    });

    suite('less => true', (): void => {
      test('number x number', async (): Promise<void> => {
        compare.lte(smallNumber, largeNumber).should.equal(true);
      });

      test('number x Number()', async (): Promise<void> => {
        compare.lte(smallNumber, LargeNumber).should.equal(true);
      });

      test('Number() x number', async (): Promise<void> => {
        compare.lte(SmallNumber, largeNumber).should.equal(true);
      });

      test('Number() x Number()', async (): Promise<void> => {
        compare.lte(SmallNumber, LargeNumber).should.equal(true);
      });
    });

    suite('isNan => false', (): void => {
      test('number x isNaN', async (): Promise<void> => {
        compare.lte(smallNumber, notANumber).should.equal(false);
      });

      test('Number() x isNaN', async (): Promise<void> => {
        compare.lte(SmallNumber, notANumber).should.equal(false);
      });

      test('isNaN x isNaN', async (): Promise<void> => {
        compare.lte(notANumber, notANumber).should.equal(false);
      });

      test('isNan x number', async (): Promise<void> => {
        compare.lte(notANumber, smallNumber).should.equal(false);
      });

      test('isNan x Number()', async (): Promise<void> => {
        compare.lte(notANumber, SmallNumber).should.equal(false);
      });
    });
  });

  suite('ltes', (): void => {
    suite('any => false', (): void => {
      test('number x number', async (): Promise<void> => {
        compare.ltes(smallNumber, smallNumber).should.equal(false);
      });
    });
  });

  suite('id', (): void => {
    suite('identical => true', (): void => {
      test('number x number', async (): Promise<void> => {
        compare.id(smallNumber, smallNumber).should.equal(true);
      });

      test('Number() x Number()', async (): Promise<void> => {
        compare.id(SmallNumber, SmallNumber).should.equal(true);
      });
    });

    suite('not identical => false', (): void => {
      test('number x number', async (): Promise<void> => {
        compare.id(smallNumber, largeNumber).should.equal(false);
      });

      test('number x Number()', async (): Promise<void> => {
        compare.id(smallNumber, SmallNumber).should.equal(false);
      });

      test('Number() x number', async (): Promise<void> => {
        compare.id(SmallNumber, smallNumber).should.equal(false);
      });

      test('Number() x Number()', async (): Promise<void> => {
        compare.id(SmallNumber, LargeNumber).should.equal(false);
      });
    });

    suite('isNaN => false', (): void => {
      test('number x isNaN', async (): Promise<void> => {
        compare.id(smallNumber, notANumber).should.equal(false);
      });

      test('Number() x isNaN', async (): Promise<void> => {
        compare.id(SmallNumber, notANumber).should.equal(false);
      });

      test('isNaN x isNaN', async (): Promise<void> => {
        compare.id(notANumber, notANumber).should.equal(false);
      });

      test('isNan x number', async (): Promise<void> => {
        compare.id(notANumber, smallNumber).should.equal(false);
      });

      test('isNan x Number()', async (): Promise<void> => {
        compare.id(notANumber, SmallNumber).should.equal(false);
      });
    });
  });
});

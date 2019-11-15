import { compare } from '../../lib/compare';
import 'should';

suite('bool x bool', (): void => {
  /* eslint-disable no-new-wrappers, unicorn/new-for-builtins */
  const False = new Boolean(false),
        True = new Boolean(true);
  /* eslint-enable no-new-wrappers, unicorn/new-for-builtins */

  suite('eq', (): void => {
    suite('equal => true', (): void => {
      test('true x true', async (): Promise<void> => {
        compare.eq(true, true).should.equal(true);
      });

      test('true x True()', async (): Promise<void> => {
        compare.eq(true, True).should.equal(true);
      });

      test('True() x true', async (): Promise<void> => {
        compare.eq(True, true).should.equal(true);
      });

      test('True() x True()', async (): Promise<void> => {
        compare.eq(True, True).should.equal(true);
      });

      test('false x false', async (): Promise<void> => {
        compare.eq(false, false).should.equal(true);
      });

      test('false x False()', async (): Promise<void> => {
        compare.eq(false, False).should.equal(true);
      });

      test('False() x false', async (): Promise<void> => {
        compare.eq(False, false).should.equal(true);
      });

      test('False() x False()', async (): Promise<void> => {
        compare.eq(False, False).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('true x false', async (): Promise<void> => {
        compare.eq(true, false).should.equal(false);
      });

      test('true x False()', async (): Promise<void> => {
        compare.eq(true, False).should.equal(false);
      });

      test('True() x false', async (): Promise<void> => {
        compare.eq(True, false).should.equal(false);
      });

      test('True() x False()', async (): Promise<void> => {
        compare.eq(True, False).should.equal(false);
      });

      test('false x true', async (): Promise<void> => {
        compare.eq(false, true).should.equal(false);
      });

      test('false x True()', async (): Promise<void> => {
        compare.eq(false, True).should.equal(false);
      });

      test('False() x true', async (): Promise<void> => {
        compare.eq(False, true).should.equal(false);
      });

      test('False() x True()', async (): Promise<void> => {
        compare.eq(False, True).should.equal(false);
      });
    });
  });

  suite('eqs', (): void => {
    suite('any => false', (): void => {
      test('true x true', async (): Promise<void> => {
        compare.eqs(true, true).should.equal(false);
      });
    });
  });

  suite('ne', (): void => {
    suite('equal => false', (): void => {
      test('true x true', async (): Promise<void> => {
        compare.ne(true, true).should.equal(false);
      });

      test('true x True()', async (): Promise<void> => {
        compare.ne(true, True).should.equal(false);
      });

      test('True() x true', async (): Promise<void> => {
        compare.ne(True, true).should.equal(false);
      });

      test('True() x True()', async (): Promise<void> => {
        compare.ne(True, True).should.equal(false);
      });

      test('false x false', async (): Promise<void> => {
        compare.ne(false, false).should.equal(false);
      });

      test('false x False()', async (): Promise<void> => {
        compare.ne(false, False).should.equal(false);
      });

      test('False() x false', async (): Promise<void> => {
        compare.ne(False, false).should.equal(false);
      });

      test('False() x False()', async (): Promise<void> => {
        compare.ne(False, False).should.equal(false);
      });
    });

    suite('not equal => true', (): void => {
      test('true x false', async (): Promise<void> => {
        compare.ne(true, false).should.equal(true);
      });

      test('true x False()', async (): Promise<void> => {
        compare.ne(true, False).should.equal(true);
      });

      test('True() x false', async (): Promise<void> => {
        compare.ne(True, false).should.equal(true);
      });

      test('True() x False()', async (): Promise<void> => {
        compare.ne(True, False).should.equal(true);
      });

      test('false x true', async (): Promise<void> => {
        compare.ne(false, true).should.equal(true);
      });

      test('false x True()', async (): Promise<void> => {
        compare.ne(false, True).should.equal(true);
      });

      test('False() x true', async (): Promise<void> => {
        compare.ne(False, true).should.equal(true);
      });

      test('False() x True()', async (): Promise<void> => {
        compare.ne(False, True).should.equal(true);
      });
    });
  });

  suite('nes', (): void => {
    suite('any => false', (): void => {
      test('true x true', async (): Promise<void> => {
        compare.nes(true, true).should.equal(false);
      });
    });
  });

  suite('gt', (): void => {
    suite('greater => true', (): void => {
      test('true x false', async (): Promise<void> => {
        compare.gt(true, false).should.equal(true);
      });

      test('true x False()', async (): Promise<void> => {
        compare.gt(true, False).should.equal(true);
      });

      test('True() x false', async (): Promise<void> => {
        compare.gt(True, false).should.equal(true);
      });

      test('True() x False()', async (): Promise<void> => {
        compare.gt(True, False).should.equal(true);
      });
    });

    suite('equal => false', (): void => {
      test('true x true', async (): Promise<void> => {
        compare.gt(true, true).should.equal(false);
      });

      test('true x True()', async (): Promise<void> => {
        compare.gt(true, True).should.equal(false);
      });

      test('True() x true', async (): Promise<void> => {
        compare.gt(True, true).should.equal(false);
      });

      test('True() x True()', async (): Promise<void> => {
        compare.gt(True, True).should.equal(false);
      });

      test('false x false', async (): Promise<void> => {
        compare.gt(false, false).should.equal(false);
      });

      test('false x False()', async (): Promise<void> => {
        compare.gt(false, False).should.equal(false);
      });

      test('False() x false', async (): Promise<void> => {
        compare.gt(False, false).should.equal(false);
      });

      test('False() x False()', async (): Promise<void> => {
        compare.gt(False, False).should.equal(false);
      });
    });

    suite('less => false', (): void => {
      test('false x true', async (): Promise<void> => {
        compare.gt(false, true).should.equal(false);
      });

      test('false x True()', async (): Promise<void> => {
        compare.gt(false, True).should.equal(false);
      });

      test('False() x true', async (): Promise<void> => {
        compare.gt(False, true).should.equal(false);
      });

      test('False() x True()', async (): Promise<void> => {
        compare.gt(False, True).should.equal(false);
      });
    });
  });

  suite('gts', (): void => {
    suite('any => false', (): void => {
      test('true x true', async (): Promise<void> => {
        compare.gts(true, true).should.equal(false);
      });
    });
  });

  suite('gte', (): void => {
    suite('greater => true', (): void => {
      test('true x false', async (): Promise<void> => {
        compare.gte(true, false).should.equal(true);
      });

      test('true x False()', async (): Promise<void> => {
        compare.gte(true, False).should.equal(true);
      });

      test('True() x false', async (): Promise<void> => {
        compare.gte(True, false).should.equal(true);
      });

      test('True() x False()', async (): Promise<void> => {
        compare.gte(True, False).should.equal(true);
      });
    });

    suite('equal => true', (): void => {
      test('true x true', async (): Promise<void> => {
        compare.gte(true, true).should.equal(true);
      });

      test('true x True()', async (): Promise<void> => {
        compare.gte(true, True).should.equal(true);
      });

      test('True() x true', async (): Promise<void> => {
        compare.gte(True, true).should.equal(true);
      });

      test('True() x True()', async (): Promise<void> => {
        compare.gte(True, True).should.equal(true);
      });

      test('false x false', async (): Promise<void> => {
        compare.gte(false, false).should.equal(true);
      });

      test('false x False()', async (): Promise<void> => {
        compare.gte(false, False).should.equal(true);
      });

      test('False() x false', async (): Promise<void> => {
        compare.gte(False, false).should.equal(true);
      });

      test('False() x False()', async (): Promise<void> => {
        compare.gte(False, False).should.equal(true);
      });
    });

    suite('less => false', (): void => {
      test('false x true', async (): Promise<void> => {
        compare.gte(false, true).should.equal(false);
      });

      test('false x True()', async (): Promise<void> => {
        compare.gte(false, True).should.equal(false);
      });

      test('False() x true', async (): Promise<void> => {
        compare.gte(False, true).should.equal(false);
      });

      test('False() x True()', async (): Promise<void> => {
        compare.gte(False, True).should.equal(false);
      });
    });
  });

  suite('gtes', (): void => {
    suite('any => false', (): void => {
      test('true x true', async (): Promise<void> => {
        compare.gtes(true, true).should.equal(false);
      });
    });
  });

  suite('lt', (): void => {
    suite('greater => false', (): void => {
      test('true x false', async (): Promise<void> => {
        compare.lt(true, false).should.equal(false);
      });

      test('true x False()', async (): Promise<void> => {
        compare.lt(true, False).should.equal(false);
      });

      test('True() x false', async (): Promise<void> => {
        compare.lt(True, false).should.equal(false);
      });

      test('True() x False()', async (): Promise<void> => {
        compare.lt(True, False).should.equal(false);
      });
    });

    suite('equal => false', (): void => {
      test('true x true', async (): Promise<void> => {
        compare.lt(true, true).should.equal(false);
      });

      test('true x True()', async (): Promise<void> => {
        compare.lt(true, True).should.equal(false);
      });

      test('True() x true', async (): Promise<void> => {
        compare.lt(True, true).should.equal(false);
      });

      test('True() x True()', async (): Promise<void> => {
        compare.lt(True, True).should.equal(false);
      });

      test('false x false', async (): Promise<void> => {
        compare.lt(false, false).should.equal(false);
      });

      test('false x False()', async (): Promise<void> => {
        compare.lt(false, False).should.equal(false);
      });

      test('False() x false', async (): Promise<void> => {
        compare.lt(False, false).should.equal(false);
      });

      test('False() x False()', async (): Promise<void> => {
        compare.lt(False, False).should.equal(false);
      });
    });

    suite('less => true', (): void => {
      test('false x true', async (): Promise<void> => {
        compare.lt(false, true).should.equal(true);
      });

      test('false x True()', async (): Promise<void> => {
        compare.lt(false, True).should.equal(true);
      });

      test('False() x true', async (): Promise<void> => {
        compare.lt(False, true).should.equal(true);
      });

      test('False() x True()', async (): Promise<void> => {
        compare.lt(False, True).should.equal(true);
      });
    });
  });

  suite('lts', (): void => {
    suite('any => false', (): void => {
      test('true x true', async (): Promise<void> => {
        compare.lts(true, true).should.equal(false);
      });
    });
  });

  suite('lte', (): void => {
    suite('greater => false', (): void => {
      test('true x false', async (): Promise<void> => {
        compare.lte(true, false).should.equal(false);
      });

      test('true x False()', async (): Promise<void> => {
        compare.lte(true, False).should.equal(false);
      });

      test('True() x false', async (): Promise<void> => {
        compare.lte(True, false).should.equal(false);
      });

      test('True() x False()', async (): Promise<void> => {
        compare.lte(True, False).should.equal(false);
      });
    });

    suite('equal => true', (): void => {
      test('true x true', async (): Promise<void> => {
        compare.lte(true, true).should.equal(true);
      });

      test('true x True()', async (): Promise<void> => {
        compare.lte(true, True).should.equal(true);
      });

      test('True() x true', async (): Promise<void> => {
        compare.lte(True, true).should.equal(true);
      });

      test('True() x True()', async (): Promise<void> => {
        compare.lte(True, True).should.equal(true);
      });

      test('false x false', async (): Promise<void> => {
        compare.lte(false, false).should.equal(true);
      });

      test('false x False()', async (): Promise<void> => {
        compare.lte(false, False).should.equal(true);
      });

      test('False() x false', async (): Promise<void> => {
        compare.lte(False, false).should.equal(true);
      });

      test('False() x False()', async (): Promise<void> => {
        compare.lte(False, False).should.equal(true);
      });
    });

    suite('less => true', (): void => {
      test('false x true', async (): Promise<void> => {
        compare.lte(false, true).should.equal(true);
      });

      test('false x True()', async (): Promise<void> => {
        compare.lte(false, True).should.equal(true);
      });

      test('False() x true', async (): Promise<void> => {
        compare.lte(False, true).should.equal(true);
      });

      test('False() x True()', async (): Promise<void> => {
        compare.lte(False, True).should.equal(true);
      });
    });
  });

  suite('ltes', (): void => {
    suite('any => false', (): void => {
      test('true x true', async (): Promise<void> => {
        compare.ltes(true, true).should.equal(false);
      });
    });
  });

  suite('id', (): void => {
    suite('identical => true', (): void => {
      test('true x true', async (): Promise<void> => {
        compare.id(true, true).should.equal(true);
      });

      test('True() x True()', async (): Promise<void> => {
        compare.id(True, True).should.equal(true);
      });

      test('false x false', async (): Promise<void> => {
        compare.id(false, false).should.equal(true);
      });

      test('False() x False()', async (): Promise<void> => {
        compare.id(False, False).should.equal(true);
      });
    });

    suite('not identical => false', (): void => {
      test('true x false', async (): Promise<void> => {
        compare.id(true, false).should.equal(false);
      });

      test('true x False()', async (): Promise<void> => {
        compare.id(true, False).should.equal(false);
      });

      test('True() x false', async (): Promise<void> => {
        compare.id(True, false).should.equal(false);
      });

      test('True() x False()', async (): Promise<void> => {
        compare.id(True, False).should.equal(false);
      });

      test('false x true', async (): Promise<void> => {
        compare.id(false, true).should.equal(false);
      });

      test('false x True()', async (): Promise<void> => {
        compare.id(false, True).should.equal(false);
      });

      test('False() x true', async (): Promise<void> => {
        compare.id(False, true).should.equal(false);
      });

      test('False() x True()', async (): Promise<void> => {
        compare.id(False, True).should.equal(false);
      });

      test('true x True()', async (): Promise<void> => {
        compare.id(true, True).should.equal(false);
      });

      test('True() x true', async (): Promise<void> => {
        compare.id(True, true).should.equal(false);
      });

      test('false x False()', async (): Promise<void> => {
        compare.id(false, False).should.equal(false);
      });

      test('False() x false', async (): Promise<void> => {
        compare.id(False, false).should.equal(false);
      });
    });
  });
});

import cmp from '../../lib/compare';
import 'should';

suite('bool x bool', (): void => {
  /* eslint-disable no-new-wrappers, unicorn/new-for-builtins */
  const False = new Boolean(false),
        True = new Boolean(true);
  /* eslint-enable no-new-wrappers, unicorn/new-for-builtins */

  suite('eq', (): void => {
    suite('equal => true', (): void => {
      test('true x true', async (): Promise<void> => {
        cmp.eq(true, true).should.equal(true);
      });

      test('true x True()', async (): Promise<void> => {
        cmp.eq(true, True).should.equal(true);
      });

      test('True() x true', async (): Promise<void> => {
        cmp.eq(True, true).should.equal(true);
      });

      test('True() x True()', async (): Promise<void> => {
        cmp.eq(True, True).should.equal(true);
      });

      test('false x false', async (): Promise<void> => {
        cmp.eq(false, false).should.equal(true);
      });

      test('false x False()', async (): Promise<void> => {
        cmp.eq(false, False).should.equal(true);
      });

      test('False() x false', async (): Promise<void> => {
        cmp.eq(False, false).should.equal(true);
      });

      test('False() x False()', async (): Promise<void> => {
        cmp.eq(False, False).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('true x false', async (): Promise<void> => {
        cmp.eq(true, false).should.equal(false);
      });

      test('true x False()', async (): Promise<void> => {
        cmp.eq(true, False).should.equal(false);
      });

      test('True() x false', async (): Promise<void> => {
        cmp.eq(True, false).should.equal(false);
      });

      test('True() x False()', async (): Promise<void> => {
        cmp.eq(True, False).should.equal(false);
      });

      test('false x true', async (): Promise<void> => {
        cmp.eq(false, true).should.equal(false);
      });

      test('false x True()', async (): Promise<void> => {
        cmp.eq(false, True).should.equal(false);
      });

      test('False() x true', async (): Promise<void> => {
        cmp.eq(False, true).should.equal(false);
      });

      test('False() x True()', async (): Promise<void> => {
        cmp.eq(False, True).should.equal(false);
      });
    });
  });

  suite('eqs', (): void => {
    suite('any => false', (): void => {
      test('true x true', async (): Promise<void> => {
        cmp.eqs(true, true).should.equal(false);
      });
    });
  });

  suite('ne', (): void => {
    suite('equal => false', (): void => {
      test('true x true', async (): Promise<void> => {
        cmp.ne(true, true).should.equal(false);
      });

      test('true x True()', async (): Promise<void> => {
        cmp.ne(true, True).should.equal(false);
      });

      test('True() x true', async (): Promise<void> => {
        cmp.ne(True, true).should.equal(false);
      });

      test('True() x True()', async (): Promise<void> => {
        cmp.ne(True, True).should.equal(false);
      });

      test('false x false', async (): Promise<void> => {
        cmp.ne(false, false).should.equal(false);
      });

      test('false x False()', async (): Promise<void> => {
        cmp.ne(false, False).should.equal(false);
      });

      test('False() x false', async (): Promise<void> => {
        cmp.ne(False, false).should.equal(false);
      });

      test('False() x False()', async (): Promise<void> => {
        cmp.ne(False, False).should.equal(false);
      });
    });

    suite('not equal => true', (): void => {
      test('true x false', async (): Promise<void> => {
        cmp.ne(true, false).should.equal(true);
      });

      test('true x False()', async (): Promise<void> => {
        cmp.ne(true, False).should.equal(true);
      });

      test('True() x false', async (): Promise<void> => {
        cmp.ne(True, false).should.equal(true);
      });

      test('True() x False()', async (): Promise<void> => {
        cmp.ne(True, False).should.equal(true);
      });

      test('false x true', async (): Promise<void> => {
        cmp.ne(false, true).should.equal(true);
      });

      test('false x True()', async (): Promise<void> => {
        cmp.ne(false, True).should.equal(true);
      });

      test('False() x true', async (): Promise<void> => {
        cmp.ne(False, true).should.equal(true);
      });

      test('False() x True()', async (): Promise<void> => {
        cmp.ne(False, True).should.equal(true);
      });
    });
  });

  suite('nes', (): void => {
    suite('any => false', (): void => {
      test('true x true', async (): Promise<void> => {
        cmp.nes(true, true).should.equal(false);
      });
    });
  });

  suite('gt', (): void => {
    suite('greater => true', (): void => {
      test('true x false', async (): Promise<void> => {
        cmp.gt(true, false).should.equal(true);
      });

      test('true x False()', async (): Promise<void> => {
        cmp.gt(true, False).should.equal(true);
      });

      test('True() x false', async (): Promise<void> => {
        cmp.gt(True, false).should.equal(true);
      });

      test('True() x False()', async (): Promise<void> => {
        cmp.gt(True, False).should.equal(true);
      });
    });

    suite('equal => false', (): void => {
      test('true x true', async (): Promise<void> => {
        cmp.gt(true, true).should.equal(false);
      });

      test('true x True()', async (): Promise<void> => {
        cmp.gt(true, True).should.equal(false);
      });

      test('True() x true', async (): Promise<void> => {
        cmp.gt(True, true).should.equal(false);
      });

      test('True() x True()', async (): Promise<void> => {
        cmp.gt(True, True).should.equal(false);
      });

      test('false x false', async (): Promise<void> => {
        cmp.gt(false, false).should.equal(false);
      });

      test('false x False()', async (): Promise<void> => {
        cmp.gt(false, False).should.equal(false);
      });

      test('False() x false', async (): Promise<void> => {
        cmp.gt(False, false).should.equal(false);
      });

      test('False() x False()', async (): Promise<void> => {
        cmp.gt(False, False).should.equal(false);
      });
    });

    suite('less => false', (): void => {
      test('false x true', async (): Promise<void> => {
        cmp.gt(false, true).should.equal(false);
      });

      test('false x True()', async (): Promise<void> => {
        cmp.gt(false, True).should.equal(false);
      });

      test('False() x true', async (): Promise<void> => {
        cmp.gt(False, true).should.equal(false);
      });

      test('False() x True()', async (): Promise<void> => {
        cmp.gt(False, True).should.equal(false);
      });
    });
  });

  suite('gts', (): void => {
    suite('any => false', (): void => {
      test('true x true', async (): Promise<void> => {
        cmp.gts(true, true).should.equal(false);
      });
    });
  });

  suite('gte', (): void => {
    suite('greater => true', (): void => {
      test('true x false', async (): Promise<void> => {
        cmp.gte(true, false).should.equal(true);
      });

      test('true x False()', async (): Promise<void> => {
        cmp.gte(true, False).should.equal(true);
      });

      test('True() x false', async (): Promise<void> => {
        cmp.gte(True, false).should.equal(true);
      });

      test('True() x False()', async (): Promise<void> => {
        cmp.gte(True, False).should.equal(true);
      });
    });

    suite('equal => true', (): void => {
      test('true x true', async (): Promise<void> => {
        cmp.gte(true, true).should.equal(true);
      });

      test('true x True()', async (): Promise<void> => {
        cmp.gte(true, True).should.equal(true);
      });

      test('True() x true', async (): Promise<void> => {
        cmp.gte(True, true).should.equal(true);
      });

      test('True() x True()', async (): Promise<void> => {
        cmp.gte(True, True).should.equal(true);
      });

      test('false x false', async (): Promise<void> => {
        cmp.gte(false, false).should.equal(true);
      });

      test('false x False()', async (): Promise<void> => {
        cmp.gte(false, False).should.equal(true);
      });

      test('False() x false', async (): Promise<void> => {
        cmp.gte(False, false).should.equal(true);
      });

      test('False() x False()', async (): Promise<void> => {
        cmp.gte(False, False).should.equal(true);
      });
    });

    suite('less => false', (): void => {
      test('false x true', async (): Promise<void> => {
        cmp.gte(false, true).should.equal(false);
      });

      test('false x True()', async (): Promise<void> => {
        cmp.gte(false, True).should.equal(false);
      });

      test('False() x true', async (): Promise<void> => {
        cmp.gte(False, true).should.equal(false);
      });

      test('False() x True()', async (): Promise<void> => {
        cmp.gte(False, True).should.equal(false);
      });
    });
  });

  suite('gtes', (): void => {
    suite('any => false', (): void => {
      test('true x true', async (): Promise<void> => {
        cmp.gtes(true, true).should.equal(false);
      });
    });
  });

  suite('lt', (): void => {
    suite('greater => false', (): void => {
      test('true x false', async (): Promise<void> => {
        cmp.lt(true, false).should.equal(false);
      });

      test('true x False()', async (): Promise<void> => {
        cmp.lt(true, False).should.equal(false);
      });

      test('True() x false', async (): Promise<void> => {
        cmp.lt(True, false).should.equal(false);
      });

      test('True() x False()', async (): Promise<void> => {
        cmp.lt(True, False).should.equal(false);
      });
    });

    suite('equal => false', (): void => {
      test('true x true', async (): Promise<void> => {
        cmp.lt(true, true).should.equal(false);
      });

      test('true x True()', async (): Promise<void> => {
        cmp.lt(true, True).should.equal(false);
      });

      test('True() x true', async (): Promise<void> => {
        cmp.lt(True, true).should.equal(false);
      });

      test('True() x True()', async (): Promise<void> => {
        cmp.lt(True, True).should.equal(false);
      });

      test('false x false', async (): Promise<void> => {
        cmp.lt(false, false).should.equal(false);
      });

      test('false x False()', async (): Promise<void> => {
        cmp.lt(false, False).should.equal(false);
      });

      test('False() x false', async (): Promise<void> => {
        cmp.lt(False, false).should.equal(false);
      });

      test('False() x False()', async (): Promise<void> => {
        cmp.lt(False, False).should.equal(false);
      });
    });

    suite('less => true', (): void => {
      test('false x true', async (): Promise<void> => {
        cmp.lt(false, true).should.equal(true);
      });

      test('false x True()', async (): Promise<void> => {
        cmp.lt(false, True).should.equal(true);
      });

      test('False() x true', async (): Promise<void> => {
        cmp.lt(False, true).should.equal(true);
      });

      test('False() x True()', async (): Promise<void> => {
        cmp.lt(False, True).should.equal(true);
      });
    });
  });

  suite('lts', (): void => {
    suite('any => false', (): void => {
      test('true x true', async (): Promise<void> => {
        cmp.lts(true, true).should.equal(false);
      });
    });
  });

  suite('lte', (): void => {
    suite('greater => false', (): void => {
      test('true x false', async (): Promise<void> => {
        cmp.lte(true, false).should.equal(false);
      });

      test('true x False()', async (): Promise<void> => {
        cmp.lte(true, False).should.equal(false);
      });

      test('True() x false', async (): Promise<void> => {
        cmp.lte(True, false).should.equal(false);
      });

      test('True() x False()', async (): Promise<void> => {
        cmp.lte(True, False).should.equal(false);
      });
    });

    suite('equal => true', (): void => {
      test('true x true', async (): Promise<void> => {
        cmp.lte(true, true).should.equal(true);
      });

      test('true x True()', async (): Promise<void> => {
        cmp.lte(true, True).should.equal(true);
      });

      test('True() x true', async (): Promise<void> => {
        cmp.lte(True, true).should.equal(true);
      });

      test('True() x True()', async (): Promise<void> => {
        cmp.lte(True, True).should.equal(true);
      });

      test('false x false', async (): Promise<void> => {
        cmp.lte(false, false).should.equal(true);
      });

      test('false x False()', async (): Promise<void> => {
        cmp.lte(false, False).should.equal(true);
      });

      test('False() x false', async (): Promise<void> => {
        cmp.lte(False, false).should.equal(true);
      });

      test('False() x False()', async (): Promise<void> => {
        cmp.lte(False, False).should.equal(true);
      });
    });

    suite('less => true', (): void => {
      test('false x true', async (): Promise<void> => {
        cmp.lte(false, true).should.equal(true);
      });

      test('false x True()', async (): Promise<void> => {
        cmp.lte(false, True).should.equal(true);
      });

      test('False() x true', async (): Promise<void> => {
        cmp.lte(False, true).should.equal(true);
      });

      test('False() x True()', async (): Promise<void> => {
        cmp.lte(False, True).should.equal(true);
      });
    });
  });

  suite('ltes', (): void => {
    suite('any => false', (): void => {
      test('true x true', async (): Promise<void> => {
        cmp.ltes(true, true).should.equal(false);
      });
    });
  });

  suite('id', (): void => {
    suite('identical => true', (): void => {
      test('true x true', async (): Promise<void> => {
        cmp.id(true, true).should.equal(true);
      });

      test('True() x True()', async (): Promise<void> => {
        cmp.id(True, True).should.equal(true);
      });

      test('false x false', async (): Promise<void> => {
        cmp.id(false, false).should.equal(true);
      });

      test('False() x False()', async (): Promise<void> => {
        cmp.id(False, False).should.equal(true);
      });
    });

    suite('not identical => false', (): void => {
      test('true x false', async (): Promise<void> => {
        cmp.id(true, false).should.equal(false);
      });

      test('true x False()', async (): Promise<void> => {
        cmp.id(true, False).should.equal(false);
      });

      test('True() x false', async (): Promise<void> => {
        cmp.id(True, false).should.equal(false);
      });

      test('True() x False()', async (): Promise<void> => {
        cmp.id(True, False).should.equal(false);
      });

      test('false x true', async (): Promise<void> => {
        cmp.id(false, true).should.equal(false);
      });

      test('false x True()', async (): Promise<void> => {
        cmp.id(false, True).should.equal(false);
      });

      test('False() x true', async (): Promise<void> => {
        cmp.id(False, true).should.equal(false);
      });

      test('False() x True()', async (): Promise<void> => {
        cmp.id(False, True).should.equal(false);
      });

      test('true x True()', async (): Promise<void> => {
        cmp.id(true, True).should.equal(false);
      });

      test('True() x true', async (): Promise<void> => {
        cmp.id(True, true).should.equal(false);
      });

      test('false x False()', async (): Promise<void> => {
        cmp.id(false, False).should.equal(false);
      });

      test('False() x false', async (): Promise<void> => {
        cmp.id(False, false).should.equal(false);
      });
    });
  });
});

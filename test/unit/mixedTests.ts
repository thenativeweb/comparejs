import cmp from '../../lib/compare';
import 'should';

suite('mixed types', (): void => {
  const fn = function (): number {
    return 23;
  };

  const fAsString = 'function () { return 23; }';

  suite('eq', (): void => {
    suite('any => false', (): void => {
      test('number x string', async (): Promise<void> => {
        cmp.eq(0, '').should.equal(false);
      });

      test('number x boolean', async (): Promise<void> => {
        cmp.eq(0, false).should.equal(false);
      });

      test('string x boolean', async (): Promise<void> => {
        cmp.eq('', false).should.equal(false);
      });

      test('function x string', async (): Promise<void> => {
        cmp.eq(fn, fAsString).should.equal(false);
      });
    });
  });

  suite('eqs', (): void => {
    suite('any => false', (): void => {
      test('number x string', async (): Promise<void> => {
        cmp.eqs(0, '').should.equal(false);
      });

      test('number x boolean', async (): Promise<void> => {
        cmp.eqs(0, false).should.equal(false);
      });

      test('string x boolean', async (): Promise<void> => {
        cmp.eqs('', false).should.equal(false);
      });

      test('function x string', async (): Promise<void> => {
        cmp.eqs(fn, fAsString).should.equal(false);
      });
    });
  });

  suite('ne', (): void => {
    suite('any => true', (): void => {
      test('number x string', async (): Promise<void> => {
        cmp.ne(0, '').should.equal(true);
      });

      test('number x boolean', async (): Promise<void> => {
        cmp.ne(0, false).should.equal(true);
      });

      test('string x boolean', async (): Promise<void> => {
        cmp.ne('', false).should.equal(true);
      });

      test('function x string', async (): Promise<void> => {
        cmp.ne(fn, fAsString).should.equal(true);
      });
    });
  });

  suite('nes', (): void => {
    suite('any => false', (): void => {
      test('number x string', async (): Promise<void> => {
        cmp.nes(0, '').should.equal(false);
      });

      test('number x boolean', async (): Promise<void> => {
        cmp.nes(0, false).should.equal(false);
      });

      test('string x boolean', async (): Promise<void> => {
        cmp.nes('', false).should.equal(false);
      });

      test('function x string', async (): Promise<void> => {
        cmp.nes(fn, fAsString).should.equal(false);
      });
    });
  });

  suite('gt', (): void => {
    suite('any => false', (): void => {
      test('number x string', async (): Promise<void> => {
        cmp.gt(0, '').should.equal(false);
      });

      test('number x boolean', async (): Promise<void> => {
        cmp.gt(0, false).should.equal(false);
      });

      test('string x boolean', async (): Promise<void> => {
        cmp.gt('', false).should.equal(false);
      });

      test('function x string', async (): Promise<void> => {
        cmp.gt(fn, fAsString).should.equal(false);
      });
    });
  });

  suite('gts', (): void => {
    suite('any => false', (): void => {
      test('number x string', async (): Promise<void> => {
        cmp.gts(0, '').should.equal(false);
      });

      test('number x boolean', async (): Promise<void> => {
        cmp.gts(0, false).should.equal(false);
      });

      test('string x boolean', async (): Promise<void> => {
        cmp.gts('', false).should.equal(false);
      });

      test('function x string', async (): Promise<void> => {
        cmp.gts(fn, fAsString).should.equal(false);
      });
    });
  });

  suite('gte', (): void => {
    suite('any => false', (): void => {
      test('number x string', async (): Promise<void> => {
        cmp.gte(0, '').should.equal(false);
      });

      test('number x boolean', async (): Promise<void> => {
        cmp.gte(0, false).should.equal(false);
      });

      test('string x boolean', async (): Promise<void> => {
        cmp.gte('', false).should.equal(false);
      });

      test('function x string', async (): Promise<void> => {
        cmp.gte(fn, fAsString).should.equal(false);
      });
    });
  });

  suite('gtes', (): void => {
    suite('any => false', (): void => {
      test('number x string', async (): Promise<void> => {
        cmp.gtes(0, '').should.equal(false);
      });

      test('number x boolean', async (): Promise<void> => {
        cmp.gtes(0, false).should.equal(false);
      });

      test('string x boolean', async (): Promise<void> => {
        cmp.gtes('', false).should.equal(false);
      });

      test('function x string', async (): Promise<void> => {
        cmp.gtes(fn, fAsString).should.equal(false);
      });
    });
  });

  suite('lt', (): void => {
    suite('any => false', (): void => {
      test('number x string', async (): Promise<void> => {
        cmp.lt(0, '').should.equal(false);
      });

      test('number x boolean', async (): Promise<void> => {
        cmp.lt(0, false).should.equal(false);
      });

      test('string x boolean', async (): Promise<void> => {
        cmp.lt('', false).should.equal(false);
      });

      test('function x string', async (): Promise<void> => {
        cmp.lt(fn, fAsString).should.equal(false);
      });
    });
  });

  suite('lts', (): void => {
    suite('any => false', (): void => {
      test('number x string', async (): Promise<void> => {
        cmp.lts(0, '').should.equal(false);
      });

      test('number x boolean', async (): Promise<void> => {
        cmp.lts(0, false).should.equal(false);
      });

      test('string x boolean', async (): Promise<void> => {
        cmp.lts('', false).should.equal(false);
      });

      test('function x string', async (): Promise<void> => {
        cmp.lts(fn, fAsString).should.equal(false);
      });
    });
  });

  suite('lte', (): void => {
    suite('any => false', (): void => {
      test('number x string', async (): Promise<void> => {
        cmp.lte(0, '').should.equal(false);
      });

      test('number x boolean', async (): Promise<void> => {
        cmp.lte(0, false).should.equal(false);
      });

      test('string x boolean', async (): Promise<void> => {
        cmp.lte('', false).should.equal(false);
      });

      test('function x string', async (): Promise<void> => {
        cmp.lte(fn, fAsString).should.equal(false);
      });
    });
  });

  suite('ltes', (): void => {
    suite('any => false', (): void => {
      test('number x string', async (): Promise<void> => {
        cmp.ltes(0, '').should.equal(false);
      });

      test('number x boolean', async (): Promise<void> => {
        cmp.ltes(0, false).should.equal(false);
      });

      test('string x boolean', async (): Promise<void> => {
        cmp.ltes('', false).should.equal(false);
      });

      test('function x string', async (): Promise<void> => {
        cmp.ltes(fn, fAsString).should.equal(false);
      });
    });
  });

  suite('id', (): void => {
    suite('any => false', (): void => {
      test('number x string', async (): Promise<void> => {
        cmp.id(0, '').should.equal(false);
      });

      test('number x boolean', async (): Promise<void> => {
        cmp.id(0, false).should.equal(false);
      });

      test('string x boolean', async (): Promise<void> => {
        cmp.id('', false).should.equal(false);
      });

      test('function x string', async (): Promise<void> => {
        cmp.id(fn, fAsString).should.equal(false);
      });
    });
  });
});

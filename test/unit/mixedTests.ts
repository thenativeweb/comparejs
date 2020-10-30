import { compare } from '../../lib/compare';
import 'should';

suite('mixed types', (): void => {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const fn = function (): number {
    return 23;
  };

  const fAsString = 'function () { return 23; }';

  suite('eq', (): void => {
    suite('any => false', (): void => {
      test('number x string', async (): Promise<void> => {
        compare.eq(0, '').should.equal(false);
      });

      test('number x boolean', async (): Promise<void> => {
        compare.eq(0, false).should.equal(false);
      });

      test('string x boolean', async (): Promise<void> => {
        compare.eq('', false).should.equal(false);
      });

      test('function x string', async (): Promise<void> => {
        compare.eq(fn, fAsString).should.equal(false);
      });
    });
  });

  suite('eqs', (): void => {
    suite('any => false', (): void => {
      test('number x string', async (): Promise<void> => {
        compare.eqs(0, '').should.equal(false);
      });

      test('number x boolean', async (): Promise<void> => {
        compare.eqs(0, false).should.equal(false);
      });

      test('string x boolean', async (): Promise<void> => {
        compare.eqs('', false).should.equal(false);
      });

      test('function x string', async (): Promise<void> => {
        compare.eqs(fn, fAsString).should.equal(false);
      });
    });
  });

  suite('ne', (): void => {
    suite('any => true', (): void => {
      test('number x string', async (): Promise<void> => {
        compare.ne(0, '').should.equal(true);
      });

      test('number x boolean', async (): Promise<void> => {
        compare.ne(0, false).should.equal(true);
      });

      test('string x boolean', async (): Promise<void> => {
        compare.ne('', false).should.equal(true);
      });

      test('function x string', async (): Promise<void> => {
        compare.ne(fn, fAsString).should.equal(true);
      });
    });
  });

  suite('nes', (): void => {
    suite('any => false', (): void => {
      test('number x string', async (): Promise<void> => {
        compare.nes(0, '').should.equal(false);
      });

      test('number x boolean', async (): Promise<void> => {
        compare.nes(0, false).should.equal(false);
      });

      test('string x boolean', async (): Promise<void> => {
        compare.nes('', false).should.equal(false);
      });

      test('function x string', async (): Promise<void> => {
        compare.nes(fn, fAsString).should.equal(false);
      });
    });
  });

  suite('gt', (): void => {
    suite('any => false', (): void => {
      test('number x string', async (): Promise<void> => {
        compare.gt(0, '').should.equal(false);
      });

      test('number x boolean', async (): Promise<void> => {
        compare.gt(0, false).should.equal(false);
      });

      test('string x boolean', async (): Promise<void> => {
        compare.gt('', false).should.equal(false);
      });

      test('function x string', async (): Promise<void> => {
        compare.gt(fn, fAsString).should.equal(false);
      });
    });
  });

  suite('gts', (): void => {
    suite('any => false', (): void => {
      test('number x string', async (): Promise<void> => {
        compare.gts(0, '').should.equal(false);
      });

      test('number x boolean', async (): Promise<void> => {
        compare.gts(0, false).should.equal(false);
      });

      test('string x boolean', async (): Promise<void> => {
        compare.gts('', false).should.equal(false);
      });

      test('function x string', async (): Promise<void> => {
        compare.gts(fn, fAsString).should.equal(false);
      });
    });
  });

  suite('gte', (): void => {
    suite('any => false', (): void => {
      test('number x string', async (): Promise<void> => {
        compare.gte(0, '').should.equal(false);
      });

      test('number x boolean', async (): Promise<void> => {
        compare.gte(0, false).should.equal(false);
      });

      test('string x boolean', async (): Promise<void> => {
        compare.gte('', false).should.equal(false);
      });

      test('function x string', async (): Promise<void> => {
        compare.gte(fn, fAsString).should.equal(false);
      });
    });
  });

  suite('gtes', (): void => {
    suite('any => false', (): void => {
      test('number x string', async (): Promise<void> => {
        compare.gtes(0, '').should.equal(false);
      });

      test('number x boolean', async (): Promise<void> => {
        compare.gtes(0, false).should.equal(false);
      });

      test('string x boolean', async (): Promise<void> => {
        compare.gtes('', false).should.equal(false);
      });

      test('function x string', async (): Promise<void> => {
        compare.gtes(fn, fAsString).should.equal(false);
      });
    });
  });

  suite('lt', (): void => {
    suite('any => false', (): void => {
      test('number x string', async (): Promise<void> => {
        compare.lt(0, '').should.equal(false);
      });

      test('number x boolean', async (): Promise<void> => {
        compare.lt(0, false).should.equal(false);
      });

      test('string x boolean', async (): Promise<void> => {
        compare.lt('', false).should.equal(false);
      });

      test('function x string', async (): Promise<void> => {
        compare.lt(fn, fAsString).should.equal(false);
      });
    });
  });

  suite('lts', (): void => {
    suite('any => false', (): void => {
      test('number x string', async (): Promise<void> => {
        compare.lts(0, '').should.equal(false);
      });

      test('number x boolean', async (): Promise<void> => {
        compare.lts(0, false).should.equal(false);
      });

      test('string x boolean', async (): Promise<void> => {
        compare.lts('', false).should.equal(false);
      });

      test('function x string', async (): Promise<void> => {
        compare.lts(fn, fAsString).should.equal(false);
      });
    });
  });

  suite('lte', (): void => {
    suite('any => false', (): void => {
      test('number x string', async (): Promise<void> => {
        compare.lte(0, '').should.equal(false);
      });

      test('number x boolean', async (): Promise<void> => {
        compare.lte(0, false).should.equal(false);
      });

      test('string x boolean', async (): Promise<void> => {
        compare.lte('', false).should.equal(false);
      });

      test('function x string', async (): Promise<void> => {
        compare.lte(fn, fAsString).should.equal(false);
      });
    });
  });

  suite('ltes', (): void => {
    suite('any => false', (): void => {
      test('number x string', async (): Promise<void> => {
        compare.ltes(0, '').should.equal(false);
      });

      test('number x boolean', async (): Promise<void> => {
        compare.ltes(0, false).should.equal(false);
      });

      test('string x boolean', async (): Promise<void> => {
        compare.ltes('', false).should.equal(false);
      });

      test('function x string', async (): Promise<void> => {
        compare.ltes(fn, fAsString).should.equal(false);
      });
    });
  });

  suite('id', (): void => {
    suite('any => false', (): void => {
      test('number x string', async (): Promise<void> => {
        compare.id(0, '').should.equal(false);
      });

      test('number x boolean', async (): Promise<void> => {
        compare.id(0, false).should.equal(false);
      });

      test('string x boolean', async (): Promise<void> => {
        compare.id('', false).should.equal(false);
      });

      test('function x string', async (): Promise<void> => {
        compare.id(fn, fAsString).should.equal(false);
      });
    });
  });
});

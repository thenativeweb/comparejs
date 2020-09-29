import { compare } from '../../lib/compare';
import 'should';

suite('undefined x undefined', (): void => {
  suite('eq', (): void => {
    suite('equal => true', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/no-useless-undefined
        compare.eq(undefined, undefined).should.equal(true);
      });
    });
  });

  suite('eqs', (): void => {
    suite('any => false', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/no-useless-undefined
        compare.eqs(undefined, undefined).should.equal(false);
      });
    });
  });

  suite('ne', (): void => {
    suite('equal => false', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/no-useless-undefined
        compare.ne(undefined, undefined).should.equal(false);
      });
    });
  });

  suite('nes', (): void => {
    suite('any => false', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/no-useless-undefined
        compare.nes(undefined, undefined).should.equal(false);
      });
    });
  });

  suite('gt', (): void => {
    suite('equal => false', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/no-useless-undefined
        compare.gt(undefined, undefined).should.equal(false);
      });
    });
  });

  suite('gts', (): void => {
    suite('any => false', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/no-useless-undefined
        compare.gts(undefined, undefined).should.equal(false);
      });
    });
  });

  suite('gte', (): void => {
    suite('equal => true', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/no-useless-undefined
        compare.gte(undefined, undefined).should.equal(true);
      });
    });
  });

  suite('gtes', (): void => {
    suite('any => false', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/no-useless-undefined
        compare.gtes(undefined, undefined).should.equal(false);
      });
    });
  });

  suite('lt', (): void => {
    suite('equal => false', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/no-useless-undefined
        compare.lt(undefined, undefined).should.equal(false);
      });
    });
  });

  suite('lts', (): void => {
    suite('any => false', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/no-useless-undefined
        compare.lts(undefined, undefined).should.equal(false);
      });
    });
  });

  suite('lte', (): void => {
    suite('equal => true', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/no-useless-undefined
        compare.lte(undefined, undefined).should.equal(true);
      });
    });
  });

  suite('ltes', (): void => {
    suite('any => false', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/no-useless-undefined
        compare.ltes(undefined, undefined).should.equal(false);
      });
    });
  });

  suite('id', (): void => {
    suite('identical => true', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        // eslint-disable-next-line unicorn/no-useless-undefined
        compare.id(undefined, undefined).should.equal(true);
      });
    });
  });
});

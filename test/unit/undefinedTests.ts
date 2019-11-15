import { compare } from '../../lib/compare';
import 'should';

suite('undefined x undefined', (): void => {
  suite('eq', (): void => {
    suite('equal => true', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        compare.eq(undefined, undefined).should.equal(true);
      });
    });
  });

  suite('eqs', (): void => {
    suite('any => false', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        compare.eqs(undefined, undefined).should.equal(false);
      });
    });
  });

  suite('ne', (): void => {
    suite('equal => false', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        compare.ne(undefined, undefined).should.equal(false);
      });
    });
  });

  suite('nes', (): void => {
    suite('any => false', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        compare.nes(undefined, undefined).should.equal(false);
      });
    });
  });

  suite('gt', (): void => {
    suite('equal => false', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        compare.gt(undefined, undefined).should.equal(false);
      });
    });
  });

  suite('gts', (): void => {
    suite('any => false', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        compare.gts(undefined, undefined).should.equal(false);
      });
    });
  });

  suite('gte', (): void => {
    suite('equal => true', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        compare.gte(undefined, undefined).should.equal(true);
      });
    });
  });

  suite('gtes', (): void => {
    suite('any => false', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        compare.gtes(undefined, undefined).should.equal(false);
      });
    });
  });

  suite('lt', (): void => {
    suite('equal => false', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        compare.lt(undefined, undefined).should.equal(false);
      });
    });
  });

  suite('lts', (): void => {
    suite('any => false', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        compare.lts(undefined, undefined).should.equal(false);
      });
    });
  });

  suite('lte', (): void => {
    suite('equal => true', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        compare.lte(undefined, undefined).should.equal(true);
      });
    });
  });

  suite('ltes', (): void => {
    suite('any => false', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        compare.ltes(undefined, undefined).should.equal(false);
      });
    });
  });

  suite('id', (): void => {
    suite('identical => true', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        compare.id(undefined, undefined).should.equal(true);
      });
    });
  });
});

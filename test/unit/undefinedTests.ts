import cmp from '../../lib/compare';
import 'should';

suite('undefined x undefined', (): void => {
  suite('eq', (): void => {
    suite('equal => true', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        cmp.eq(undefined, undefined).should.equal(true);
      });
    });
  });

  suite('eqs', (): void => {
    suite('any => false', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        cmp.eqs(undefined, undefined).should.equal(false);
      });
    });
  });

  suite('ne', (): void => {
    suite('equal => false', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        cmp.ne(undefined, undefined).should.equal(false);
      });
    });
  });

  suite('nes', (): void => {
    suite('any => false', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        cmp.nes(undefined, undefined).should.equal(false);
      });
    });
  });

  suite('gt', (): void => {
    suite('equal => false', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        cmp.gt(undefined, undefined).should.equal(false);
      });
    });
  });

  suite('gts', (): void => {
    suite('any => false', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        cmp.gts(undefined, undefined).should.equal(false);
      });
    });
  });

  suite('gte', (): void => {
    suite('equal => true', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        cmp.gte(undefined, undefined).should.equal(true);
      });
    });
  });

  suite('gtes', (): void => {
    suite('any => false', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        cmp.gtes(undefined, undefined).should.equal(false);
      });
    });
  });

  suite('lt', (): void => {
    suite('equal => false', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        cmp.lt(undefined, undefined).should.equal(false);
      });
    });
  });

  suite('lts', (): void => {
    suite('any => false', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        cmp.lts(undefined, undefined).should.equal(false);
      });
    });
  });

  suite('lte', (): void => {
    suite('equal => true', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        cmp.lte(undefined, undefined).should.equal(true);
      });
    });
  });

  suite('ltes', (): void => {
    suite('any => false', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        cmp.ltes(undefined, undefined).should.equal(false);
      });
    });
  });

  suite('id', (): void => {
    suite('identical => true', (): void => {
      test('undefined x undefined', async (): Promise<void> => {
        cmp.id(undefined, undefined).should.equal(true);
      });
    });
  });
});

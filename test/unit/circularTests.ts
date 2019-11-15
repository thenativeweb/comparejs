import { compare } from '../../lib/compare';
import 'should';

suite('cmp', (): void => {
  suite('eq', (): void => {
    test('first with self reference => false', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      const second = {
        name: 'foo'
      };

      first.mySelf = first;
      compare.eq(first, second).should.equal(false);
    });

    test('second with self reference => false', async (): Promise<void> => {
      const first = {
        name: 'foo'
      };

      const second = {
        name: 'foo',
        mySelf: undefined as any
      };

      second.mySelf = second;
      compare.eq(first, second).should.equal(false);
    });

    test('both with self reference => true', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      const second = {
        name: 'foo',
        mySelf: undefined as any
      };

      first.mySelf = first;
      second.mySelf = second;
      compare.eq(first, second).should.equal(true);
    });
  });

  suite('eqs', (): void => {
    test('first with self reference => false', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      const second = {
        name: 'foo'
      };

      first.mySelf = first;
      compare.eqs(first, second).should.equal(false);
    });

    test('second with self reference => false', async (): Promise<void> => {
      const first = {
        name: 'foo'
      };

      const second = {
        name: 'foo',
        mySelf: undefined as any
      };

      second.mySelf = second;
      compare.eqs(first, second).should.equal(false);
    });

    test('both with self reference => true', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      const second = {
        name: 'foo',
        mySelf: undefined as any
      };

      first.mySelf = first;
      second.mySelf = second;
      compare.eqs(first, second).should.equal(true);
    });
  });

  suite('ne', (): void => {
    test('first with self reference => true', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      const second = {
        name: 'foo'
      };

      first.mySelf = first;
      compare.ne(first, second).should.equal(true);
    });

    test('second with self reference => true', async (): Promise<void> => {
      const first = {
        name: 'foo'
      };

      const second = {
        name: 'foo',
        mySelf: undefined as any
      };

      second.mySelf = second;
      compare.ne(first, second).should.equal(true);
    });

    test('both with self reference => false', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      const second = {
        name: 'foo',
        mySelf: undefined as any
      };

      first.mySelf = first;
      second.mySelf = second;
      compare.ne(first, second).should.equal(false);
    });
  });

  suite('nes', (): void => {
    test('first with self reference => true', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      const second = {
        name: 'foo'
      };

      first.mySelf = first;
      compare.nes(first, second).should.equal(true);
    });

    test('second with self reference => true', async (): Promise<void> => {
      const first = {
        name: 'foo'
      };

      const second = {
        name: 'foo',
        mySelf: undefined as any
      };

      second.mySelf = second;
      compare.nes(first, second).should.equal(true);
    });

    test('both with self reference => false', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      const second = {
        name: 'foo',
        mySelf: undefined as any
      };

      first.mySelf = first;
      second.mySelf = second;
      compare.nes(first, second).should.equal(false);
    });
  });

  suite('gt', (): void => {
    test('first with self reference => true', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      const second = {
        name: 'foo'
      };

      first.mySelf = first;
      compare.gt(first, second).should.equal(true);
    });

    test('second with self reference => false', async (): Promise<void> => {
      const first = {
        name: 'foo'
      };

      const second = {
        name: 'foo',
        mySelf: undefined as any
      };

      second.mySelf = second;
      compare.gt(first, second).should.equal(false);
    });

    test('both with self reference => false', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      const second = {
        name: 'foo',
        mySelf: undefined as any
      };

      first.mySelf = first;
      second.mySelf = second;
      compare.gt(first, second).should.equal(false);
    });
  });

  suite('gts', (): void => {
    test('first with self reference => true', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      const second = {
        name: 'foo'
      };

      first.mySelf = first;
      compare.gts(first, second).should.equal(true);
    });

    test('second with self reference => false', async (): Promise<void> => {
      const first = {
        name: 'foo'
      };

      const second = {
        name: 'foo',
        mySelf: undefined as any
      };

      second.mySelf = second;
      compare.gts(first, second).should.equal(false);
    });

    test('both with self reference => false', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      const second = {
        name: 'foo',
        mySelf: undefined as any
      };

      first.mySelf = first;
      second.mySelf = second;
      compare.gts(first, second).should.equal(false);
    });
  });

  suite('gte', (): void => {
    test('first with self reference => true', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      const second = {
        name: 'foo'
      };

      first.mySelf = first;
      compare.gte(first, second).should.equal(true);
    });

    test('second with self reference => false', async (): Promise<void> => {
      const first = {
        name: 'foo'
      };

      const second = {
        name: 'foo',
        mySelf: undefined as any
      };

      second.mySelf = second;
      compare.gte(first, second).should.equal(false);
    });

    test('both with self reference => true', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      const second = {
        name: 'foo',
        mySelf: undefined as any
      };

      first.mySelf = first;
      second.mySelf = second;
      compare.gte(first, second).should.equal(true);
    });
  });

  suite('gtes', (): void => {
    test('first with self reference => true', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      const second = {
        name: 'foo'
      };

      first.mySelf = first;
      compare.gtes(first, second).should.equal(true);
    });

    test('second with self reference => false', async (): Promise<void> => {
      const first = {
        name: 'foo'
      };

      const second = {
        name: 'foo',
        mySelf: undefined as any
      };

      second.mySelf = second;
      compare.gtes(first, second).should.equal(false);
    });

    test('both with self reference => true', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      const second = {
        name: 'foo',
        mySelf: undefined as any
      };

      first.mySelf = first;
      second.mySelf = second;
      compare.gtes(first, second).should.equal(true);
    });
  });

  suite('lt', (): void => {
    test('first with self reference => false', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      const second = {
        name: 'foo'
      };

      first.mySelf = first;
      compare.lt(first, second).should.equal(false);
    });

    test('second with self reference => true', async (): Promise<void> => {
      const first = {
        name: 'foo'
      };

      const second = {
        name: 'foo',
        mySelf: undefined as any
      };

      second.mySelf = second;
      compare.lt(first, second).should.equal(true);
    });

    test('both with self reference => false', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      const second = {
        name: 'foo',
        mySelf: undefined as any
      };

      first.mySelf = first;
      second.mySelf = second;
      compare.lt(first, second).should.equal(false);
    });
  });

  suite('lts', (): void => {
    test('first with self reference => false', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      const second = {
        name: 'foo'
      };

      first.mySelf = first;
      compare.lts(first, second).should.equal(false);
    });

    test('second with self reference => true', async (): Promise<void> => {
      const first = {
        name: 'foo'
      };

      const second = {
        name: 'foo',
        mySelf: undefined as any
      };

      second.mySelf = second;
      compare.lts(first, second).should.equal(true);
    });

    test('both with self reference => false', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      const second = {
        name: 'foo',
        mySelf: undefined as any
      };

      first.mySelf = first;
      second.mySelf = second;
      compare.lts(first, second).should.equal(false);
    });
  });

  suite('lte', (): void => {
    test('first with self reference => false', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      const second = {
        name: 'foo'
      };

      first.mySelf = first;
      compare.lte(first, second).should.equal(false);
    });

    test('second with self reference => true', async (): Promise<void> => {
      const first = {
        name: 'foo'
      };

      const second = {
        name: 'foo',
        mySelf: undefined as any
      };

      second.mySelf = second;
      compare.lte(first, second).should.equal(true);
    });

    test('both with self reference => true', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      const second = {
        name: 'foo',
        mySelf: undefined as any
      };

      first.mySelf = first;
      second.mySelf = second;
      compare.lte(first, second).should.equal(true);
    });
  });

  suite('ltes', (): void => {
    test('first with self reference => false', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      const second = {
        name: 'foo'
      };

      first.mySelf = first;
      compare.ltes(first, second).should.equal(false);
    });

    test('second with self reference => true', async (): Promise<void> => {
      const first = {
        name: 'foo'
      };

      const second = {
        name: 'foo',
        mySelf: undefined as any
      };

      second.mySelf = second;
      compare.ltes(first, second).should.equal(true);
    });

    test('both with self reference => true', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      const second = {
        name: 'foo',
        mySelf: undefined as any
      };

      first.mySelf = first;
      second.mySelf = second;
      compare.ltes(first, second).should.equal(true);
    });
  });

  suite('id', (): void => {
    test('first with self reference => false', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      const second = {
        name: 'foo'
      };

      first.mySelf = first;
      compare.id(first, second).should.equal(false);
    });

    test('second with self reference => false', async (): Promise<void> => {
      const first = {
        name: 'foo'
      };

      const second = {
        name: 'foo',
        mySelf: undefined as any
      };

      second.mySelf = second;
      compare.id(first, second).should.equal(false);
    });

    test('both with self reference => false', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      const second = {
        name: 'foo',
        mySelf: undefined as any
      };

      first.mySelf = first;
      second.mySelf = second;
      compare.id(first, second).should.equal(false);
    });

    test('identical with self reference => true', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      first.mySelf = first;
      compare.id(first, first).should.equal(true);
    });
  });
});

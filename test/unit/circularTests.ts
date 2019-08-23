import cmp from '../../lib/compare';
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
      cmp.eq(first, second).should.equal(false);
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
      cmp.eq(first, second).should.equal(false);
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
      cmp.eq(first, second).should.equal(true);
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
      cmp.eqs(first, second).should.equal(false);
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
      cmp.eqs(first, second).should.equal(false);
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
      cmp.eqs(first, second).should.equal(true);
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
      cmp.ne(first, second).should.equal(true);
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
      cmp.ne(first, second).should.equal(true);
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
      cmp.ne(first, second).should.equal(false);
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
      cmp.nes(first, second).should.equal(true);
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
      cmp.nes(first, second).should.equal(true);
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
      cmp.nes(first, second).should.equal(false);
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
      cmp.gt(first, second).should.equal(true);
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
      cmp.gt(first, second).should.equal(false);
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
      cmp.gt(first, second).should.equal(false);
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
      cmp.gts(first, second).should.equal(true);
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
      cmp.gts(first, second).should.equal(false);
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
      cmp.gts(first, second).should.equal(false);
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
      cmp.gte(first, second).should.equal(true);
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
      cmp.gte(first, second).should.equal(false);
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
      cmp.gte(first, second).should.equal(true);
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
      cmp.gtes(first, second).should.equal(true);
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
      cmp.gtes(first, second).should.equal(false);
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
      cmp.gtes(first, second).should.equal(true);
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
      cmp.lt(first, second).should.equal(false);
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
      cmp.lt(first, second).should.equal(true);
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
      cmp.lt(first, second).should.equal(false);
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
      cmp.lts(first, second).should.equal(false);
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
      cmp.lts(first, second).should.equal(true);
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
      cmp.lts(first, second).should.equal(false);
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
      cmp.lte(first, second).should.equal(false);
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
      cmp.lte(first, second).should.equal(true);
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
      cmp.lte(first, second).should.equal(true);
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
      cmp.ltes(first, second).should.equal(false);
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
      cmp.ltes(first, second).should.equal(true);
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
      cmp.ltes(first, second).should.equal(true);
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
      cmp.id(first, second).should.equal(false);
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
      cmp.id(first, second).should.equal(false);
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
      cmp.id(first, second).should.equal(false);
    });

    test('identical with self reference => true', async (): Promise<void> => {
      const first = {
        name: 'foo',
        mySelf: undefined as any
      };

      first.mySelf = first;
      cmp.id(first, first).should.equal(true);
    });
  });
});

import cmp from '../../lib/compare';
import 'should';

suite('string x string', (): void => {
  /* eslint-disable no-new-wrappers, unicorn/new-for-builtins */
  const Bar = new String('bar'),
        Empty = new String(''),
        Foo = new String('foo');
  /* eslint-enable no-new-wrappers, unicorn/new-for-builtins */

  const bar = 'bar',
        empty = '',
        foo = 'foo';

  suite('eq', (): void => {
    suite('equal => true', (): void => {
      test('string x string', async (): Promise<void> => {
        cmp.eq(foo, foo).should.equal(true);
      });

      test('string x String()', async (): Promise<void> => {
        cmp.eq(foo, Foo).should.equal(true);
      });

      test('String() x string', async (): Promise<void> => {
        cmp.eq(Foo, foo).should.equal(true);
      });

      test('String() x String()', async (): Promise<void> => {
        cmp.eq(Foo, Foo).should.equal(true);
      });

      test('empty x empty', async (): Promise<void> => {
        cmp.eq(empty, empty).should.equal(true);
      });

      test('empty x Empty()', async (): Promise<void> => {
        cmp.eq(empty, Empty).should.equal(true);
      });

      test('Empty() x empty', async (): Promise<void> => {
        cmp.eq(Empty, empty).should.equal(true);
      });

      test('Empty() x Empty()', async (): Promise<void> => {
        cmp.eq(Empty, Empty).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('string x string', async (): Promise<void> => {
        cmp.eq(foo, bar).should.equal(false);
      });

      test('string x String()', async (): Promise<void> => {
        cmp.eq(foo, Bar).should.equal(false);
      });

      test('String() x string', async (): Promise<void> => {
        cmp.eq(Foo, bar).should.equal(false);
      });

      test('String() x String()', async (): Promise<void> => {
        cmp.eq(Foo, Bar).should.equal(false);
      });

      test('string x empty', async (): Promise<void> => {
        cmp.eq(foo, empty).should.equal(false);
      });

      test('string x Empty()', async (): Promise<void> => {
        cmp.eq(foo, Empty).should.equal(false);
      });

      test('String() x empty', async (): Promise<void> => {
        cmp.eq(Foo, empty).should.equal(false);
      });

      test('String() x Empty()', async (): Promise<void> => {
        cmp.eq(Foo, Empty).should.equal(false);
      });

      test('empty x string', async (): Promise<void> => {
        cmp.eq(empty, foo).should.equal(false);
      });

      test('empty x String()', async (): Promise<void> => {
        cmp.eq(empty, Foo).should.equal(false);
      });

      test('Empty() x string', async (): Promise<void> => {
        cmp.eq(Empty, foo).should.equal(false);
      });

      test('Empty() x String()', async (): Promise<void> => {
        cmp.eq(Empty, Foo).should.equal(false);
      });
    });
  });

  suite('eqs', (): void => {
    suite('any => false', (): void => {
      test('string x string', async (): Promise<void> => {
        cmp.eqs(foo, foo).should.equal(false);
      });
    });
  });

  suite('ne', (): void => {
    suite('equal => false', (): void => {
      test('string x string', async (): Promise<void> => {
        cmp.ne(foo, foo).should.equal(false);
      });

      test('string x String()', async (): Promise<void> => {
        cmp.ne(foo, Foo).should.equal(false);
      });

      test('String() x string', async (): Promise<void> => {
        cmp.ne(Foo, foo).should.equal(false);
      });

      test('String() x String()', async (): Promise<void> => {
        cmp.ne(Foo, Foo).should.equal(false);
      });

      test('empty x empty', async (): Promise<void> => {
        cmp.ne(empty, empty).should.equal(false);
      });

      test('empty x Empty()', async (): Promise<void> => {
        cmp.ne(empty, Empty).should.equal(false);
      });

      test('Empty() x empty', async (): Promise<void> => {
        cmp.ne(Empty, empty).should.equal(false);
      });

      test('Empty() x Empty()', async (): Promise<void> => {
        cmp.ne(Empty, Empty).should.equal(false);
      });
    });

    suite('not equal => true', (): void => {
      test('string x string', async (): Promise<void> => {
        cmp.ne(foo, bar).should.equal(true);
      });

      test('string x String()', async (): Promise<void> => {
        cmp.ne(foo, Bar).should.equal(true);
      });

      test('String() x string', async (): Promise<void> => {
        cmp.ne(Foo, bar).should.equal(true);
      });

      test('String() x String()', async (): Promise<void> => {
        cmp.ne(Foo, Bar).should.equal(true);
      });

      test('string x empty', async (): Promise<void> => {
        cmp.ne(foo, empty).should.equal(true);
      });

      test('string x Empty()', async (): Promise<void> => {
        cmp.ne(foo, Empty).should.equal(true);
      });

      test('String() x empty', async (): Promise<void> => {
        cmp.ne(Foo, empty).should.equal(true);
      });

      test('String() x Empty()', async (): Promise<void> => {
        cmp.ne(Foo, Empty).should.equal(true);
      });

      test('empty x string', async (): Promise<void> => {
        cmp.ne(empty, foo).should.equal(true);
      });

      test('empty x String()', async (): Promise<void> => {
        cmp.ne(empty, Foo).should.equal(true);
      });

      test('Empty() x string', async (): Promise<void> => {
        cmp.ne(Empty, foo).should.equal(true);
      });

      test('Empty() x String()', async (): Promise<void> => {
        cmp.ne(Empty, Foo).should.equal(true);
      });
    });
  });

  suite('nes', (): void => {
    suite('any => false', (): void => {
      test('string x string', async (): Promise<void> => {
        cmp.nes(foo, foo).should.equal(false);
      });
    });
  });

  suite('gt', (): void => {
    suite('greater => true', (): void => {
      test('string x string', async (): Promise<void> => {
        cmp.gt(foo, bar).should.equal(true);
      });

      test('string x String()', async (): Promise<void> => {
        cmp.gt(foo, Bar).should.equal(true);
      });

      test('String() x string', async (): Promise<void> => {
        cmp.gt(Foo, bar).should.equal(true);
      });

      test('String() x String()', async (): Promise<void> => {
        cmp.gt(Foo, Bar).should.equal(true);
      });

      test('string x empty', async (): Promise<void> => {
        cmp.gt(foo, empty).should.equal(true);
      });

      test('string x Empty()', async (): Promise<void> => {
        cmp.gt(foo, Empty).should.equal(true);
      });

      test('String() x empty', async (): Promise<void> => {
        cmp.gt(Foo, empty).should.equal(true);
      });

      test('String() x Empty()', async (): Promise<void> => {
        cmp.gt(Foo, Empty).should.equal(true);
      });
    });

    suite('equal => false', (): void => {
      test('string x string', async (): Promise<void> => {
        cmp.gt(foo, foo).should.equal(false);
      });

      test('string x String()', async (): Promise<void> => {
        cmp.gt(foo, Foo).should.equal(false);
      });

      test('String() x string', async (): Promise<void> => {
        cmp.gt(Foo, foo).should.equal(false);
      });

      test('String() x String()', async (): Promise<void> => {
        cmp.gt(Foo, Foo).should.equal(false);
      });

      test('empty x empty', async (): Promise<void> => {
        cmp.gt(empty, empty).should.equal(false);
      });

      test('empty x Empty()', async (): Promise<void> => {
        cmp.gt(empty, Empty).should.equal(false);
      });

      test('Empty() x empty', async (): Promise<void> => {
        cmp.gt(Empty, empty).should.equal(false);
      });

      test('Empty() x Empty()', async (): Promise<void> => {
        cmp.gt(Empty, Empty).should.equal(false);
      });
    });

    suite('less => false', (): void => {
      test('string x string', async (): Promise<void> => {
        cmp.gt(bar, foo).should.equal(false);
      });

      test('string x String()', async (): Promise<void> => {
        cmp.gt(bar, Foo).should.equal(false);
      });

      test('String() x string', async (): Promise<void> => {
        cmp.gt(Bar, foo).should.equal(false);
      });

      test('String() x String()', async (): Promise<void> => {
        cmp.gt(Bar, Foo).should.equal(false);
      });

      test('empty x string', async (): Promise<void> => {
        cmp.gt(empty, foo).should.equal(false);
      });

      test('empty x String()', async (): Promise<void> => {
        cmp.gt(empty, Foo).should.equal(false);
      });

      test('Empty() x string', async (): Promise<void> => {
        cmp.gt(Empty, foo).should.equal(false);
      });

      test('Empty() x String()', async (): Promise<void> => {
        cmp.gt(Empty, Foo).should.equal(false);
      });
    });
  });

  suite('gts', (): void => {
    suite('any => false', (): void => {
      test('string x string', async (): Promise<void> => {
        cmp.gts(foo, foo).should.equal(false);
      });
    });
  });

  suite('gte', (): void => {
    suite('greater => true', (): void => {
      test('string x string', async (): Promise<void> => {
        cmp.gte(foo, bar).should.equal(true);
      });

      test('string x String()', async (): Promise<void> => {
        cmp.gte(foo, Bar).should.equal(true);
      });

      test('String() x string', async (): Promise<void> => {
        cmp.gte(Foo, bar).should.equal(true);
      });

      test('String() x String()', async (): Promise<void> => {
        cmp.gte(Foo, Bar).should.equal(true);
      });

      test('string x empty', async (): Promise<void> => {
        cmp.gte(foo, empty).should.equal(true);
      });

      test('string x Empty()', async (): Promise<void> => {
        cmp.gte(foo, Empty).should.equal(true);
      });

      test('String() x empty', async (): Promise<void> => {
        cmp.gte(Foo, empty).should.equal(true);
      });

      test('String() x Empty()', async (): Promise<void> => {
        cmp.gte(Foo, Empty).should.equal(true);
      });
    });

    suite('equal => true', (): void => {
      test('string x string', async (): Promise<void> => {
        cmp.gte(foo, foo).should.equal(true);
      });

      test('string x String()', async (): Promise<void> => {
        cmp.gte(foo, Foo).should.equal(true);
      });

      test('String() x string', async (): Promise<void> => {
        cmp.gte(Foo, foo).should.equal(true);
      });

      test('String() x String()', async (): Promise<void> => {
        cmp.gte(Foo, Foo).should.equal(true);
      });

      test('empty x empty', async (): Promise<void> => {
        cmp.gte(empty, empty).should.equal(true);
      });

      test('empty x Empty()', async (): Promise<void> => {
        cmp.gte(empty, Empty).should.equal(true);
      });

      test('Empty() x empty', async (): Promise<void> => {
        cmp.gte(Empty, empty).should.equal(true);
      });

      test('Empty() x Empty()', async (): Promise<void> => {
        cmp.gte(Empty, Empty).should.equal(true);
      });
    });

    suite('less => false', (): void => {
      test('string x string', async (): Promise<void> => {
        cmp.gte(bar, foo).should.equal(false);
      });

      test('string x String()', async (): Promise<void> => {
        cmp.gte(bar, Foo).should.equal(false);
      });

      test('String() x string', async (): Promise<void> => {
        cmp.gte(Bar, foo).should.equal(false);
      });

      test('String() x String()', async (): Promise<void> => {
        cmp.gte(Bar, Foo).should.equal(false);
      });

      test('empty x string', async (): Promise<void> => {
        cmp.gte(empty, foo).should.equal(false);
      });

      test('empty x String()', async (): Promise<void> => {
        cmp.gte(empty, Foo).should.equal(false);
      });

      test('Empty() x string', async (): Promise<void> => {
        cmp.gte(Empty, foo).should.equal(false);
      });

      test('Empty() x String()', async (): Promise<void> => {
        cmp.gte(Empty, Foo).should.equal(false);
      });
    });
  });

  suite('gtes', (): void => {
    suite('any => false', (): void => {
      test('string x string', async (): Promise<void> => {
        cmp.gtes(foo, foo).should.equal(false);
      });
    });
  });

  suite('lt', (): void => {
    suite('greater => false', (): void => {
      test('string x string', async (): Promise<void> => {
        cmp.lt(foo, bar).should.equal(false);
      });

      test('string x String()', async (): Promise<void> => {
        cmp.lt(foo, Bar).should.equal(false);
      });

      test('String() x string', async (): Promise<void> => {
        cmp.lt(Foo, bar).should.equal(false);
      });

      test('String() x String()', async (): Promise<void> => {
        cmp.lt(Foo, Bar).should.equal(false);
      });

      test('string x empty', async (): Promise<void> => {
        cmp.lt(foo, empty).should.equal(false);
      });

      test('string x Empty()', async (): Promise<void> => {
        cmp.lt(foo, Empty).should.equal(false);
      });

      test('String() x empty', async (): Promise<void> => {
        cmp.lt(Foo, empty).should.equal(false);
      });

      test('String() x Empty()', async (): Promise<void> => {
        cmp.lt(Foo, Empty).should.equal(false);
      });
    });

    suite('equal => false', (): void => {
      test('string x string', async (): Promise<void> => {
        cmp.lt(foo, foo).should.equal(false);
      });

      test('string x String()', async (): Promise<void> => {
        cmp.lt(foo, Foo).should.equal(false);
      });

      test('String() x string', async (): Promise<void> => {
        cmp.lt(Foo, foo).should.equal(false);
      });

      test('String() x String()', async (): Promise<void> => {
        cmp.lt(Foo, Foo).should.equal(false);
      });

      test('empty x empty', async (): Promise<void> => {
        cmp.lt(empty, empty).should.equal(false);
      });

      test('empty x Empty()', async (): Promise<void> => {
        cmp.lt(empty, Empty).should.equal(false);
      });

      test('Empty() x empty', async (): Promise<void> => {
        cmp.lt(Empty, empty).should.equal(false);
      });

      test('Empty() x Empty()', async (): Promise<void> => {
        cmp.lt(Empty, Empty).should.equal(false);
      });
    });

    suite('less => true', (): void => {
      test('string x string', async (): Promise<void> => {
        cmp.lt(bar, foo).should.equal(true);
      });

      test('string x String()', async (): Promise<void> => {
        cmp.lt(bar, Foo).should.equal(true);
      });

      test('String() x string', async (): Promise<void> => {
        cmp.lt(Bar, foo).should.equal(true);
      });

      test('String() x String()', async (): Promise<void> => {
        cmp.lt(Bar, Foo).should.equal(true);
      });

      test('empty x string', async (): Promise<void> => {
        cmp.lt(empty, foo).should.equal(true);
      });

      test('empty x String()', async (): Promise<void> => {
        cmp.lt(empty, Foo).should.equal(true);
      });

      test('Empty() x string', async (): Promise<void> => {
        cmp.lt(Empty, foo).should.equal(true);
      });

      test('Empty() x String()', async (): Promise<void> => {
        cmp.lt(Empty, Foo).should.equal(true);
      });
    });
  });

  suite('lts', (): void => {
    suite('any => false', (): void => {
      test('string x string', async (): Promise<void> => {
        cmp.lts(foo, foo).should.equal(false);
      });
    });
  });

  suite('lte', (): void => {
    suite('greater => false', (): void => {
      test('string x string', async (): Promise<void> => {
        cmp.lte(foo, bar).should.equal(false);
      });

      test('string x String()', async (): Promise<void> => {
        cmp.lte(foo, Bar).should.equal(false);
      });

      test('String() x string', async (): Promise<void> => {
        cmp.lte(Foo, bar).should.equal(false);
      });

      test('String() x String()', async (): Promise<void> => {
        cmp.lte(Foo, Bar).should.equal(false);
      });

      test('string x empty', async (): Promise<void> => {
        cmp.lte(foo, empty).should.equal(false);
      });

      test('string x Empty()', async (): Promise<void> => {
        cmp.lte(foo, Empty).should.equal(false);
      });

      test('String() x empty', async (): Promise<void> => {
        cmp.lte(Foo, empty).should.equal(false);
      });

      test('String() x Empty()', async (): Promise<void> => {
        cmp.lte(Foo, Empty).should.equal(false);
      });
    });

    suite('equal => true', (): void => {
      test('string x string', async (): Promise<void> => {
        cmp.lte(foo, foo).should.equal(true);
      });

      test('string x String()', async (): Promise<void> => {
        cmp.lte(foo, Foo).should.equal(true);
      });

      test('String() x string', async (): Promise<void> => {
        cmp.lte(Foo, foo).should.equal(true);
      });

      test('String() x String()', async (): Promise<void> => {
        cmp.lte(Foo, Foo).should.equal(true);
      });

      test('empty x empty', async (): Promise<void> => {
        cmp.lte(empty, empty).should.equal(true);
      });

      test('empty x Empty()', async (): Promise<void> => {
        cmp.lte(empty, Empty).should.equal(true);
      });

      test('Empty() x empty', async (): Promise<void> => {
        cmp.lte(Empty, empty).should.equal(true);
      });

      test('Empty() x Empty()', async (): Promise<void> => {
        cmp.lte(Empty, Empty).should.equal(true);
      });
    });

    suite('less => true', (): void => {
      test('string x string', async (): Promise<void> => {
        cmp.lte(bar, foo).should.equal(true);
      });

      test('string x String()', async (): Promise<void> => {
        cmp.lte(bar, Foo).should.equal(true);
      });

      test('String() x string', async (): Promise<void> => {
        cmp.lte(Bar, foo).should.equal(true);
      });

      test('String() x String()', async (): Promise<void> => {
        cmp.lte(Bar, Foo).should.equal(true);
      });

      test('empty x string', async (): Promise<void> => {
        cmp.lte(empty, foo).should.equal(true);
      });

      test('empty x String()', async (): Promise<void> => {
        cmp.lte(empty, Foo).should.equal(true);
      });

      test('Empty() x string', async (): Promise<void> => {
        cmp.lte(Empty, foo).should.equal(true);
      });

      test('Empty() x String()', async (): Promise<void> => {
        cmp.lte(Empty, Foo).should.equal(true);
      });
    });
  });

  suite('ltes', (): void => {
    suite('any => false', (): void => {
      test('string x string', async (): Promise<void> => {
        cmp.ltes(foo, foo).should.equal(false);
      });
    });
  });

  suite('id', (): void => {
    suite('identical => true', (): void => {
      test('string x string', async (): Promise<void> => {
        cmp.id(foo, foo).should.equal(true);
      });

      test('String() x String()', async (): Promise<void> => {
        cmp.id(Foo, Foo).should.equal(true);
      });

      test('empty x empty', async (): Promise<void> => {
        cmp.id(empty, empty).should.equal(true);
      });

      test('Empty() x Empty()', async (): Promise<void> => {
        cmp.id(Empty, Empty).should.equal(true);
      });
    });

    suite('not identical => false', (): void => {
      test('string x string', async (): Promise<void> => {
        cmp.id(foo, bar).should.equal(false);
      });

      test('string x String()', async (): Promise<void> => {
        cmp.id(foo, Foo).should.equal(false);
      });

      test('String() x string', async (): Promise<void> => {
        cmp.id(Foo, foo).should.equal(false);
      });

      test('String() x String()', async (): Promise<void> => {
        cmp.id(Foo, Bar).should.equal(false);
      });

      test('string x empty', async (): Promise<void> => {
        cmp.id(foo, empty).should.equal(false);
      });

      test('string x Empty()', async (): Promise<void> => {
        cmp.id(foo, Empty).should.equal(false);
      });

      test('String() x empty', async (): Promise<void> => {
        cmp.id(Foo, empty).should.equal(false);
      });

      test('String() x Empty()', async (): Promise<void> => {
        cmp.id(Foo, Empty).should.equal(false);
      });

      test('empty x string', async (): Promise<void> => {
        cmp.id(empty, foo).should.equal(false);
      });

      test('empty x String()', async (): Promise<void> => {
        cmp.id(empty, Foo).should.equal(false);
      });

      test('Empty() x string', async (): Promise<void> => {
        cmp.id(Empty, foo).should.equal(false);
      });

      test('Empty() x String()', async (): Promise<void> => {
        cmp.id(Empty, Foo).should.equal(false);
      });

      test('empty x Empty()', async (): Promise<void> => {
        cmp.id(empty, Empty).should.equal(false);
      });

      test('Empty() x empty', async (): Promise<void> => {
        cmp.id(Empty, empty).should.equal(false);
      });
    });
  });
});

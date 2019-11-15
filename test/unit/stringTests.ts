import { compare } from '../../lib/compare';
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
        compare.eq(foo, foo).should.equal(true);
      });

      test('string x String()', async (): Promise<void> => {
        compare.eq(foo, Foo).should.equal(true);
      });

      test('String() x string', async (): Promise<void> => {
        compare.eq(Foo, foo).should.equal(true);
      });

      test('String() x String()', async (): Promise<void> => {
        compare.eq(Foo, Foo).should.equal(true);
      });

      test('empty x empty', async (): Promise<void> => {
        compare.eq(empty, empty).should.equal(true);
      });

      test('empty x Empty()', async (): Promise<void> => {
        compare.eq(empty, Empty).should.equal(true);
      });

      test('Empty() x empty', async (): Promise<void> => {
        compare.eq(Empty, empty).should.equal(true);
      });

      test('Empty() x Empty()', async (): Promise<void> => {
        compare.eq(Empty, Empty).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('string x string', async (): Promise<void> => {
        compare.eq(foo, bar).should.equal(false);
      });

      test('string x String()', async (): Promise<void> => {
        compare.eq(foo, Bar).should.equal(false);
      });

      test('String() x string', async (): Promise<void> => {
        compare.eq(Foo, bar).should.equal(false);
      });

      test('String() x String()', async (): Promise<void> => {
        compare.eq(Foo, Bar).should.equal(false);
      });

      test('string x empty', async (): Promise<void> => {
        compare.eq(foo, empty).should.equal(false);
      });

      test('string x Empty()', async (): Promise<void> => {
        compare.eq(foo, Empty).should.equal(false);
      });

      test('String() x empty', async (): Promise<void> => {
        compare.eq(Foo, empty).should.equal(false);
      });

      test('String() x Empty()', async (): Promise<void> => {
        compare.eq(Foo, Empty).should.equal(false);
      });

      test('empty x string', async (): Promise<void> => {
        compare.eq(empty, foo).should.equal(false);
      });

      test('empty x String()', async (): Promise<void> => {
        compare.eq(empty, Foo).should.equal(false);
      });

      test('Empty() x string', async (): Promise<void> => {
        compare.eq(Empty, foo).should.equal(false);
      });

      test('Empty() x String()', async (): Promise<void> => {
        compare.eq(Empty, Foo).should.equal(false);
      });
    });
  });

  suite('eqs', (): void => {
    suite('any => false', (): void => {
      test('string x string', async (): Promise<void> => {
        compare.eqs(foo, foo).should.equal(false);
      });
    });
  });

  suite('ne', (): void => {
    suite('equal => false', (): void => {
      test('string x string', async (): Promise<void> => {
        compare.ne(foo, foo).should.equal(false);
      });

      test('string x String()', async (): Promise<void> => {
        compare.ne(foo, Foo).should.equal(false);
      });

      test('String() x string', async (): Promise<void> => {
        compare.ne(Foo, foo).should.equal(false);
      });

      test('String() x String()', async (): Promise<void> => {
        compare.ne(Foo, Foo).should.equal(false);
      });

      test('empty x empty', async (): Promise<void> => {
        compare.ne(empty, empty).should.equal(false);
      });

      test('empty x Empty()', async (): Promise<void> => {
        compare.ne(empty, Empty).should.equal(false);
      });

      test('Empty() x empty', async (): Promise<void> => {
        compare.ne(Empty, empty).should.equal(false);
      });

      test('Empty() x Empty()', async (): Promise<void> => {
        compare.ne(Empty, Empty).should.equal(false);
      });
    });

    suite('not equal => true', (): void => {
      test('string x string', async (): Promise<void> => {
        compare.ne(foo, bar).should.equal(true);
      });

      test('string x String()', async (): Promise<void> => {
        compare.ne(foo, Bar).should.equal(true);
      });

      test('String() x string', async (): Promise<void> => {
        compare.ne(Foo, bar).should.equal(true);
      });

      test('String() x String()', async (): Promise<void> => {
        compare.ne(Foo, Bar).should.equal(true);
      });

      test('string x empty', async (): Promise<void> => {
        compare.ne(foo, empty).should.equal(true);
      });

      test('string x Empty()', async (): Promise<void> => {
        compare.ne(foo, Empty).should.equal(true);
      });

      test('String() x empty', async (): Promise<void> => {
        compare.ne(Foo, empty).should.equal(true);
      });

      test('String() x Empty()', async (): Promise<void> => {
        compare.ne(Foo, Empty).should.equal(true);
      });

      test('empty x string', async (): Promise<void> => {
        compare.ne(empty, foo).should.equal(true);
      });

      test('empty x String()', async (): Promise<void> => {
        compare.ne(empty, Foo).should.equal(true);
      });

      test('Empty() x string', async (): Promise<void> => {
        compare.ne(Empty, foo).should.equal(true);
      });

      test('Empty() x String()', async (): Promise<void> => {
        compare.ne(Empty, Foo).should.equal(true);
      });
    });
  });

  suite('nes', (): void => {
    suite('any => false', (): void => {
      test('string x string', async (): Promise<void> => {
        compare.nes(foo, foo).should.equal(false);
      });
    });
  });

  suite('gt', (): void => {
    suite('greater => true', (): void => {
      test('string x string', async (): Promise<void> => {
        compare.gt(foo, bar).should.equal(true);
      });

      test('string x String()', async (): Promise<void> => {
        compare.gt(foo, Bar).should.equal(true);
      });

      test('String() x string', async (): Promise<void> => {
        compare.gt(Foo, bar).should.equal(true);
      });

      test('String() x String()', async (): Promise<void> => {
        compare.gt(Foo, Bar).should.equal(true);
      });

      test('string x empty', async (): Promise<void> => {
        compare.gt(foo, empty).should.equal(true);
      });

      test('string x Empty()', async (): Promise<void> => {
        compare.gt(foo, Empty).should.equal(true);
      });

      test('String() x empty', async (): Promise<void> => {
        compare.gt(Foo, empty).should.equal(true);
      });

      test('String() x Empty()', async (): Promise<void> => {
        compare.gt(Foo, Empty).should.equal(true);
      });
    });

    suite('equal => false', (): void => {
      test('string x string', async (): Promise<void> => {
        compare.gt(foo, foo).should.equal(false);
      });

      test('string x String()', async (): Promise<void> => {
        compare.gt(foo, Foo).should.equal(false);
      });

      test('String() x string', async (): Promise<void> => {
        compare.gt(Foo, foo).should.equal(false);
      });

      test('String() x String()', async (): Promise<void> => {
        compare.gt(Foo, Foo).should.equal(false);
      });

      test('empty x empty', async (): Promise<void> => {
        compare.gt(empty, empty).should.equal(false);
      });

      test('empty x Empty()', async (): Promise<void> => {
        compare.gt(empty, Empty).should.equal(false);
      });

      test('Empty() x empty', async (): Promise<void> => {
        compare.gt(Empty, empty).should.equal(false);
      });

      test('Empty() x Empty()', async (): Promise<void> => {
        compare.gt(Empty, Empty).should.equal(false);
      });
    });

    suite('less => false', (): void => {
      test('string x string', async (): Promise<void> => {
        compare.gt(bar, foo).should.equal(false);
      });

      test('string x String()', async (): Promise<void> => {
        compare.gt(bar, Foo).should.equal(false);
      });

      test('String() x string', async (): Promise<void> => {
        compare.gt(Bar, foo).should.equal(false);
      });

      test('String() x String()', async (): Promise<void> => {
        compare.gt(Bar, Foo).should.equal(false);
      });

      test('empty x string', async (): Promise<void> => {
        compare.gt(empty, foo).should.equal(false);
      });

      test('empty x String()', async (): Promise<void> => {
        compare.gt(empty, Foo).should.equal(false);
      });

      test('Empty() x string', async (): Promise<void> => {
        compare.gt(Empty, foo).should.equal(false);
      });

      test('Empty() x String()', async (): Promise<void> => {
        compare.gt(Empty, Foo).should.equal(false);
      });
    });
  });

  suite('gts', (): void => {
    suite('any => false', (): void => {
      test('string x string', async (): Promise<void> => {
        compare.gts(foo, foo).should.equal(false);
      });
    });
  });

  suite('gte', (): void => {
    suite('greater => true', (): void => {
      test('string x string', async (): Promise<void> => {
        compare.gte(foo, bar).should.equal(true);
      });

      test('string x String()', async (): Promise<void> => {
        compare.gte(foo, Bar).should.equal(true);
      });

      test('String() x string', async (): Promise<void> => {
        compare.gte(Foo, bar).should.equal(true);
      });

      test('String() x String()', async (): Promise<void> => {
        compare.gte(Foo, Bar).should.equal(true);
      });

      test('string x empty', async (): Promise<void> => {
        compare.gte(foo, empty).should.equal(true);
      });

      test('string x Empty()', async (): Promise<void> => {
        compare.gte(foo, Empty).should.equal(true);
      });

      test('String() x empty', async (): Promise<void> => {
        compare.gte(Foo, empty).should.equal(true);
      });

      test('String() x Empty()', async (): Promise<void> => {
        compare.gte(Foo, Empty).should.equal(true);
      });
    });

    suite('equal => true', (): void => {
      test('string x string', async (): Promise<void> => {
        compare.gte(foo, foo).should.equal(true);
      });

      test('string x String()', async (): Promise<void> => {
        compare.gte(foo, Foo).should.equal(true);
      });

      test('String() x string', async (): Promise<void> => {
        compare.gte(Foo, foo).should.equal(true);
      });

      test('String() x String()', async (): Promise<void> => {
        compare.gte(Foo, Foo).should.equal(true);
      });

      test('empty x empty', async (): Promise<void> => {
        compare.gte(empty, empty).should.equal(true);
      });

      test('empty x Empty()', async (): Promise<void> => {
        compare.gte(empty, Empty).should.equal(true);
      });

      test('Empty() x empty', async (): Promise<void> => {
        compare.gte(Empty, empty).should.equal(true);
      });

      test('Empty() x Empty()', async (): Promise<void> => {
        compare.gte(Empty, Empty).should.equal(true);
      });
    });

    suite('less => false', (): void => {
      test('string x string', async (): Promise<void> => {
        compare.gte(bar, foo).should.equal(false);
      });

      test('string x String()', async (): Promise<void> => {
        compare.gte(bar, Foo).should.equal(false);
      });

      test('String() x string', async (): Promise<void> => {
        compare.gte(Bar, foo).should.equal(false);
      });

      test('String() x String()', async (): Promise<void> => {
        compare.gte(Bar, Foo).should.equal(false);
      });

      test('empty x string', async (): Promise<void> => {
        compare.gte(empty, foo).should.equal(false);
      });

      test('empty x String()', async (): Promise<void> => {
        compare.gte(empty, Foo).should.equal(false);
      });

      test('Empty() x string', async (): Promise<void> => {
        compare.gte(Empty, foo).should.equal(false);
      });

      test('Empty() x String()', async (): Promise<void> => {
        compare.gte(Empty, Foo).should.equal(false);
      });
    });
  });

  suite('gtes', (): void => {
    suite('any => false', (): void => {
      test('string x string', async (): Promise<void> => {
        compare.gtes(foo, foo).should.equal(false);
      });
    });
  });

  suite('lt', (): void => {
    suite('greater => false', (): void => {
      test('string x string', async (): Promise<void> => {
        compare.lt(foo, bar).should.equal(false);
      });

      test('string x String()', async (): Promise<void> => {
        compare.lt(foo, Bar).should.equal(false);
      });

      test('String() x string', async (): Promise<void> => {
        compare.lt(Foo, bar).should.equal(false);
      });

      test('String() x String()', async (): Promise<void> => {
        compare.lt(Foo, Bar).should.equal(false);
      });

      test('string x empty', async (): Promise<void> => {
        compare.lt(foo, empty).should.equal(false);
      });

      test('string x Empty()', async (): Promise<void> => {
        compare.lt(foo, Empty).should.equal(false);
      });

      test('String() x empty', async (): Promise<void> => {
        compare.lt(Foo, empty).should.equal(false);
      });

      test('String() x Empty()', async (): Promise<void> => {
        compare.lt(Foo, Empty).should.equal(false);
      });
    });

    suite('equal => false', (): void => {
      test('string x string', async (): Promise<void> => {
        compare.lt(foo, foo).should.equal(false);
      });

      test('string x String()', async (): Promise<void> => {
        compare.lt(foo, Foo).should.equal(false);
      });

      test('String() x string', async (): Promise<void> => {
        compare.lt(Foo, foo).should.equal(false);
      });

      test('String() x String()', async (): Promise<void> => {
        compare.lt(Foo, Foo).should.equal(false);
      });

      test('empty x empty', async (): Promise<void> => {
        compare.lt(empty, empty).should.equal(false);
      });

      test('empty x Empty()', async (): Promise<void> => {
        compare.lt(empty, Empty).should.equal(false);
      });

      test('Empty() x empty', async (): Promise<void> => {
        compare.lt(Empty, empty).should.equal(false);
      });

      test('Empty() x Empty()', async (): Promise<void> => {
        compare.lt(Empty, Empty).should.equal(false);
      });
    });

    suite('less => true', (): void => {
      test('string x string', async (): Promise<void> => {
        compare.lt(bar, foo).should.equal(true);
      });

      test('string x String()', async (): Promise<void> => {
        compare.lt(bar, Foo).should.equal(true);
      });

      test('String() x string', async (): Promise<void> => {
        compare.lt(Bar, foo).should.equal(true);
      });

      test('String() x String()', async (): Promise<void> => {
        compare.lt(Bar, Foo).should.equal(true);
      });

      test('empty x string', async (): Promise<void> => {
        compare.lt(empty, foo).should.equal(true);
      });

      test('empty x String()', async (): Promise<void> => {
        compare.lt(empty, Foo).should.equal(true);
      });

      test('Empty() x string', async (): Promise<void> => {
        compare.lt(Empty, foo).should.equal(true);
      });

      test('Empty() x String()', async (): Promise<void> => {
        compare.lt(Empty, Foo).should.equal(true);
      });
    });
  });

  suite('lts', (): void => {
    suite('any => false', (): void => {
      test('string x string', async (): Promise<void> => {
        compare.lts(foo, foo).should.equal(false);
      });
    });
  });

  suite('lte', (): void => {
    suite('greater => false', (): void => {
      test('string x string', async (): Promise<void> => {
        compare.lte(foo, bar).should.equal(false);
      });

      test('string x String()', async (): Promise<void> => {
        compare.lte(foo, Bar).should.equal(false);
      });

      test('String() x string', async (): Promise<void> => {
        compare.lte(Foo, bar).should.equal(false);
      });

      test('String() x String()', async (): Promise<void> => {
        compare.lte(Foo, Bar).should.equal(false);
      });

      test('string x empty', async (): Promise<void> => {
        compare.lte(foo, empty).should.equal(false);
      });

      test('string x Empty()', async (): Promise<void> => {
        compare.lte(foo, Empty).should.equal(false);
      });

      test('String() x empty', async (): Promise<void> => {
        compare.lte(Foo, empty).should.equal(false);
      });

      test('String() x Empty()', async (): Promise<void> => {
        compare.lte(Foo, Empty).should.equal(false);
      });
    });

    suite('equal => true', (): void => {
      test('string x string', async (): Promise<void> => {
        compare.lte(foo, foo).should.equal(true);
      });

      test('string x String()', async (): Promise<void> => {
        compare.lte(foo, Foo).should.equal(true);
      });

      test('String() x string', async (): Promise<void> => {
        compare.lte(Foo, foo).should.equal(true);
      });

      test('String() x String()', async (): Promise<void> => {
        compare.lte(Foo, Foo).should.equal(true);
      });

      test('empty x empty', async (): Promise<void> => {
        compare.lte(empty, empty).should.equal(true);
      });

      test('empty x Empty()', async (): Promise<void> => {
        compare.lte(empty, Empty).should.equal(true);
      });

      test('Empty() x empty', async (): Promise<void> => {
        compare.lte(Empty, empty).should.equal(true);
      });

      test('Empty() x Empty()', async (): Promise<void> => {
        compare.lte(Empty, Empty).should.equal(true);
      });
    });

    suite('less => true', (): void => {
      test('string x string', async (): Promise<void> => {
        compare.lte(bar, foo).should.equal(true);
      });

      test('string x String()', async (): Promise<void> => {
        compare.lte(bar, Foo).should.equal(true);
      });

      test('String() x string', async (): Promise<void> => {
        compare.lte(Bar, foo).should.equal(true);
      });

      test('String() x String()', async (): Promise<void> => {
        compare.lte(Bar, Foo).should.equal(true);
      });

      test('empty x string', async (): Promise<void> => {
        compare.lte(empty, foo).should.equal(true);
      });

      test('empty x String()', async (): Promise<void> => {
        compare.lte(empty, Foo).should.equal(true);
      });

      test('Empty() x string', async (): Promise<void> => {
        compare.lte(Empty, foo).should.equal(true);
      });

      test('Empty() x String()', async (): Promise<void> => {
        compare.lte(Empty, Foo).should.equal(true);
      });
    });
  });

  suite('ltes', (): void => {
    suite('any => false', (): void => {
      test('string x string', async (): Promise<void> => {
        compare.ltes(foo, foo).should.equal(false);
      });
    });
  });

  suite('id', (): void => {
    suite('identical => true', (): void => {
      test('string x string', async (): Promise<void> => {
        compare.id(foo, foo).should.equal(true);
      });

      test('String() x String()', async (): Promise<void> => {
        compare.id(Foo, Foo).should.equal(true);
      });

      test('empty x empty', async (): Promise<void> => {
        compare.id(empty, empty).should.equal(true);
      });

      test('Empty() x Empty()', async (): Promise<void> => {
        compare.id(Empty, Empty).should.equal(true);
      });
    });

    suite('not identical => false', (): void => {
      test('string x string', async (): Promise<void> => {
        compare.id(foo, bar).should.equal(false);
      });

      test('string x String()', async (): Promise<void> => {
        compare.id(foo, Foo).should.equal(false);
      });

      test('String() x string', async (): Promise<void> => {
        compare.id(Foo, foo).should.equal(false);
      });

      test('String() x String()', async (): Promise<void> => {
        compare.id(Foo, Bar).should.equal(false);
      });

      test('string x empty', async (): Promise<void> => {
        compare.id(foo, empty).should.equal(false);
      });

      test('string x Empty()', async (): Promise<void> => {
        compare.id(foo, Empty).should.equal(false);
      });

      test('String() x empty', async (): Promise<void> => {
        compare.id(Foo, empty).should.equal(false);
      });

      test('String() x Empty()', async (): Promise<void> => {
        compare.id(Foo, Empty).should.equal(false);
      });

      test('empty x string', async (): Promise<void> => {
        compare.id(empty, foo).should.equal(false);
      });

      test('empty x String()', async (): Promise<void> => {
        compare.id(empty, Foo).should.equal(false);
      });

      test('Empty() x string', async (): Promise<void> => {
        compare.id(Empty, foo).should.equal(false);
      });

      test('Empty() x String()', async (): Promise<void> => {
        compare.id(Empty, Foo).should.equal(false);
      });

      test('empty x Empty()', async (): Promise<void> => {
        compare.id(empty, Empty).should.equal(false);
      });

      test('Empty() x empty', async (): Promise<void> => {
        compare.id(Empty, empty).should.equal(false);
      });
    });
  });
});

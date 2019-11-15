import { compare } from '../../lib/compare';
import 'should';

suite('object x object', (): void => {
  /* eslint-disable no-new-object */
  const Empty = new Object(),
        O1 = new Object() as any,
        O2 = new Object() as any,
        P1 = new Object() as any,
        Q1 = new Object() as any;
  /* eslint-enable no-new-object */

  const empty = {},
        o1 = { foo: 'bar' },
        o2 = { foo: 'bar' },
        p1 = { foo: 'baz' },
        q1 = { bar: 'foo' },
        r1 = { foo: '' },
        r2 = { foo: '' },
        s1 = { foo: null },
        t1 = { foo: 'bar', bas: { bat: 'bax' }},
        t2 = { foo: 'bar', bas: { bat: 'bax', bay: 'baz' }};

  O1.foo = 'bar';
  O2.foo = 'bar';
  P1.foo = 'baz';
  Q1.bar = 'foo';

  suite('eq', (): void => {
    suite('equal => true', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.eq(o1, o2).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.eq(o1, O1).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.eq(O1, o1).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.eq(O1, O2).should.equal(true);
      });

      test('null x null', async (): Promise<void> => {
        compare.eq(null, null).should.equal(true);
      });

      test('falsy x falsy', async (): Promise<void> => {
        compare.eq(r1, r2).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.eq(o1, p1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.eq(o1, P1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.eq(O1, p1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.eq(O1, P1).should.equal(false);
      });

      test('object x null', async (): Promise<void> => {
        compare.eq(o1, null).should.equal(false);
      });

      test('Object() x null', async (): Promise<void> => {
        compare.eq(O1, null).should.equal(false);
      });

      test('null x object', async (): Promise<void> => {
        compare.eq(null, o1).should.equal(false);
      });

      test('null x Object()', async (): Promise<void> => {
        compare.eq(null, O1).should.equal(false);
      });

      test('object x falsy', async (): Promise<void> => {
        compare.eq(o1, r1).should.equal(false);
      });

      test('falsy x object', async (): Promise<void> => {
        compare.eq(r1, o1).should.equal(false);
      });

      test('falsy x falsy', async (): Promise<void> => {
        compare.eq(r1, s1).should.equal(false);
      });

      test('object x empty array', async (): Promise<void> => {
        compare.eq(empty, []).should.equal(false);
      });
    });
  });

  suite('eqs', (): void => {
    suite('equal => true', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.eqs(o1, p1).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.eqs(o1, P1).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.eqs(O1, p1).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.eqs(O1, P1).should.equal(true);
      });

      test('falsy x falsy', async (): Promise<void> => {
        compare.eqs(r1, s1).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.eqs(o1, empty).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.eqs(o1, Empty).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.eqs(O1, empty).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.eqs(O1, Empty).should.equal(false);
      });

      test('object x null', async (): Promise<void> => {
        compare.eqs(o1, null).should.equal(false);
      });

      test('Object() x null', async (): Promise<void> => {
        compare.eqs(O1, null).should.equal(false);
      });

      test('null x object', async (): Promise<void> => {
        compare.eqs(null, o1).should.equal(false);
      });

      test('null x Object()', async (): Promise<void> => {
        compare.eqs(null, O1).should.equal(false);
      });

      test('null x null', async (): Promise<void> => {
        compare.eqs(null, null).should.equal(false);
      });

      test('object x falsy', async (): Promise<void> => {
        compare.eqs(q1, r1).should.equal(false);
      });

      test('falsy x object', async (): Promise<void> => {
        compare.eqs(r1, q1).should.equal(false);
      });
    });
  });

  suite('ne', (): void => {
    suite('equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.ne(o1, o2).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.ne(o1, O1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.ne(O1, o1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.ne(O1, O2).should.equal(false);
      });

      test('null x null', async (): Promise<void> => {
        compare.ne(null, null).should.equal(false);
      });

      test('falsy x falsy', async (): Promise<void> => {
        compare.ne(r1, r2).should.equal(false);
      });
    });

    suite('not equal => true', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.ne(o1, p1).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.ne(o1, P1).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.ne(O1, p1).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.ne(O1, P1).should.equal(true);
      });

      test('object x null', async (): Promise<void> => {
        compare.ne(o1, null).should.equal(true);
      });

      test('Object() x null', async (): Promise<void> => {
        compare.ne(O1, null).should.equal(true);
      });

      test('null x object', async (): Promise<void> => {
        compare.ne(null, o1).should.equal(true);
      });

      test('null x Object()', async (): Promise<void> => {
        compare.ne(null, O1).should.equal(true);
      });

      test('falsy x falsy', async (): Promise<void> => {
        compare.ne(r1, s1).should.equal(true);
      });

      test('object x false', async (): Promise<void> => {
        compare.ne(o1, r1).should.equal(true);
      });

      test('falsy x object', async (): Promise<void> => {
        compare.ne(r1, o1).should.equal(true);
      });
    });
  });

  suite('nes', (): void => {
    suite('equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.nes(o1, p1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.nes(o1, P1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.nes(O1, p1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.nes(O1, P1).should.equal(false);
      });

      test('null x null', async (): Promise<void> => {
        compare.nes(null, null).should.equal(false);
      });

      test('falsy x falsy', async (): Promise<void> => {
        compare.nes(r1, s1).should.equal(false);
      });

      test('object x false', async (): Promise<void> => {
        compare.nes(o1, r1).should.equal(false);
      });

      test('falsy x object', async (): Promise<void> => {
        compare.nes(r1, o1).should.equal(false);
      });

      test('object x null', async (): Promise<void> => {
        compare.nes(o1, null).should.equal(false);
      });

      test('Object() x null', async (): Promise<void> => {
        compare.nes(O1, null).should.equal(false);
      });

      test('null x object', async (): Promise<void> => {
        compare.nes(null, o1).should.equal(false);
      });

      test('null x Object()', async (): Promise<void> => {
        compare.nes(null, O1).should.equal(false);
      });
    });

    suite('not equal => true', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.nes(o1, empty).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.nes(o1, Empty).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.nes(O1, empty).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.nes(O1, Empty).should.equal(true);
      });
    });
  });

  suite('gt', (): void => {
    suite('greater than => true', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.gt(t2, t1).should.equal(true);
      });

      test('object x empty', async (): Promise<void> => {
        compare.gt(o1, empty).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.gt(o1, Empty).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.gt(O1, empty).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.gt(O1, Empty).should.equal(true);
      });

      test('falsy x object', async (): Promise<void> => {
        compare.gt(r1, empty).should.equal(true);
      });
    });

    suite('equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.gt(o1, o2).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.gt(o1, O1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.gt(O1, o1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.gt(O1, O2).should.equal(false);
      });

      test('null x null', async (): Promise<void> => {
        compare.gt(null, null).should.equal(false);
      });

      test('falsy x falsy', async (): Promise<void> => {
        compare.gt(r1, r1).should.equal(false);
      });
    });

    suite('not equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.gt(o1, p1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.gt(o1, P1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.gt(O1, p1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.gt(O1, P1).should.equal(false);
      });

      test('object x null', async (): Promise<void> => {
        compare.gt(o1, null).should.equal(false);
      });

      test('Object() x null', async (): Promise<void> => {
        compare.gt(O1, null).should.equal(false);
      });

      test('null x object', async (): Promise<void> => {
        compare.gt(null, o1).should.equal(false);
      });

      test('null x Object()', async (): Promise<void> => {
        compare.gt(null, O1).should.equal(false);
      });

      test('falsy x falsy', async (): Promise<void> => {
        compare.gt(r1, r2).should.equal(false);
      });
    });

    suite('less than => false', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.gt(t1, t2).should.equal(false);
      });

      test('empty x object', async (): Promise<void> => {
        compare.gt(empty, o1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.gt(Empty, o1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.gt(empty, O1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.gt(Empty, O1).should.equal(false);
      });

      test('object x falsy', async (): Promise<void> => {
        compare.gt(empty, r1).should.equal(false);
      });
    });
  });

  suite('gts', (): void => {
    suite('greater than => true', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.gts(o1, empty).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.gts(o1, Empty).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.gts(O1, empty).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.gts(O1, Empty).should.equal(true);
      });
    });

    suite('equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.gts(o1, o2).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.gts(o1, O1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.gts(O1, o1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.gts(O1, O2).should.equal(false);
      });

      test('null x null', async (): Promise<void> => {
        compare.gts(null, null).should.equal(false);
      });
    });

    suite('not equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.gts(o1, q1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.gts(o1, Q1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.gts(O1, q1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.gts(O1, Q1).should.equal(false);
      });

      test('object x null', async (): Promise<void> => {
        compare.gts(o1, null).should.equal(false);
      });

      test('Object() x null', async (): Promise<void> => {
        compare.gts(O1, null).should.equal(false);
      });
    });

    suite('less than => false', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.gts(empty, o1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.gts(Empty, o1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.gts(empty, O1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.gts(Empty, O1).should.equal(false);
      });

      test('null x object', async (): Promise<void> => {
        compare.gts(null, o1).should.equal(false);
      });

      test('null x Object()', async (): Promise<void> => {
        compare.gts(null, O1).should.equal(false);
      });
    });
  });

  suite('gte', (): void => {
    suite('greater than => true', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.gte(t2, t1).should.equal(true);
      });

      test('object x empty', async (): Promise<void> => {
        compare.gte(o1, empty).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.gte(o1, Empty).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.gte(O1, empty).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.gte(O1, Empty).should.equal(true);
      });

      test('falsy x object', async (): Promise<void> => {
        compare.gte(r1, empty).should.equal(true);
      });
    });

    suite('equal => true', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.gte(o1, o2).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.gte(o1, O1).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.gte(O1, o1).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.gte(O1, O2).should.equal(true);
      });

      test('null x null', async (): Promise<void> => {
        compare.gte(null, null).should.equal(true);
      });

      test('falsy x falsy', async (): Promise<void> => {
        compare.gte(r1, r1).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.gte(o1, p1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.gte(o1, P1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.gte(O1, p1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.gte(O1, P1).should.equal(false);
      });

      test('object x null', async (): Promise<void> => {
        compare.gte(o1, null).should.equal(false);
      });

      test('Object() x null', async (): Promise<void> => {
        compare.gte(O1, null).should.equal(false);
      });

      test('null x object', async (): Promise<void> => {
        compare.gte(null, o1).should.equal(false);
      });

      test('null x Object()', async (): Promise<void> => {
        compare.gte(null, O1).should.equal(false);
      });

      test('null x falsy', async (): Promise<void> => {
        compare.gte(null, r1).should.equal(false);
      });

      test('falsy x null', async (): Promise<void> => {
        compare.gte(r1, null).should.equal(false);
      });

      test('object x falsy', async (): Promise<void> => {
        compare.gte(o1, r1).should.equal(false);
      });

      test('falsy x object', async (): Promise<void> => {
        compare.gte(r1, o1).should.equal(false);
      });
    });

    suite('less than => false', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.gte(t1, t2).should.equal(false);
      });

      test('empty x object', async (): Promise<void> => {
        compare.gte(empty, o1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.gte(Empty, o1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.gte(empty, O1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.gte(Empty, O1).should.equal(false);
      });

      test('object x falsy', async (): Promise<void> => {
        compare.gte(empty, r1).should.equal(false);
      });
    });
  });

  suite('gtes', (): void => {
    suite('greater than => true', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.gtes(o1, empty).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.gtes(o1, Empty).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.gtes(O1, empty).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.gtes(O1, Empty).should.equal(true);
      });
    });

    suite('equal => true', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.gtes(o1, o2).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.gtes(o1, O1).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.gtes(O1, o1).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.gtes(O1, O2).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.gtes(o1, q1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.gtes(o1, Q1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.gtes(O1, q1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.gtes(O1, Q1).should.equal(false);
      });

      test('object x null', async (): Promise<void> => {
        compare.gtes(o1, null).should.equal(false);
      });

      test('Object() x null', async (): Promise<void> => {
        compare.gtes(O1, null).should.equal(false);
      });

      test('null x null', async (): Promise<void> => {
        compare.gtes(null, null).should.equal(false);
      });
    });

    suite('less than => false', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.gtes(empty, o1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.gtes(Empty, o1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.gtes(empty, O1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.gtes(Empty, O1).should.equal(false);
      });

      test('null x object', async (): Promise<void> => {
        compare.gtes(null, o1).should.equal(false);
      });

      test('null x Object()', async (): Promise<void> => {
        compare.gtes(null, O1).should.equal(false);
      });
    });
  });

  suite('lt', (): void => {
    suite('greater than => false', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.lt(t2, t1).should.equal(false);
      });

      test('object x empty', async (): Promise<void> => {
        compare.lt(o1, empty).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.lt(o1, Empty).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.lt(O1, empty).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.lt(O1, Empty).should.equal(false);
      });

      test('falsy x object', async (): Promise<void> => {
        compare.lt(r1, empty).should.equal(false);
      });
    });

    suite('equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.lt(o1, o2).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.lt(o1, O1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.lt(O1, o1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.lt(O1, O2).should.equal(false);
      });

      test('null x null', async (): Promise<void> => {
        compare.lt(null, null).should.equal(false);
      });

      test('falsy x falsy', async (): Promise<void> => {
        compare.lt(r1, r1).should.equal(false);
      });
    });

    suite('not equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.lt(o1, p1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.lt(o1, P1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.lt(O1, p1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.lt(O1, P1).should.equal(false);
      });

      test('object x null', async (): Promise<void> => {
        compare.lt(o1, null).should.equal(false);
      });

      test('Object() x null', async (): Promise<void> => {
        compare.lt(O1, null).should.equal(false);
      });

      test('null x object', async (): Promise<void> => {
        compare.lt(null, o1).should.equal(false);
      });

      test('null x Object()', async (): Promise<void> => {
        compare.lt(null, O1).should.equal(false);
      });

      test('falsy x falsy', async (): Promise<void> => {
        compare.lt(r1, r2).should.equal(false);
      });
    });

    suite('less than => true', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.lt(t1, t2).should.equal(true);
      });

      test('empty x object', async (): Promise<void> => {
        compare.lt(empty, o1).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.lt(Empty, o1).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.lt(empty, O1).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.lt(Empty, O1).should.equal(true);
      });

      test('object x falsy', async (): Promise<void> => {
        compare.lt(empty, r1).should.equal(true);
      });
    });
  });

  suite('lts', (): void => {
    suite('greater than => false', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.lts(o1, empty).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.lts(o1, Empty).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.lts(O1, empty).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.lts(O1, Empty).should.equal(false);
      });

      test('object x null', async (): Promise<void> => {
        compare.lts(o1, null).should.equal(false);
      });

      test('Object() x null', async (): Promise<void> => {
        compare.lts(O1, null).should.equal(false);
      });
    });

    suite('equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.lts(o1, o2).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.lts(o1, O1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.lts(O1, o1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.lts(O1, O2).should.equal(false);
      });

      test('null x null', async (): Promise<void> => {
        compare.lts(null, null).should.equal(false);
      });
    });

    suite('not equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.lts(o1, q1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.lts(o1, Q1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.lts(O1, q1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.lts(O1, Q1).should.equal(false);
      });

      test('null x object', async (): Promise<void> => {
        compare.lts(null, o1).should.equal(false);
      });

      test('null x Object()', async (): Promise<void> => {
        compare.lts(null, O1).should.equal(false);
      });
    });

    suite('less than => true', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.lts(empty, o1).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.lts(Empty, o1).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.lts(empty, O1).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.lts(Empty, O1).should.equal(true);
      });
    });
  });

  suite('lte', (): void => {
    suite('greater than => false', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.lte(t2, t1).should.equal(false);
      });

      test('object x empty', async (): Promise<void> => {
        compare.lte(o1, empty).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.lte(o1, Empty).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.lte(O1, empty).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.lte(O1, Empty).should.equal(false);
      });

      test('falsy x object', async (): Promise<void> => {
        compare.lte(r1, empty).should.equal(false);
      });
    });

    suite('equal => true', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.lte(o1, o2).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.lte(o1, O1).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.lte(O1, o1).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.lte(O1, O2).should.equal(true);
      });

      test('null x null', async (): Promise<void> => {
        compare.lte(null, null).should.equal(true);
      });

      test('falsy x falsy', async (): Promise<void> => {
        compare.lte(r1, r1).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.lte(o1, p1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.lte(o1, P1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.lte(O1, p1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.lte(O1, P1).should.equal(false);
      });

      test('object x null', async (): Promise<void> => {
        compare.lte(o1, null).should.equal(false);
      });

      test('Object() x null', async (): Promise<void> => {
        compare.lte(O1, null).should.equal(false);
      });

      test('null x object', async (): Promise<void> => {
        compare.lte(null, o1).should.equal(false);
      });

      test('null x Object()', async (): Promise<void> => {
        compare.lte(null, O1).should.equal(false);
      });

      test('null x falsy', async (): Promise<void> => {
        compare.lte(null, r1).should.equal(false);
      });

      test('falsy x null', async (): Promise<void> => {
        compare.lte(r1, null).should.equal(false);
      });

      test('object x falsy', async (): Promise<void> => {
        compare.lte(o1, r1).should.equal(false);
      });

      test('falsy x object', async (): Promise<void> => {
        compare.lte(r1, o1).should.equal(false);
      });
    });

    suite('less than => true', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.lte(t1, t2).should.equal(true);
      });

      test('empty x object', async (): Promise<void> => {
        compare.lte(empty, o1).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.lte(Empty, o1).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.lte(empty, O1).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.lte(Empty, O1).should.equal(true);
      });

      test('object x falsy', async (): Promise<void> => {
        compare.lte(empty, r1).should.equal(true);
      });
    });
  });

  suite('ltes', (): void => {
    suite('greater than => false', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.ltes(o1, empty).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.ltes(o1, Empty).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.ltes(O1, empty).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.ltes(O1, Empty).should.equal(false);
      });

      test('object x null', async (): Promise<void> => {
        compare.ltes(o1, null).should.equal(false);
      });

      test('Object() x null', async (): Promise<void> => {
        compare.ltes(O1, null).should.equal(false);
      });
    });

    suite('equal => true', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.ltes(o1, o2).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.ltes(o1, O1).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.ltes(O1, o1).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.ltes(O1, O2).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.ltes(o1, q1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.ltes(o1, Q1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.ltes(O1, q1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.ltes(O1, Q1).should.equal(false);
      });

      test('null x null', async (): Promise<void> => {
        compare.ltes(null, null).should.equal(false);
      });

      test('null x object', async (): Promise<void> => {
        compare.ltes(null, o1).should.equal(false);
      });

      test('null x Object()', async (): Promise<void> => {
        compare.ltes(null, O1).should.equal(false);
      });
    });

    suite('less than => true', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.ltes(empty, o1).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.ltes(Empty, o1).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.ltes(empty, O1).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.ltes(Empty, O1).should.equal(true);
      });
    });
  });

  suite('id', (): void => {
    suite('identical => true', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.id(o1, o1).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.id(O1, O1).should.equal(true);
      });

      test('null x null', async (): Promise<void> => {
        compare.id(null, null).should.equal(true);
      });

      test('falsy x falsy', async (): Promise<void> => {
        compare.id(r1, r1).should.equal(true);
      });
    });

    suite('not identical => false', (): void => {
      test('object x object', async (): Promise<void> => {
        compare.id(o1, o2).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        compare.id(o1, O1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        compare.id(O1, o1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        compare.id(O1, O2).should.equal(false);
      });

      test('falsy x falsy', async (): Promise<void> => {
        compare.id(r1, r2).should.equal(false);
      });
    });
  });
});

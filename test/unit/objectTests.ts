import cmp from '../../lib/compare';
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
        cmp.eq(o1, o2).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.eq(o1, O1).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.eq(O1, o1).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.eq(O1, O2).should.equal(true);
      });

      test('null x null', async (): Promise<void> => {
        cmp.eq(null, null).should.equal(true);
      });

      test('falsy x falsy', async (): Promise<void> => {
        cmp.eq(r1, r2).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.eq(o1, p1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.eq(o1, P1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.eq(O1, p1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.eq(O1, P1).should.equal(false);
      });

      test('object x null', async (): Promise<void> => {
        cmp.eq(o1, null).should.equal(false);
      });

      test('Object() x null', async (): Promise<void> => {
        cmp.eq(O1, null).should.equal(false);
      });

      test('null x object', async (): Promise<void> => {
        cmp.eq(null, o1).should.equal(false);
      });

      test('null x Object()', async (): Promise<void> => {
        cmp.eq(null, O1).should.equal(false);
      });

      test('object x falsy', async (): Promise<void> => {
        cmp.eq(o1, r1).should.equal(false);
      });

      test('falsy x object', async (): Promise<void> => {
        cmp.eq(r1, o1).should.equal(false);
      });

      test('falsy x falsy', async (): Promise<void> => {
        cmp.eq(r1, s1).should.equal(false);
      });

      test('object x empty array', async (): Promise<void> => {
        cmp.eq(empty, []).should.equal(false);
      });
    });
  });

  suite('eqs', (): void => {
    suite('equal => true', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.eqs(o1, p1).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.eqs(o1, P1).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.eqs(O1, p1).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.eqs(O1, P1).should.equal(true);
      });

      test('falsy x falsy', async (): Promise<void> => {
        cmp.eqs(r1, s1).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.eqs(o1, empty).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.eqs(o1, Empty).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.eqs(O1, empty).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.eqs(O1, Empty).should.equal(false);
      });

      test('object x null', async (): Promise<void> => {
        cmp.eqs(o1, null).should.equal(false);
      });

      test('Object() x null', async (): Promise<void> => {
        cmp.eqs(O1, null).should.equal(false);
      });

      test('null x object', async (): Promise<void> => {
        cmp.eqs(null, o1).should.equal(false);
      });

      test('null x Object()', async (): Promise<void> => {
        cmp.eqs(null, O1).should.equal(false);
      });

      test('null x null', async (): Promise<void> => {
        cmp.eqs(null, null).should.equal(false);
      });

      test('object x falsy', async (): Promise<void> => {
        cmp.eqs(q1, r1).should.equal(false);
      });

      test('falsy x object', async (): Promise<void> => {
        cmp.eqs(r1, q1).should.equal(false);
      });
    });
  });

  suite('ne', (): void => {
    suite('equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.ne(o1, o2).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.ne(o1, O1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.ne(O1, o1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.ne(O1, O2).should.equal(false);
      });

      test('null x null', async (): Promise<void> => {
        cmp.ne(null, null).should.equal(false);
      });

      test('falsy x falsy', async (): Promise<void> => {
        cmp.ne(r1, r2).should.equal(false);
      });
    });

    suite('not equal => true', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.ne(o1, p1).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.ne(o1, P1).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.ne(O1, p1).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.ne(O1, P1).should.equal(true);
      });

      test('object x null', async (): Promise<void> => {
        cmp.ne(o1, null).should.equal(true);
      });

      test('Object() x null', async (): Promise<void> => {
        cmp.ne(O1, null).should.equal(true);
      });

      test('null x object', async (): Promise<void> => {
        cmp.ne(null, o1).should.equal(true);
      });

      test('null x Object()', async (): Promise<void> => {
        cmp.ne(null, O1).should.equal(true);
      });

      test('falsy x falsy', async (): Promise<void> => {
        cmp.ne(r1, s1).should.equal(true);
      });

      test('object x false', async (): Promise<void> => {
        cmp.ne(o1, r1).should.equal(true);
      });

      test('falsy x object', async (): Promise<void> => {
        cmp.ne(r1, o1).should.equal(true);
      });
    });
  });

  suite('nes', (): void => {
    suite('equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.nes(o1, p1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.nes(o1, P1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.nes(O1, p1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.nes(O1, P1).should.equal(false);
      });

      test('null x null', async (): Promise<void> => {
        cmp.nes(null, null).should.equal(false);
      });

      test('falsy x falsy', async (): Promise<void> => {
        cmp.nes(r1, s1).should.equal(false);
      });

      test('object x false', async (): Promise<void> => {
        cmp.nes(o1, r1).should.equal(false);
      });

      test('falsy x object', async (): Promise<void> => {
        cmp.nes(r1, o1).should.equal(false);
      });

      test('object x null', async (): Promise<void> => {
        cmp.nes(o1, null).should.equal(false);
      });

      test('Object() x null', async (): Promise<void> => {
        cmp.nes(O1, null).should.equal(false);
      });

      test('null x object', async (): Promise<void> => {
        cmp.nes(null, o1).should.equal(false);
      });

      test('null x Object()', async (): Promise<void> => {
        cmp.nes(null, O1).should.equal(false);
      });
    });

    suite('not equal => true', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.nes(o1, empty).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.nes(o1, Empty).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.nes(O1, empty).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.nes(O1, Empty).should.equal(true);
      });
    });
  });

  suite('gt', (): void => {
    suite('greater than => true', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.gt(t2, t1).should.equal(true);
      });

      test('object x empty', async (): Promise<void> => {
        cmp.gt(o1, empty).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.gt(o1, Empty).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.gt(O1, empty).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.gt(O1, Empty).should.equal(true);
      });

      test('falsy x object', async (): Promise<void> => {
        cmp.gt(r1, empty).should.equal(true);
      });
    });

    suite('equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.gt(o1, o2).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.gt(o1, O1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.gt(O1, o1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.gt(O1, O2).should.equal(false);
      });

      test('null x null', async (): Promise<void> => {
        cmp.gt(null, null).should.equal(false);
      });

      test('falsy x falsy', async (): Promise<void> => {
        cmp.gt(r1, r1).should.equal(false);
      });
    });

    suite('not equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.gt(o1, p1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.gt(o1, P1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.gt(O1, p1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.gt(O1, P1).should.equal(false);
      });

      test('object x null', async (): Promise<void> => {
        cmp.gt(o1, null).should.equal(false);
      });

      test('Object() x null', async (): Promise<void> => {
        cmp.gt(O1, null).should.equal(false);
      });

      test('null x object', async (): Promise<void> => {
        cmp.gt(null, o1).should.equal(false);
      });

      test('null x Object()', async (): Promise<void> => {
        cmp.gt(null, O1).should.equal(false);
      });

      test('falsy x falsy', async (): Promise<void> => {
        cmp.gt(r1, r2).should.equal(false);
      });
    });

    suite('less than => false', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.gt(t1, t2).should.equal(false);
      });

      test('empty x object', async (): Promise<void> => {
        cmp.gt(empty, o1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.gt(Empty, o1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.gt(empty, O1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.gt(Empty, O1).should.equal(false);
      });

      test('object x falsy', async (): Promise<void> => {
        cmp.gt(empty, r1).should.equal(false);
      });
    });
  });

  suite('gts', (): void => {
    suite('greater than => true', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.gts(o1, empty).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.gts(o1, Empty).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.gts(O1, empty).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.gts(O1, Empty).should.equal(true);
      });
    });

    suite('equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.gts(o1, o2).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.gts(o1, O1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.gts(O1, o1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.gts(O1, O2).should.equal(false);
      });

      test('null x null', async (): Promise<void> => {
        cmp.gts(null, null).should.equal(false);
      });
    });

    suite('not equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.gts(o1, q1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.gts(o1, Q1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.gts(O1, q1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.gts(O1, Q1).should.equal(false);
      });

      test('object x null', async (): Promise<void> => {
        cmp.gts(o1, null).should.equal(false);
      });

      test('Object() x null', async (): Promise<void> => {
        cmp.gts(O1, null).should.equal(false);
      });
    });

    suite('less than => false', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.gts(empty, o1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.gts(Empty, o1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.gts(empty, O1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.gts(Empty, O1).should.equal(false);
      });

      test('null x object', async (): Promise<void> => {
        cmp.gts(null, o1).should.equal(false);
      });

      test('null x Object()', async (): Promise<void> => {
        cmp.gts(null, O1).should.equal(false);
      });
    });
  });

  suite('gte', (): void => {
    suite('greater than => true', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.gte(t2, t1).should.equal(true);
      });

      test('object x empty', async (): Promise<void> => {
        cmp.gte(o1, empty).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.gte(o1, Empty).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.gte(O1, empty).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.gte(O1, Empty).should.equal(true);
      });

      test('falsy x object', async (): Promise<void> => {
        cmp.gte(r1, empty).should.equal(true);
      });
    });

    suite('equal => true', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.gte(o1, o2).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.gte(o1, O1).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.gte(O1, o1).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.gte(O1, O2).should.equal(true);
      });

      test('null x null', async (): Promise<void> => {
        cmp.gte(null, null).should.equal(true);
      });

      test('falsy x falsy', async (): Promise<void> => {
        cmp.gte(r1, r1).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.gte(o1, p1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.gte(o1, P1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.gte(O1, p1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.gte(O1, P1).should.equal(false);
      });

      test('object x null', async (): Promise<void> => {
        cmp.gte(o1, null).should.equal(false);
      });

      test('Object() x null', async (): Promise<void> => {
        cmp.gte(O1, null).should.equal(false);
      });

      test('null x object', async (): Promise<void> => {
        cmp.gte(null, o1).should.equal(false);
      });

      test('null x Object()', async (): Promise<void> => {
        cmp.gte(null, O1).should.equal(false);
      });

      test('null x falsy', async (): Promise<void> => {
        cmp.gte(null, r1).should.equal(false);
      });

      test('falsy x null', async (): Promise<void> => {
        cmp.gte(r1, null).should.equal(false);
      });

      test('object x falsy', async (): Promise<void> => {
        cmp.gte(o1, r1).should.equal(false);
      });

      test('falsy x object', async (): Promise<void> => {
        cmp.gte(r1, o1).should.equal(false);
      });
    });

    suite('less than => false', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.gte(t1, t2).should.equal(false);
      });

      test('empty x object', async (): Promise<void> => {
        cmp.gte(empty, o1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.gte(Empty, o1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.gte(empty, O1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.gte(Empty, O1).should.equal(false);
      });

      test('object x falsy', async (): Promise<void> => {
        cmp.gte(empty, r1).should.equal(false);
      });
    });
  });

  suite('gtes', (): void => {
    suite('greater than => true', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.gtes(o1, empty).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.gtes(o1, Empty).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.gtes(O1, empty).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.gtes(O1, Empty).should.equal(true);
      });
    });

    suite('equal => true', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.gtes(o1, o2).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.gtes(o1, O1).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.gtes(O1, o1).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.gtes(O1, O2).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.gtes(o1, q1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.gtes(o1, Q1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.gtes(O1, q1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.gtes(O1, Q1).should.equal(false);
      });

      test('object x null', async (): Promise<void> => {
        cmp.gtes(o1, null).should.equal(false);
      });

      test('Object() x null', async (): Promise<void> => {
        cmp.gtes(O1, null).should.equal(false);
      });

      test('null x null', async (): Promise<void> => {
        cmp.gtes(null, null).should.equal(false);
      });
    });

    suite('less than => false', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.gtes(empty, o1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.gtes(Empty, o1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.gtes(empty, O1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.gtes(Empty, O1).should.equal(false);
      });

      test('null x object', async (): Promise<void> => {
        cmp.gtes(null, o1).should.equal(false);
      });

      test('null x Object()', async (): Promise<void> => {
        cmp.gtes(null, O1).should.equal(false);
      });
    });
  });

  suite('lt', (): void => {
    suite('greater than => false', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.lt(t2, t1).should.equal(false);
      });

      test('object x empty', async (): Promise<void> => {
        cmp.lt(o1, empty).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.lt(o1, Empty).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.lt(O1, empty).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.lt(O1, Empty).should.equal(false);
      });

      test('falsy x object', async (): Promise<void> => {
        cmp.lt(r1, empty).should.equal(false);
      });
    });

    suite('equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.lt(o1, o2).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.lt(o1, O1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.lt(O1, o1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.lt(O1, O2).should.equal(false);
      });

      test('null x null', async (): Promise<void> => {
        cmp.lt(null, null).should.equal(false);
      });

      test('falsy x falsy', async (): Promise<void> => {
        cmp.lt(r1, r1).should.equal(false);
      });
    });

    suite('not equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.lt(o1, p1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.lt(o1, P1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.lt(O1, p1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.lt(O1, P1).should.equal(false);
      });

      test('object x null', async (): Promise<void> => {
        cmp.lt(o1, null).should.equal(false);
      });

      test('Object() x null', async (): Promise<void> => {
        cmp.lt(O1, null).should.equal(false);
      });

      test('null x object', async (): Promise<void> => {
        cmp.lt(null, o1).should.equal(false);
      });

      test('null x Object()', async (): Promise<void> => {
        cmp.lt(null, O1).should.equal(false);
      });

      test('falsy x falsy', async (): Promise<void> => {
        cmp.lt(r1, r2).should.equal(false);
      });
    });

    suite('less than => true', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.lt(t1, t2).should.equal(true);
      });

      test('empty x object', async (): Promise<void> => {
        cmp.lt(empty, o1).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.lt(Empty, o1).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.lt(empty, O1).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.lt(Empty, O1).should.equal(true);
      });

      test('object x falsy', async (): Promise<void> => {
        cmp.lt(empty, r1).should.equal(true);
      });
    });
  });

  suite('lts', (): void => {
    suite('greater than => false', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.lts(o1, empty).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.lts(o1, Empty).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.lts(O1, empty).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.lts(O1, Empty).should.equal(false);
      });

      test('object x null', async (): Promise<void> => {
        cmp.lts(o1, null).should.equal(false);
      });

      test('Object() x null', async (): Promise<void> => {
        cmp.lts(O1, null).should.equal(false);
      });
    });

    suite('equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.lts(o1, o2).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.lts(o1, O1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.lts(O1, o1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.lts(O1, O2).should.equal(false);
      });

      test('null x null', async (): Promise<void> => {
        cmp.lts(null, null).should.equal(false);
      });
    });

    suite('not equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.lts(o1, q1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.lts(o1, Q1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.lts(O1, q1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.lts(O1, Q1).should.equal(false);
      });

      test('null x object', async (): Promise<void> => {
        cmp.lts(null, o1).should.equal(false);
      });

      test('null x Object()', async (): Promise<void> => {
        cmp.lts(null, O1).should.equal(false);
      });
    });

    suite('less than => true', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.lts(empty, o1).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.lts(Empty, o1).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.lts(empty, O1).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.lts(Empty, O1).should.equal(true);
      });
    });
  });

  suite('lte', (): void => {
    suite('greater than => false', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.lte(t2, t1).should.equal(false);
      });

      test('object x empty', async (): Promise<void> => {
        cmp.lte(o1, empty).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.lte(o1, Empty).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.lte(O1, empty).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.lte(O1, Empty).should.equal(false);
      });

      test('falsy x object', async (): Promise<void> => {
        cmp.lte(r1, empty).should.equal(false);
      });
    });

    suite('equal => true', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.lte(o1, o2).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.lte(o1, O1).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.lte(O1, o1).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.lte(O1, O2).should.equal(true);
      });

      test('null x null', async (): Promise<void> => {
        cmp.lte(null, null).should.equal(true);
      });

      test('falsy x falsy', async (): Promise<void> => {
        cmp.lte(r1, r1).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.lte(o1, p1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.lte(o1, P1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.lte(O1, p1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.lte(O1, P1).should.equal(false);
      });

      test('object x null', async (): Promise<void> => {
        cmp.lte(o1, null).should.equal(false);
      });

      test('Object() x null', async (): Promise<void> => {
        cmp.lte(O1, null).should.equal(false);
      });

      test('null x object', async (): Promise<void> => {
        cmp.lte(null, o1).should.equal(false);
      });

      test('null x Object()', async (): Promise<void> => {
        cmp.lte(null, O1).should.equal(false);
      });

      test('null x falsy', async (): Promise<void> => {
        cmp.lte(null, r1).should.equal(false);
      });

      test('falsy x null', async (): Promise<void> => {
        cmp.lte(r1, null).should.equal(false);
      });

      test('object x falsy', async (): Promise<void> => {
        cmp.lte(o1, r1).should.equal(false);
      });

      test('falsy x object', async (): Promise<void> => {
        cmp.lte(r1, o1).should.equal(false);
      });
    });

    suite('less than => true', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.lte(t1, t2).should.equal(true);
      });

      test('empty x object', async (): Promise<void> => {
        cmp.lte(empty, o1).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.lte(Empty, o1).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.lte(empty, O1).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.lte(Empty, O1).should.equal(true);
      });

      test('object x falsy', async (): Promise<void> => {
        cmp.lte(empty, r1).should.equal(true);
      });
    });
  });

  suite('ltes', (): void => {
    suite('greater than => false', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.ltes(o1, empty).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.ltes(o1, Empty).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.ltes(O1, empty).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.ltes(O1, Empty).should.equal(false);
      });

      test('object x null', async (): Promise<void> => {
        cmp.ltes(o1, null).should.equal(false);
      });

      test('Object() x null', async (): Promise<void> => {
        cmp.ltes(O1, null).should.equal(false);
      });
    });

    suite('equal => true', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.ltes(o1, o2).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.ltes(o1, O1).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.ltes(O1, o1).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.ltes(O1, O2).should.equal(true);
      });
    });

    suite('not equal => false', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.ltes(o1, q1).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.ltes(o1, Q1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.ltes(O1, q1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.ltes(O1, Q1).should.equal(false);
      });

      test('null x null', async (): Promise<void> => {
        cmp.ltes(null, null).should.equal(false);
      });

      test('null x object', async (): Promise<void> => {
        cmp.ltes(null, o1).should.equal(false);
      });

      test('null x Object()', async (): Promise<void> => {
        cmp.ltes(null, O1).should.equal(false);
      });
    });

    suite('less than => true', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.ltes(empty, o1).should.equal(true);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.ltes(Empty, o1).should.equal(true);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.ltes(empty, O1).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.ltes(Empty, O1).should.equal(true);
      });
    });
  });

  suite('id', (): void => {
    suite('identical => true', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.id(o1, o1).should.equal(true);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.id(O1, O1).should.equal(true);
      });

      test('null x null', async (): Promise<void> => {
        cmp.id(null, null).should.equal(true);
      });

      test('falsy x falsy', async (): Promise<void> => {
        cmp.id(r1, r1).should.equal(true);
      });
    });

    suite('not identical => false', (): void => {
      test('object x object', async (): Promise<void> => {
        cmp.id(o1, o2).should.equal(false);
      });

      test('object x Object()', async (): Promise<void> => {
        cmp.id(o1, O1).should.equal(false);
      });

      test('Object() x object', async (): Promise<void> => {
        cmp.id(O1, o1).should.equal(false);
      });

      test('Object() x Object()', async (): Promise<void> => {
        cmp.id(O1, O2).should.equal(false);
      });

      test('falsy x falsy', async (): Promise<void> => {
        cmp.id(r1, r2).should.equal(false);
      });
    });
  });
});

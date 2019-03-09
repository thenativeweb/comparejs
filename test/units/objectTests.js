'use strict';

/* eslint-disable no-unused-vars */
const should = require('should');
/* eslint-enable no-unused-vars */

const cmp = require('../../src/compare');

suite('object x object', () => {
  /* eslint-disable no-new-object */
  const Empty = new Object(),
        O1 = new Object(),
        O2 = new Object(),
        P1 = new Object(),
        Q1 = new Object();
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

  suite('eq', () => {
    suite('equal => true', () => {
      test('object x object', done => {
        cmp.eq(o1, o2).should.equal(true);
        done();
      });

      test('object x Object()', done => {
        cmp.eq(o1, O1).should.equal(true);
        done();
      });

      test('Object() x object', done => {
        cmp.eq(O1, o1).should.equal(true);
        done();
      });

      test('Object() x Object()', done => {
        cmp.eq(O1, O2).should.equal(true);
        done();
      });

      test('null x null', done => {
        cmp.eq(null, null).should.equal(true);
        done();
      });

      test('falsy x falsy', done => {
        cmp.eq(r1, r2).should.equal(true);
        done();
      });
    });

    suite('not equal => false', () => {
      test('object x object', done => {
        cmp.eq(o1, p1).should.equal(false);
        done();
      });

      test('object x Object()', done => {
        cmp.eq(o1, P1).should.equal(false);
        done();
      });

      test('Object() x object', done => {
        cmp.eq(O1, p1).should.equal(false);
        done();
      });

      test('Object() x Object()', done => {
        cmp.eq(O1, P1).should.equal(false);
        done();
      });

      test('object x null', done => {
        cmp.eq(o1, null).should.equal(false);
        done();
      });

      test('Object() x null', done => {
        cmp.eq(O1, null).should.equal(false);
        done();
      });

      test('null x object', done => {
        cmp.eq(null, o1).should.equal(false);
        done();
      });

      test('null x Object()', done => {
        cmp.eq(null, O1).should.equal(false);
        done();
      });

      test('object x falsy', done => {
        cmp.eq(o1, r1).should.equal(false);
        done();
      });

      test('falsy x object', done => {
        cmp.eq(r1, o1).should.equal(false);
        done();
      });

      test('falsy x falsy', done => {
        cmp.eq(r1, s1).should.equal(false);
        done();
      });

      test('object x empty array', done => {
        cmp.eq(empty, []).should.equal(false);
        done();
      });
    });
  });

  suite('eqs', () => {
    suite('equal => true', () => {
      test('object x object', done => {
        cmp.eqs(o1, p1).should.equal(true);
        done();
      });

      test('object x Object()', done => {
        cmp.eqs(o1, P1).should.equal(true);
        done();
      });

      test('Object() x object', done => {
        cmp.eqs(O1, p1).should.equal(true);
        done();
      });

      test('Object() x Object()', done => {
        cmp.eqs(O1, P1).should.equal(true);
        done();
      });

      test('falsy x falsy', done => {
        cmp.eqs(r1, s1).should.equal(true);
        done();
      });
    });

    suite('not equal => false', () => {
      test('object x object', done => {
        cmp.eqs(o1, empty).should.equal(false);
        done();
      });

      test('object x Object()', done => {
        cmp.eqs(o1, Empty).should.equal(false);
        done();
      });

      test('Object() x object', done => {
        cmp.eqs(O1, empty).should.equal(false);
        done();
      });

      test('Object() x Object()', done => {
        cmp.eqs(O1, Empty).should.equal(false);
        done();
      });

      test('object x null', done => {
        cmp.eqs(o1, null).should.equal(false);
        done();
      });

      test('Object() x null', done => {
        cmp.eqs(O1, null).should.equal(false);
        done();
      });

      test('null x object', done => {
        cmp.eqs(null, o1).should.equal(false);
        done();
      });

      test('null x Object()', done => {
        cmp.eqs(null, O1).should.equal(false);
        done();
      });

      test('null x null', done => {
        cmp.eqs(null, null).should.equal(false);
        done();
      });

      test('object x falsy', done => {
        cmp.eqs(q1, r1).should.equal(false);
        done();
      });

      test('falsy x object', done => {
        cmp.eqs(r1, q1).should.equal(false);
        done();
      });
    });
  });

  suite('ne', () => {
    suite('equal => false', () => {
      test('object x object', done => {
        cmp.ne(o1, o2).should.equal(false);
        done();
      });

      test('object x Object()', done => {
        cmp.ne(o1, O1).should.equal(false);
        done();
      });

      test('Object() x object', done => {
        cmp.ne(O1, o1).should.equal(false);
        done();
      });

      test('Object() x Object()', done => {
        cmp.ne(O1, O2).should.equal(false);
        done();
      });

      test('null x null', done => {
        cmp.ne(null, null).should.equal(false);
        done();
      });

      test('falsy x falsy', done => {
        cmp.ne(r1, r2).should.equal(false);
        done();
      });
    });

    suite('not equal => true', () => {
      test('object x object', done => {
        cmp.ne(o1, p1).should.equal(true);
        done();
      });

      test('object x Object()', done => {
        cmp.ne(o1, P1).should.equal(true);
        done();
      });

      test('Object() x object', done => {
        cmp.ne(O1, p1).should.equal(true);
        done();
      });

      test('Object() x Object()', done => {
        cmp.ne(O1, P1).should.equal(true);
        done();
      });

      test('object x null', done => {
        cmp.ne(o1, null).should.equal(true);
        done();
      });

      test('Object() x null', done => {
        cmp.ne(O1, null).should.equal(true);
        done();
      });

      test('null x object', done => {
        cmp.ne(null, o1).should.equal(true);
        done();
      });

      test('null x Object()', done => {
        cmp.ne(null, O1).should.equal(true);
        done();
      });

      test('falsy x falsy', done => {
        cmp.ne(r1, s1).should.equal(true);
        done();
      });

      test('object x false', done => {
        cmp.ne(o1, r1).should.equal(true);
        done();
      });

      test('falsy x object', done => {
        cmp.ne(r1, o1).should.equal(true);
        done();
      });
    });
  });

  suite('nes', () => {
    suite('equal => false', () => {
      test('object x object', done => {
        cmp.nes(o1, p1).should.equal(false);
        done();
      });

      test('object x Object()', done => {
        cmp.nes(o1, P1).should.equal(false);
        done();
      });

      test('Object() x object', done => {
        cmp.nes(O1, p1).should.equal(false);
        done();
      });

      test('Object() x Object()', done => {
        cmp.nes(O1, P1).should.equal(false);
        done();
      });

      test('null x null', done => {
        cmp.nes(null, null).should.equal(false);
        done();
      });

      test('falsy x falsy', done => {
        cmp.nes(r1, s1).should.equal(false);
        done();
      });

      test('object x false', done => {
        cmp.nes(o1, r1).should.equal(false);
        done();
      });

      test('falsy x object', done => {
        cmp.nes(r1, o1).should.equal(false);
        done();
      });

      test('object x null', done => {
        cmp.nes(o1, null).should.equal(false);
        done();
      });

      test('Object() x null', done => {
        cmp.nes(O1, null).should.equal(false);
        done();
      });

      test('null x object', done => {
        cmp.nes(null, o1).should.equal(false);
        done();
      });

      test('null x Object()', done => {
        cmp.nes(null, O1).should.equal(false);
        done();
      });
    });

    suite('not equal => true', () => {
      test('object x object', done => {
        cmp.nes(o1, empty).should.equal(true);
        done();
      });

      test('object x Object()', done => {
        cmp.nes(o1, Empty).should.equal(true);
        done();
      });

      test('Object() x object', done => {
        cmp.nes(O1, empty).should.equal(true);
        done();
      });

      test('Object() x Object()', done => {
        cmp.nes(O1, Empty).should.equal(true);
        done();
      });
    });
  });

  suite('gt', () => {
    suite('greater than => true', () => {
      test('object x object', done => {
        cmp.gt(t2, t1).should.equal(true);
        done();
      });

      test('object x empty', done => {
        cmp.gt(o1, empty).should.equal(true);
        done();
      });

      test('object x Object()', done => {
        cmp.gt(o1, Empty).should.equal(true);
        done();
      });

      test('Object() x object', done => {
        cmp.gt(O1, empty).should.equal(true);
        done();
      });

      test('Object() x Object()', done => {
        cmp.gt(O1, Empty).should.equal(true);
        done();
      });

      test('falsy x object', done => {
        cmp.gt(r1, empty).should.equal(true);
        done();
      });
    });

    suite('equal => false', () => {
      test('object x object', done => {
        cmp.gt(o1, o2).should.equal(false);
        done();
      });

      test('object x Object()', done => {
        cmp.gt(o1, O1).should.equal(false);
        done();
      });

      test('Object() x object', done => {
        cmp.gt(O1, o1).should.equal(false);
        done();
      });

      test('Object() x Object()', done => {
        cmp.gt(O1, O2).should.equal(false);
        done();
      });

      test('null x null', done => {
        cmp.gt(null, null).should.equal(false);
        done();
      });

      test('falsy x falsy', done => {
        cmp.gt(r1, r1).should.equal(false);
        done();
      });
    });

    suite('not equal => false', () => {
      test('object x object', done => {
        cmp.gt(o1, p1).should.equal(false);
        done();
      });

      test('object x Object()', done => {
        cmp.gt(o1, P1).should.equal(false);
        done();
      });

      test('Object() x object', done => {
        cmp.gt(O1, p1).should.equal(false);
        done();
      });

      test('Object() x Object()', done => {
        cmp.gt(O1, P1).should.equal(false);
        done();
      });

      test('object x null', done => {
        cmp.gt(o1, null).should.equal(false);
        done();
      });

      test('Object() x null', done => {
        cmp.gt(O1, null).should.equal(false);
        done();
      });

      test('null x object', done => {
        cmp.gt(null, o1).should.equal(false);
        done();
      });

      test('null x Object()', done => {
        cmp.gt(null, O1).should.equal(false);
        done();
      });

      test('falsy x falsy', done => {
        cmp.gt(r1, r2).should.equal(false);
        done();
      });
    });

    suite('less than => false', () => {
      test('object x object', done => {
        cmp.gt(t1, t2).should.equal(false);
        done();
      });

      test('empty x object', done => {
        cmp.gt(empty, o1).should.equal(false);
        done();
      });

      test('object x Object()', done => {
        cmp.gt(Empty, o1).should.equal(false);
        done();
      });

      test('Object() x object', done => {
        cmp.gt(empty, O1).should.equal(false);
        done();
      });

      test('Object() x Object()', done => {
        cmp.gt(Empty, O1).should.equal(false);
        done();
      });

      test('object x falsy', done => {
        cmp.gt(empty, r1).should.equal(false);
        done();
      });
    });
  });

  suite('gts', () => {
    suite('greater than => true', () => {
      test('object x object', done => {
        cmp.gts(o1, empty).should.equal(true);
        done();
      });

      test('object x Object()', done => {
        cmp.gts(o1, Empty).should.equal(true);
        done();
      });

      test('Object() x object', done => {
        cmp.gts(O1, empty).should.equal(true);
        done();
      });

      test('Object() x Object()', done => {
        cmp.gts(O1, Empty).should.equal(true);
        done();
      });
    });

    suite('equal => false', () => {
      test('object x object', done => {
        cmp.gts(o1, o2).should.equal(false);
        done();
      });

      test('object x Object()', done => {
        cmp.gts(o1, O1).should.equal(false);
        done();
      });

      test('Object() x object', done => {
        cmp.gts(O1, o1).should.equal(false);
        done();
      });

      test('Object() x Object()', done => {
        cmp.gts(O1, O2).should.equal(false);
        done();
      });

      test('null x null', done => {
        cmp.gts(null, null).should.equal(false);
        done();
      });
    });

    suite('not equal => false', () => {
      test('object x object', done => {
        cmp.gts(o1, q1).should.equal(false);
        done();
      });

      test('object x Object()', done => {
        cmp.gts(o1, Q1).should.equal(false);
        done();
      });

      test('Object() x object', done => {
        cmp.gts(O1, q1).should.equal(false);
        done();
      });

      test('Object() x Object()', done => {
        cmp.gts(O1, Q1).should.equal(false);
        done();
      });

      test('object x null', done => {
        cmp.gts(o1, null).should.equal(false);
        done();
      });

      test('Object() x null', done => {
        cmp.gts(O1, null).should.equal(false);
        done();
      });
    });

    suite('less than => false', () => {
      test('object x object', done => {
        cmp.gts(empty, o1).should.equal(false);
        done();
      });

      test('object x Object()', done => {
        cmp.gts(Empty, o1).should.equal(false);
        done();
      });

      test('Object() x object', done => {
        cmp.gts(empty, O1).should.equal(false);
        done();
      });

      test('Object() x Object()', done => {
        cmp.gts(Empty, O1).should.equal(false);
        done();
      });

      test('null x object', done => {
        cmp.gts(null, o1).should.equal(false);
        done();
      });

      test('null x Object()', done => {
        cmp.gts(null, O1).should.equal(false);
        done();
      });
    });
  });

  suite('gte', () => {
    suite('greater than => true', () => {
      test('object x object', done => {
        cmp.gte(t2, t1).should.equal(true);
        done();
      });

      test('object x empty', done => {
        cmp.gte(o1, empty).should.equal(true);
        done();
      });

      test('object x Object()', done => {
        cmp.gte(o1, Empty).should.equal(true);
        done();
      });

      test('Object() x object', done => {
        cmp.gte(O1, empty).should.equal(true);
        done();
      });

      test('Object() x Object()', done => {
        cmp.gte(O1, Empty).should.equal(true);
        done();
      });

      test('falsy x object', done => {
        cmp.gte(r1, empty).should.equal(true);
        done();
      });
    });

    suite('equal => true', () => {
      test('object x object', done => {
        cmp.gte(o1, o2).should.equal(true);
        done();
      });

      test('object x Object()', done => {
        cmp.gte(o1, O1).should.equal(true);
        done();
      });

      test('Object() x object', done => {
        cmp.gte(O1, o1).should.equal(true);
        done();
      });

      test('Object() x Object()', done => {
        cmp.gte(O1, O2).should.equal(true);
        done();
      });

      test('null x null', done => {
        cmp.gte(null, null).should.equal(true);
        done();
      });

      test('falsy x falsy', done => {
        cmp.gte(r1, r1).should.equal(true);
        done();
      });
    });

    suite('not equal => false', () => {
      test('object x object', done => {
        cmp.gte(o1, p1).should.equal(false);
        done();
      });

      test('object x Object()', done => {
        cmp.gte(o1, P1).should.equal(false);
        done();
      });

      test('Object() x object', done => {
        cmp.gte(O1, p1).should.equal(false);
        done();
      });

      test('Object() x Object()', done => {
        cmp.gte(O1, P1).should.equal(false);
        done();
      });

      test('object x null', done => {
        cmp.gte(o1, null).should.equal(false);
        done();
      });

      test('Object() x null', done => {
        cmp.gte(O1, null).should.equal(false);
        done();
      });

      test('null x object', done => {
        cmp.gte(null, o1).should.equal(false);
        done();
      });

      test('null x Object()', done => {
        cmp.gte(null, O1).should.equal(false);
        done();
      });

      test('null x falsy', done => {
        cmp.gte(null, r1).should.equal(false);
        done();
      });

      test('falsy x null', done => {
        cmp.gte(r1, null).should.equal(false);
        done();
      });

      test('object x falsy', done => {
        cmp.gte(o1, r1).should.equal(false);
        done();
      });

      test('falsy x object', done => {
        cmp.gte(r1, o1).should.equal(false);
        done();
      });
    });

    suite('less than => false', () => {
      test('object x object', done => {
        cmp.gte(t1, t2).should.equal(false);
        done();
      });

      test('empty x object', done => {
        cmp.gte(empty, o1).should.equal(false);
        done();
      });

      test('object x Object()', done => {
        cmp.gte(Empty, o1).should.equal(false);
        done();
      });

      test('Object() x object', done => {
        cmp.gte(empty, O1).should.equal(false);
        done();
      });

      test('Object() x Object()', done => {
        cmp.gte(Empty, O1).should.equal(false);
        done();
      });

      test('object x falsy', done => {
        cmp.gte(empty, r1).should.equal(false);
        done();
      });
    });
  });

  suite('gtes', () => {
    suite('greater than => true', () => {
      test('object x object', done => {
        cmp.gtes(o1, empty).should.equal(true);
        done();
      });

      test('object x Object()', done => {
        cmp.gtes(o1, Empty).should.equal(true);
        done();
      });

      test('Object() x object', done => {
        cmp.gtes(O1, empty).should.equal(true);
        done();
      });

      test('Object() x Object()', done => {
        cmp.gtes(O1, Empty).should.equal(true);
        done();
      });
    });

    suite('equal => true', () => {
      test('object x object', done => {
        cmp.gtes(o1, o2).should.equal(true);
        done();
      });

      test('object x Object()', done => {
        cmp.gtes(o1, O1).should.equal(true);
        done();
      });

      test('Object() x object', done => {
        cmp.gtes(O1, o1).should.equal(true);
        done();
      });

      test('Object() x Object()', done => {
        cmp.gtes(O1, O2).should.equal(true);
        done();
      });
    });

    suite('not equal => false', () => {
      test('object x object', done => {
        cmp.gtes(o1, q1).should.equal(false);
        done();
      });

      test('object x Object()', done => {
        cmp.gtes(o1, Q1).should.equal(false);
        done();
      });

      test('Object() x object', done => {
        cmp.gtes(O1, q1).should.equal(false);
        done();
      });

      test('Object() x Object()', done => {
        cmp.gtes(O1, Q1).should.equal(false);
        done();
      });

      test('object x null', done => {
        cmp.gtes(o1, null).should.equal(false);
        done();
      });

      test('Object() x null', done => {
        cmp.gtes(O1, null).should.equal(false);
        done();
      });

      test('null x null', done => {
        cmp.gtes(null, null).should.equal(false);
        done();
      });
    });

    suite('less than => false', () => {
      test('object x object', done => {
        cmp.gtes(empty, o1).should.equal(false);
        done();
      });

      test('object x Object()', done => {
        cmp.gtes(Empty, o1).should.equal(false);
        done();
      });

      test('Object() x object', done => {
        cmp.gtes(empty, O1).should.equal(false);
        done();
      });

      test('Object() x Object()', done => {
        cmp.gtes(Empty, O1).should.equal(false);
        done();
      });

      test('null x object', done => {
        cmp.gtes(null, o1).should.equal(false);
        done();
      });

      test('null x Object()', done => {
        cmp.gtes(null, O1).should.equal(false);
        done();
      });
    });
  });

  suite('lt', () => {
    suite('greater than => false', () => {
      test('object x object', done => {
        cmp.lt(t2, t1).should.equal(false);
        done();
      });

      test('object x empty', done => {
        cmp.lt(o1, empty).should.equal(false);
        done();
      });

      test('object x Object()', done => {
        cmp.lt(o1, Empty).should.equal(false);
        done();
      });

      test('Object() x object', done => {
        cmp.lt(O1, empty).should.equal(false);
        done();
      });

      test('Object() x Object()', done => {
        cmp.lt(O1, Empty).should.equal(false);
        done();
      });

      test('falsy x object', done => {
        cmp.lt(r1, empty).should.equal(false);
        done();
      });
    });

    suite('equal => false', () => {
      test('object x object', done => {
        cmp.lt(o1, o2).should.equal(false);
        done();
      });

      test('object x Object()', done => {
        cmp.lt(o1, O1).should.equal(false);
        done();
      });

      test('Object() x object', done => {
        cmp.lt(O1, o1).should.equal(false);
        done();
      });

      test('Object() x Object()', done => {
        cmp.lt(O1, O2).should.equal(false);
        done();
      });

      test('null x null', done => {
        cmp.lt(null, null).should.equal(false);
        done();
      });

      test('falsy x falsy', done => {
        cmp.lt(r1, r1).should.equal(false);
        done();
      });
    });

    suite('not equal => false', () => {
      test('object x object', done => {
        cmp.lt(o1, p1).should.equal(false);
        done();
      });

      test('object x Object()', done => {
        cmp.lt(o1, P1).should.equal(false);
        done();
      });

      test('Object() x object', done => {
        cmp.lt(O1, p1).should.equal(false);
        done();
      });

      test('Object() x Object()', done => {
        cmp.lt(O1, P1).should.equal(false);
        done();
      });

      test('object x null', done => {
        cmp.lt(o1, null).should.equal(false);
        done();
      });

      test('Object() x null', done => {
        cmp.lt(O1, null).should.equal(false);
        done();
      });

      test('null x object', done => {
        cmp.lt(null, o1).should.equal(false);
        done();
      });

      test('null x Object()', done => {
        cmp.lt(null, O1).should.equal(false);
        done();
      });

      test('falsy x falsy', done => {
        cmp.lt(r1, r2).should.equal(false);
        done();
      });
    });

    suite('less than => true', () => {
      test('object x object', done => {
        cmp.lt(t1, t2).should.equal(true);
        done();
      });

      test('empty x object', done => {
        cmp.lt(empty, o1).should.equal(true);
        done();
      });

      test('object x Object()', done => {
        cmp.lt(Empty, o1).should.equal(true);
        done();
      });

      test('Object() x object', done => {
        cmp.lt(empty, O1).should.equal(true);
        done();
      });

      test('Object() x Object()', done => {
        cmp.lt(Empty, O1).should.equal(true);
        done();
      });

      test('object x falsy', done => {
        cmp.lt(empty, r1).should.equal(true);
        done();
      });
    });
  });

  suite('lts', () => {
    suite('greater than => false', () => {
      test('object x object', done => {
        cmp.lts(o1, empty).should.equal(false);
        done();
      });

      test('object x Object()', done => {
        cmp.lts(o1, Empty).should.equal(false);
        done();
      });

      test('Object() x object', done => {
        cmp.lts(O1, empty).should.equal(false);
        done();
      });

      test('Object() x Object()', done => {
        cmp.lts(O1, Empty).should.equal(false);
        done();
      });

      test('object x null', done => {
        cmp.lts(o1, null).should.equal(false);
        done();
      });

      test('Object() x null', done => {
        cmp.lts(O1, null).should.equal(false);
        done();
      });
    });

    suite('equal => false', () => {
      test('object x object', done => {
        cmp.lts(o1, o2).should.equal(false);
        done();
      });

      test('object x Object()', done => {
        cmp.lts(o1, O1).should.equal(false);
        done();
      });

      test('Object() x object', done => {
        cmp.lts(O1, o1).should.equal(false);
        done();
      });

      test('Object() x Object()', done => {
        cmp.lts(O1, O2).should.equal(false);
        done();
      });

      test('null x null', done => {
        cmp.lts(null, null).should.equal(false);
        done();
      });
    });

    suite('not equal => false', () => {
      test('object x object', done => {
        cmp.lts(o1, q1).should.equal(false);
        done();
      });

      test('object x Object()', done => {
        cmp.lts(o1, Q1).should.equal(false);
        done();
      });

      test('Object() x object', done => {
        cmp.lts(O1, q1).should.equal(false);
        done();
      });

      test('Object() x Object()', done => {
        cmp.lts(O1, Q1).should.equal(false);
        done();
      });

      test('null x object', done => {
        cmp.lts(null, o1).should.equal(false);
        done();
      });

      test('null x Object()', done => {
        cmp.lts(null, O1).should.equal(false);
        done();
      });
    });

    suite('less than => true', () => {
      test('object x object', done => {
        cmp.lts(empty, o1).should.equal(true);
        done();
      });

      test('object x Object()', done => {
        cmp.lts(Empty, o1).should.equal(true);
        done();
      });

      test('Object() x object', done => {
        cmp.lts(empty, O1).should.equal(true);
        done();
      });

      test('Object() x Object()', done => {
        cmp.lts(Empty, O1).should.equal(true);
        done();
      });
    });
  });

  suite('lte', () => {
    suite('greater than => false', () => {
      test('object x object', done => {
        cmp.lte(t2, t1).should.equal(false);
        done();
      });

      test('object x empty', done => {
        cmp.lte(o1, empty).should.equal(false);
        done();
      });

      test('object x Object()', done => {
        cmp.lte(o1, Empty).should.equal(false);
        done();
      });

      test('Object() x object', done => {
        cmp.lte(O1, empty).should.equal(false);
        done();
      });

      test('Object() x Object()', done => {
        cmp.lte(O1, Empty).should.equal(false);
        done();
      });

      test('falsy x object', done => {
        cmp.lte(r1, empty).should.equal(false);
        done();
      });
    });

    suite('equal => true', () => {
      test('object x object', done => {
        cmp.lte(o1, o2).should.equal(true);
        done();
      });

      test('object x Object()', done => {
        cmp.lte(o1, O1).should.equal(true);
        done();
      });

      test('Object() x object', done => {
        cmp.lte(O1, o1).should.equal(true);
        done();
      });

      test('Object() x Object()', done => {
        cmp.lte(O1, O2).should.equal(true);
        done();
      });

      test('null x null', done => {
        cmp.lte(null, null).should.equal(true);
        done();
      });

      test('falsy x falsy', done => {
        cmp.lte(r1, r1).should.equal(true);
        done();
      });
    });

    suite('not equal => false', () => {
      test('object x object', done => {
        cmp.lte(o1, p1).should.equal(false);
        done();
      });

      test('object x Object()', done => {
        cmp.lte(o1, P1).should.equal(false);
        done();
      });

      test('Object() x object', done => {
        cmp.lte(O1, p1).should.equal(false);
        done();
      });

      test('Object() x Object()', done => {
        cmp.lte(O1, P1).should.equal(false);
        done();
      });

      test('object x null', done => {
        cmp.lte(o1, null).should.equal(false);
        done();
      });

      test('Object() x null', done => {
        cmp.lte(O1, null).should.equal(false);
        done();
      });

      test('null x object', done => {
        cmp.lte(null, o1).should.equal(false);
        done();
      });

      test('null x Object()', done => {
        cmp.lte(null, O1).should.equal(false);
        done();
      });

      test('null x falsy', done => {
        cmp.lte(null, r1).should.equal(false);
        done();
      });

      test('falsy x null', done => {
        cmp.lte(r1, null).should.equal(false);
        done();
      });

      test('object x falsy', done => {
        cmp.lte(o1, r1).should.equal(false);
        done();
      });

      test('falsy x object', done => {
        cmp.lte(r1, o1).should.equal(false);
        done();
      });
    });

    suite('less than => true', () => {
      test('object x object', done => {
        cmp.lte(t1, t2).should.equal(true);
        done();
      });

      test('empty x object', done => {
        cmp.lte(empty, o1).should.equal(true);
        done();
      });

      test('object x Object()', done => {
        cmp.lte(Empty, o1).should.equal(true);
        done();
      });

      test('Object() x object', done => {
        cmp.lte(empty, O1).should.equal(true);
        done();
      });

      test('Object() x Object()', done => {
        cmp.lte(Empty, O1).should.equal(true);
        done();
      });

      test('object x falsy', done => {
        cmp.lte(empty, r1).should.equal(true);
        done();
      });
    });
  });

  suite('ltes', () => {
    suite('greater than => false', () => {
      test('object x object', done => {
        cmp.ltes(o1, empty).should.equal(false);
        done();
      });

      test('object x Object()', done => {
        cmp.ltes(o1, Empty).should.equal(false);
        done();
      });

      test('Object() x object', done => {
        cmp.ltes(O1, empty).should.equal(false);
        done();
      });

      test('Object() x Object()', done => {
        cmp.ltes(O1, Empty).should.equal(false);
        done();
      });

      test('object x null', done => {
        cmp.ltes(o1, null).should.equal(false);
        done();
      });

      test('Object() x null', done => {
        cmp.ltes(O1, null).should.equal(false);
        done();
      });
    });

    suite('equal => true', () => {
      test('object x object', done => {
        cmp.ltes(o1, o2).should.equal(true);
        done();
      });

      test('object x Object()', done => {
        cmp.ltes(o1, O1).should.equal(true);
        done();
      });

      test('Object() x object', done => {
        cmp.ltes(O1, o1).should.equal(true);
        done();
      });

      test('Object() x Object()', done => {
        cmp.ltes(O1, O2).should.equal(true);
        done();
      });
    });

    suite('not equal => false', () => {
      test('object x object', done => {
        cmp.ltes(o1, q1).should.equal(false);
        done();
      });

      test('object x Object()', done => {
        cmp.ltes(o1, Q1).should.equal(false);
        done();
      });

      test('Object() x object', done => {
        cmp.ltes(O1, q1).should.equal(false);
        done();
      });

      test('Object() x Object()', done => {
        cmp.ltes(O1, Q1).should.equal(false);
        done();
      });

      test('null x null', done => {
        cmp.ltes(null, null).should.equal(false);
        done();
      });

      test('null x object', done => {
        cmp.ltes(null, o1).should.equal(false);
        done();
      });

      test('null x Object()', done => {
        cmp.ltes(null, O1).should.equal(false);
        done();
      });
    });

    suite('less than => true', () => {
      test('object x object', done => {
        cmp.ltes(empty, o1).should.equal(true);
        done();
      });

      test('object x Object()', done => {
        cmp.ltes(Empty, o1).should.equal(true);
        done();
      });

      test('Object() x object', done => {
        cmp.ltes(empty, O1).should.equal(true);
        done();
      });

      test('Object() x Object()', done => {
        cmp.ltes(Empty, O1).should.equal(true);
        done();
      });
    });
  });

  suite('id', () => {
    suite('identical => true', () => {
      test('object x object', done => {
        cmp.id(o1, o1).should.equal(true);
        done();
      });

      test('Object() x Object()', done => {
        cmp.id(O1, O1).should.equal(true);
        done();
      });

      test('null x null', done => {
        cmp.id(null, null).should.equal(true);
        done();
      });

      test('falsy x falsy', done => {
        cmp.id(r1, r1).should.equal(true);
        done();
      });
    });

    suite('not identical => false', () => {
      test('object x object', done => {
        cmp.id(o1, o2).should.equal(false);
        done();
      });

      test('object x Object()', done => {
        cmp.id(o1, O1).should.equal(false);
        done();
      });

      test('Object() x object', done => {
        cmp.id(O1, o1).should.equal(false);
        done();
      });

      test('Object() x Object()', done => {
        cmp.id(O1, O2).should.equal(false);
        done();
      });

      test('falsy x falsy', done => {
        cmp.id(r1, r2).should.equal(false);
        done();
      });
    });
  });
});

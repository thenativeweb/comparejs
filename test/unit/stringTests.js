'use strict';

/* eslint-disable no-unused-vars */
const should = require('should');
/* eslint-enable no-unused-vars */

const cmp = require('../../lib/compare');

suite('string x string', () => {
  /* eslint-disable no-new-wrappers, unicorn/new-for-builtins */
  const Bar = new String('bar'),
        Empty = new String(''),
        Foo = new String('foo');
  /* eslint-enable no-new-wrappers, unicorn/new-for-builtins */

  const bar = 'bar',
        empty = '',
        foo = 'foo';

  suite('eq', () => {
    suite('equal => true', () => {
      test('string x string', done => {
        cmp.eq(foo, foo).should.equal(true);
        done();
      });

      test('string x String()', done => {
        cmp.eq(foo, Foo).should.equal(true);
        done();
      });

      test('String() x string', done => {
        cmp.eq(Foo, foo).should.equal(true);
        done();
      });

      test('String() x String()', done => {
        cmp.eq(Foo, Foo).should.equal(true);
        done();
      });

      test('empty x empty', done => {
        cmp.eq(empty, empty).should.equal(true);
        done();
      });

      test('empty x Empty()', done => {
        cmp.eq(empty, Empty).should.equal(true);
        done();
      });

      test('Empty() x empty', done => {
        cmp.eq(Empty, empty).should.equal(true);
        done();
      });

      test('Empty() x Empty()', done => {
        cmp.eq(Empty, Empty).should.equal(true);
        done();
      });
    });

    suite('not equal => false', () => {
      test('string x string', done => {
        cmp.eq(foo, bar).should.equal(false);
        done();
      });

      test('string x String()', done => {
        cmp.eq(foo, Bar).should.equal(false);
        done();
      });

      test('String() x string', done => {
        cmp.eq(Foo, bar).should.equal(false);
        done();
      });

      test('String() x String()', done => {
        cmp.eq(Foo, Bar).should.equal(false);
        done();
      });

      test('string x empty', done => {
        cmp.eq(foo, empty).should.equal(false);
        done();
      });

      test('string x Empty()', done => {
        cmp.eq(foo, Empty).should.equal(false);
        done();
      });

      test('String() x empty', done => {
        cmp.eq(Foo, empty).should.equal(false);
        done();
      });

      test('String() x Empty()', done => {
        cmp.eq(Foo, Empty).should.equal(false);
        done();
      });

      test('empty x string', done => {
        cmp.eq(empty, foo).should.equal(false);
        done();
      });

      test('empty x String()', done => {
        cmp.eq(empty, Foo).should.equal(false);
        done();
      });

      test('Empty() x string', done => {
        cmp.eq(Empty, foo).should.equal(false);
        done();
      });

      test('Empty() x String()', done => {
        cmp.eq(Empty, Foo).should.equal(false);
        done();
      });
    });
  });

  suite('eqs', () => {
    suite('any => false', () => {
      test('string x string', done => {
        cmp.eqs(foo, foo).should.equal(false);
        done();
      });
    });
  });

  suite('ne', () => {
    suite('equal => false', () => {
      test('string x string', done => {
        cmp.ne(foo, foo).should.equal(false);
        done();
      });

      test('string x String()', done => {
        cmp.ne(foo, Foo).should.equal(false);
        done();
      });

      test('String() x string', done => {
        cmp.ne(Foo, foo).should.equal(false);
        done();
      });

      test('String() x String()', done => {
        cmp.ne(Foo, Foo).should.equal(false);
        done();
      });

      test('empty x empty', done => {
        cmp.ne(empty, empty).should.equal(false);
        done();
      });

      test('empty x Empty()', done => {
        cmp.ne(empty, Empty).should.equal(false);
        done();
      });

      test('Empty() x empty', done => {
        cmp.ne(Empty, empty).should.equal(false);
        done();
      });

      test('Empty() x Empty()', done => {
        cmp.ne(Empty, Empty).should.equal(false);
        done();
      });
    });

    suite('not equal => true', () => {
      test('string x string', done => {
        cmp.ne(foo, bar).should.equal(true);
        done();
      });

      test('string x String()', done => {
        cmp.ne(foo, Bar).should.equal(true);
        done();
      });

      test('String() x string', done => {
        cmp.ne(Foo, bar).should.equal(true);
        done();
      });

      test('String() x String()', done => {
        cmp.ne(Foo, Bar).should.equal(true);
        done();
      });

      test('string x empty', done => {
        cmp.ne(foo, empty).should.equal(true);
        done();
      });

      test('string x Empty()', done => {
        cmp.ne(foo, Empty).should.equal(true);
        done();
      });

      test('String() x empty', done => {
        cmp.ne(Foo, empty).should.equal(true);
        done();
      });

      test('String() x Empty()', done => {
        cmp.ne(Foo, Empty).should.equal(true);
        done();
      });

      test('empty x string', done => {
        cmp.ne(empty, foo).should.equal(true);
        done();
      });

      test('empty x String()', done => {
        cmp.ne(empty, Foo).should.equal(true);
        done();
      });

      test('Empty() x string', done => {
        cmp.ne(Empty, foo).should.equal(true);
        done();
      });

      test('Empty() x String()', done => {
        cmp.ne(Empty, Foo).should.equal(true);
        done();
      });
    });
  });

  suite('nes', () => {
    suite('any => false', () => {
      test('string x string', done => {
        cmp.nes(foo, foo).should.equal(false);
        done();
      });
    });
  });

  suite('gt', () => {
    suite('greater => true', () => {
      test('string x string', done => {
        cmp.gt(foo, bar).should.equal(true);
        done();
      });

      test('string x String()', done => {
        cmp.gt(foo, Bar).should.equal(true);
        done();
      });

      test('String() x string', done => {
        cmp.gt(Foo, bar).should.equal(true);
        done();
      });

      test('String() x String()', done => {
        cmp.gt(Foo, Bar).should.equal(true);
        done();
      });

      test('string x empty', done => {
        cmp.gt(foo, empty).should.equal(true);
        done();
      });

      test('string x Empty()', done => {
        cmp.gt(foo, Empty).should.equal(true);
        done();
      });

      test('String() x empty', done => {
        cmp.gt(Foo, empty).should.equal(true);
        done();
      });

      test('String() x Empty()', done => {
        cmp.gt(Foo, Empty).should.equal(true);
        done();
      });
    });

    suite('equal => false', () => {
      test('string x string', done => {
        cmp.gt(foo, foo).should.equal(false);
        done();
      });

      test('string x String()', done => {
        cmp.gt(foo, Foo).should.equal(false);
        done();
      });

      test('String() x string', done => {
        cmp.gt(Foo, foo).should.equal(false);
        done();
      });

      test('String() x String()', done => {
        cmp.gt(Foo, Foo).should.equal(false);
        done();
      });

      test('empty x empty', done => {
        cmp.gt(empty, empty).should.equal(false);
        done();
      });

      test('empty x Empty()', done => {
        cmp.gt(empty, Empty).should.equal(false);
        done();
      });

      test('Empty() x empty', done => {
        cmp.gt(Empty, empty).should.equal(false);
        done();
      });

      test('Empty() x Empty()', done => {
        cmp.gt(Empty, Empty).should.equal(false);
        done();
      });
    });

    suite('less => false', () => {
      test('string x string', done => {
        cmp.gt(bar, foo).should.equal(false);
        done();
      });

      test('string x String()', done => {
        cmp.gt(bar, Foo).should.equal(false);
        done();
      });

      test('String() x string', done => {
        cmp.gt(Bar, foo).should.equal(false);
        done();
      });

      test('String() x String()', done => {
        cmp.gt(Bar, Foo).should.equal(false);
        done();
      });

      test('empty x string', done => {
        cmp.gt(empty, foo).should.equal(false);
        done();
      });

      test('empty x String()', done => {
        cmp.gt(empty, Foo).should.equal(false);
        done();
      });

      test('Empty() x string', done => {
        cmp.gt(Empty, foo).should.equal(false);
        done();
      });

      test('Empty() x String()', done => {
        cmp.gt(Empty, Foo).should.equal(false);
        done();
      });
    });
  });

  suite('gts', () => {
    suite('any => false', () => {
      test('string x string', done => {
        cmp.gts(foo, foo).should.equal(false);
        done();
      });
    });
  });

  suite('gte', () => {
    suite('greater => true', () => {
      test('string x string', done => {
        cmp.gte(foo, bar).should.equal(true);
        done();
      });

      test('string x String()', done => {
        cmp.gte(foo, Bar).should.equal(true);
        done();
      });

      test('String() x string', done => {
        cmp.gte(Foo, bar).should.equal(true);
        done();
      });

      test('String() x String()', done => {
        cmp.gte(Foo, Bar).should.equal(true);
        done();
      });

      test('string x empty', done => {
        cmp.gte(foo, empty).should.equal(true);
        done();
      });

      test('string x Empty()', done => {
        cmp.gte(foo, Empty).should.equal(true);
        done();
      });

      test('String() x empty', done => {
        cmp.gte(Foo, empty).should.equal(true);
        done();
      });

      test('String() x Empty()', done => {
        cmp.gte(Foo, Empty).should.equal(true);
        done();
      });
    });

    suite('equal => true', () => {
      test('string x string', done => {
        cmp.gte(foo, foo).should.equal(true);
        done();
      });

      test('string x String()', done => {
        cmp.gte(foo, Foo).should.equal(true);
        done();
      });

      test('String() x string', done => {
        cmp.gte(Foo, foo).should.equal(true);
        done();
      });

      test('String() x String()', done => {
        cmp.gte(Foo, Foo).should.equal(true);
        done();
      });

      test('empty x empty', done => {
        cmp.gte(empty, empty).should.equal(true);
        done();
      });

      test('empty x Empty()', done => {
        cmp.gte(empty, Empty).should.equal(true);
        done();
      });

      test('Empty() x empty', done => {
        cmp.gte(Empty, empty).should.equal(true);
        done();
      });

      test('Empty() x Empty()', done => {
        cmp.gte(Empty, Empty).should.equal(true);
        done();
      });
    });

    suite('less => false', () => {
      test('string x string', done => {
        cmp.gte(bar, foo).should.equal(false);
        done();
      });

      test('string x String()', done => {
        cmp.gte(bar, Foo).should.equal(false);
        done();
      });

      test('String() x string', done => {
        cmp.gte(Bar, foo).should.equal(false);
        done();
      });

      test('String() x String()', done => {
        cmp.gte(Bar, Foo).should.equal(false);
        done();
      });

      test('empty x string', done => {
        cmp.gte(empty, foo).should.equal(false);
        done();
      });

      test('empty x String()', done => {
        cmp.gte(empty, Foo).should.equal(false);
        done();
      });

      test('Empty() x string', done => {
        cmp.gte(Empty, foo).should.equal(false);
        done();
      });

      test('Empty() x String()', done => {
        cmp.gte(Empty, Foo).should.equal(false);
        done();
      });
    });
  });

  suite('gtes', () => {
    suite('any => false', () => {
      test('string x string', done => {
        cmp.gtes(foo, foo).should.equal(false);
        done();
      });
    });
  });

  suite('lt', () => {
    suite('greater => false', () => {
      test('string x string', done => {
        cmp.lt(foo, bar).should.equal(false);
        done();
      });

      test('string x String()', done => {
        cmp.lt(foo, Bar).should.equal(false);
        done();
      });

      test('String() x string', done => {
        cmp.lt(Foo, bar).should.equal(false);
        done();
      });

      test('String() x String()', done => {
        cmp.lt(Foo, Bar).should.equal(false);
        done();
      });

      test('string x empty', done => {
        cmp.lt(foo, empty).should.equal(false);
        done();
      });

      test('string x Empty()', done => {
        cmp.lt(foo, Empty).should.equal(false);
        done();
      });

      test('String() x empty', done => {
        cmp.lt(Foo, empty).should.equal(false);
        done();
      });

      test('String() x Empty()', done => {
        cmp.lt(Foo, Empty).should.equal(false);
        done();
      });
    });

    suite('equal => false', () => {
      test('string x string', done => {
        cmp.lt(foo, foo).should.equal(false);
        done();
      });

      test('string x String()', done => {
        cmp.lt(foo, Foo).should.equal(false);
        done();
      });

      test('String() x string', done => {
        cmp.lt(Foo, foo).should.equal(false);
        done();
      });

      test('String() x String()', done => {
        cmp.lt(Foo, Foo).should.equal(false);
        done();
      });

      test('empty x empty', done => {
        cmp.lt(empty, empty).should.equal(false);
        done();
      });

      test('empty x Empty()', done => {
        cmp.lt(empty, Empty).should.equal(false);
        done();
      });

      test('Empty() x empty', done => {
        cmp.lt(Empty, empty).should.equal(false);
        done();
      });

      test('Empty() x Empty()', done => {
        cmp.lt(Empty, Empty).should.equal(false);
        done();
      });
    });

    suite('less => true', () => {
      test('string x string', done => {
        cmp.lt(bar, foo).should.equal(true);
        done();
      });

      test('string x String()', done => {
        cmp.lt(bar, Foo).should.equal(true);
        done();
      });

      test('String() x string', done => {
        cmp.lt(Bar, foo).should.equal(true);
        done();
      });

      test('String() x String()', done => {
        cmp.lt(Bar, Foo).should.equal(true);
        done();
      });

      test('empty x string', done => {
        cmp.lt(empty, foo).should.equal(true);
        done();
      });

      test('empty x String()', done => {
        cmp.lt(empty, Foo).should.equal(true);
        done();
      });

      test('Empty() x string', done => {
        cmp.lt(Empty, foo).should.equal(true);
        done();
      });

      test('Empty() x String()', done => {
        cmp.lt(Empty, Foo).should.equal(true);
        done();
      });
    });
  });

  suite('lts', () => {
    suite('any => false', () => {
      test('string x string', done => {
        cmp.lts(foo, foo).should.equal(false);
        done();
      });
    });
  });

  suite('lte', () => {
    suite('greater => false', () => {
      test('string x string', done => {
        cmp.lte(foo, bar).should.equal(false);
        done();
      });

      test('string x String()', done => {
        cmp.lte(foo, Bar).should.equal(false);
        done();
      });

      test('String() x string', done => {
        cmp.lte(Foo, bar).should.equal(false);
        done();
      });

      test('String() x String()', done => {
        cmp.lte(Foo, Bar).should.equal(false);
        done();
      });

      test('string x empty', done => {
        cmp.lte(foo, empty).should.equal(false);
        done();
      });

      test('string x Empty()', done => {
        cmp.lte(foo, Empty).should.equal(false);
        done();
      });

      test('String() x empty', done => {
        cmp.lte(Foo, empty).should.equal(false);
        done();
      });

      test('String() x Empty()', done => {
        cmp.lte(Foo, Empty).should.equal(false);
        done();
      });
    });

    suite('equal => true', () => {
      test('string x string', done => {
        cmp.lte(foo, foo).should.equal(true);
        done();
      });

      test('string x String()', done => {
        cmp.lte(foo, Foo).should.equal(true);
        done();
      });

      test('String() x string', done => {
        cmp.lte(Foo, foo).should.equal(true);
        done();
      });

      test('String() x String()', done => {
        cmp.lte(Foo, Foo).should.equal(true);
        done();
      });

      test('empty x empty', done => {
        cmp.lte(empty, empty).should.equal(true);
        done();
      });

      test('empty x Empty()', done => {
        cmp.lte(empty, Empty).should.equal(true);
        done();
      });

      test('Empty() x empty', done => {
        cmp.lte(Empty, empty).should.equal(true);
        done();
      });

      test('Empty() x Empty()', done => {
        cmp.lte(Empty, Empty).should.equal(true);
        done();
      });
    });

    suite('less => true', () => {
      test('string x string', done => {
        cmp.lte(bar, foo).should.equal(true);
        done();
      });

      test('string x String()', done => {
        cmp.lte(bar, Foo).should.equal(true);
        done();
      });

      test('String() x string', done => {
        cmp.lte(Bar, foo).should.equal(true);
        done();
      });

      test('String() x String()', done => {
        cmp.lte(Bar, Foo).should.equal(true);
        done();
      });

      test('empty x string', done => {
        cmp.lte(empty, foo).should.equal(true);
        done();
      });

      test('empty x String()', done => {
        cmp.lte(empty, Foo).should.equal(true);
        done();
      });

      test('Empty() x string', done => {
        cmp.lte(Empty, foo).should.equal(true);
        done();
      });

      test('Empty() x String()', done => {
        cmp.lte(Empty, Foo).should.equal(true);
        done();
      });
    });
  });

  suite('ltes', () => {
    suite('any => false', () => {
      test('string x string', done => {
        cmp.ltes(foo, foo).should.equal(false);
        done();
      });
    });
  });

  suite('id', () => {
    suite('identical => true', () => {
      test('string x string', done => {
        cmp.id(foo, foo).should.equal(true);
        done();
      });

      test('String() x String()', done => {
        cmp.id(Foo, Foo).should.equal(true);
        done();
      });

      test('empty x empty', done => {
        cmp.id(empty, empty).should.equal(true);
        done();
      });

      test('Empty() x Empty()', done => {
        cmp.id(Empty, Empty).should.equal(true);
        done();
      });
    });

    suite('not identical => false', () => {
      test('string x string', done => {
        cmp.id(foo, bar).should.equal(false);
        done();
      });

      test('string x String()', done => {
        cmp.id(foo, Foo).should.equal(false);
        done();
      });

      test('String() x string', done => {
        cmp.id(Foo, foo).should.equal(false);
        done();
      });

      test('String() x String()', done => {
        cmp.id(Foo, Bar).should.equal(false);
        done();
      });

      test('string x empty', done => {
        cmp.id(foo, empty).should.equal(false);
        done();
      });

      test('string x Empty()', done => {
        cmp.id(foo, Empty).should.equal(false);
        done();
      });

      test('String() x empty', done => {
        cmp.id(Foo, empty).should.equal(false);
        done();
      });

      test('String() x Empty()', done => {
        cmp.id(Foo, Empty).should.equal(false);
        done();
      });

      test('empty x string', done => {
        cmp.id(empty, foo).should.equal(false);
        done();
      });

      test('empty x String()', done => {
        cmp.id(empty, Foo).should.equal(false);
        done();
      });

      test('Empty() x string', done => {
        cmp.id(Empty, foo).should.equal(false);
        done();
      });

      test('Empty() x String()', done => {
        cmp.id(Empty, Foo).should.equal(false);
        done();
      });

      test('empty x Empty()', done => {
        cmp.id(empty, Empty).should.equal(false);
        done();
      });

      test('Empty() x empty', done => {
        cmp.id(Empty, empty).should.equal(false);
        done();
      });
    });
  });
});

'use strict';

/*eslint-disable no-unused-vars*/
var should = require('should');
/*eslint-enable no-unused-vars*/

var cmp = require('../lib/compare');

suite('string x string', function () {
  /*eslint-disable no-new-wrappers*/
  var Bar = new String('bar'),
      Empty = new String(''),
      Foo = new String('foo');
  /*eslint-enable no-new-wrappers*/

  var bar = 'bar',
      empty = '',
      foo = 'foo';

  suite('eq', function () {
    suite('equal => true', function () {
      test('string x string', function (done) {
        cmp.eq(foo, foo).should.equal(true);
        done();
      });

      test('string x String()', function (done) {
        cmp.eq(foo, Foo).should.equal(true);
        done();
      });

      test('String() x string', function (done) {
        cmp.eq(Foo, foo).should.equal(true);
        done();
      });

      test('String() x String()', function (done) {
        cmp.eq(Foo, Foo).should.equal(true);
        done();
      });

      test('empty x empty', function (done) {
        cmp.eq(empty, empty).should.equal(true);
        done();
      });

      test('empty x Empty()', function (done) {
        cmp.eq(empty, Empty).should.equal(true);
        done();
      });

      test('Empty() x empty', function (done) {
        cmp.eq(Empty, empty).should.equal(true);
        done();
      });

      test('Empty() x Empty()', function (done) {
        cmp.eq(Empty, Empty).should.equal(true);
        done();
      });
    });

    suite('not equal => false', function () {
      test('string x string', function (done) {
        cmp.eq(foo, bar).should.equal(false);
        done();
      });

      test('string x String()', function (done) {
        cmp.eq(foo, Bar).should.equal(false);
        done();
      });

      test('String() x string', function (done) {
        cmp.eq(Foo, bar).should.equal(false);
        done();
      });

      test('String() x String()', function (done) {
        cmp.eq(Foo, Bar).should.equal(false);
        done();
      });

      test('string x empty', function (done) {
        cmp.eq(foo, empty).should.equal(false);
        done();
      });

      test('string x Empty()', function (done) {
        cmp.eq(foo, Empty).should.equal(false);
        done();
      });

      test('String() x empty', function (done) {
        cmp.eq(Foo, empty).should.equal(false);
        done();
      });

      test('String() x Empty()', function (done) {
        cmp.eq(Foo, Empty).should.equal(false);
        done();
      });

      test('empty x string', function (done) {
        cmp.eq(empty, foo).should.equal(false);
        done();
      });

      test('empty x String()', function (done) {
        cmp.eq(empty, Foo).should.equal(false);
        done();
      });

      test('Empty() x string', function (done) {
        cmp.eq(Empty, foo).should.equal(false);
        done();
      });

      test('Empty() x String()', function (done) {
        cmp.eq(Empty, Foo).should.equal(false);
        done();
      });
    });
  });

  suite('eqs', function () {
    suite('any => false', function () {
      test('string x string', function (done) {
        cmp.eqs(foo, foo).should.equal(false);
        done();
      });
    });
  });

  suite('ne', function () {
    suite('equal => false', function () {
      test('string x string', function (done) {
        cmp.ne(foo, foo).should.equal(false);
        done();
      });

      test('string x String()', function (done) {
        cmp.ne(foo, Foo).should.equal(false);
        done();
      });

      test('String() x string', function (done) {
        cmp.ne(Foo, foo).should.equal(false);
        done();
      });

      test('String() x String()', function (done) {
        cmp.ne(Foo, Foo).should.equal(false);
        done();
      });

      test('empty x empty', function (done) {
        cmp.ne(empty, empty).should.equal(false);
        done();
      });

      test('empty x Empty()', function (done) {
        cmp.ne(empty, Empty).should.equal(false);
        done();
      });

      test('Empty() x empty', function (done) {
        cmp.ne(Empty, empty).should.equal(false);
        done();
      });

      test('Empty() x Empty()', function (done) {
        cmp.ne(Empty, Empty).should.equal(false);
        done();
      });
    });

    suite('not equal => true', function () {
      test('string x string', function (done) {
        cmp.ne(foo, bar).should.equal(true);
        done();
      });

      test('string x String()', function (done) {
        cmp.ne(foo, Bar).should.equal(true);
        done();
      });

      test('String() x string', function (done) {
        cmp.ne(Foo, bar).should.equal(true);
        done();
      });

      test('String() x String()', function (done) {
        cmp.ne(Foo, Bar).should.equal(true);
        done();
      });

      test('string x empty', function (done) {
        cmp.ne(foo, empty).should.equal(true);
        done();
      });

      test('string x Empty()', function (done) {
        cmp.ne(foo, Empty).should.equal(true);
        done();
      });

      test('String() x empty', function (done) {
        cmp.ne(Foo, empty).should.equal(true);
        done();
      });

      test('String() x Empty()', function (done) {
        cmp.ne(Foo, Empty).should.equal(true);
        done();
      });

      test('empty x string', function (done) {
        cmp.ne(empty, foo).should.equal(true);
        done();
      });

      test('empty x String()', function (done) {
        cmp.ne(empty, Foo).should.equal(true);
        done();
      });

      test('Empty() x string', function (done) {
        cmp.ne(Empty, foo).should.equal(true);
        done();
      });

      test('Empty() x String()', function (done) {
        cmp.ne(Empty, Foo).should.equal(true);
        done();
      });
    });
  });

  suite('nes', function () {
    suite('any => false', function () {
      test('string x string', function (done) {
        cmp.nes(foo, foo).should.equal(false);
        done();
      });
    });
  });

  suite('gt', function () {
    suite('greater => true', function () {
      test('string x string', function (done) {
        cmp.gt(foo, bar).should.equal(true);
        done();
      });

      test('string x String()', function (done) {
        cmp.gt(foo, Bar).should.equal(true);
        done();
      });

      test('String() x string', function (done) {
        cmp.gt(Foo, bar).should.equal(true);
        done();
      });

      test('String() x String()', function (done) {
        cmp.gt(Foo, Bar).should.equal(true);
        done();
      });

      test('string x empty', function (done) {
        cmp.gt(foo, empty).should.equal(true);
        done();
      });

      test('string x Empty()', function (done) {
        cmp.gt(foo, Empty).should.equal(true);
        done();
      });

      test('String() x empty', function (done) {
        cmp.gt(Foo, empty).should.equal(true);
        done();
      });

      test('String() x Empty()', function (done) {
        cmp.gt(Foo, Empty).should.equal(true);
        done();
      });
    });

    suite('equal => false', function () {
      test('string x string', function (done) {
        cmp.gt(foo, foo).should.equal(false);
        done();
      });

      test('string x String()', function (done) {
        cmp.gt(foo, Foo).should.equal(false);
        done();
      });

      test('String() x string', function (done) {
        cmp.gt(Foo, foo).should.equal(false);
        done();
      });

      test('String() x String()', function (done) {
        cmp.gt(Foo, Foo).should.equal(false);
        done();
      });

      test('empty x empty', function (done) {
        cmp.gt(empty, empty).should.equal(false);
        done();
      });

      test('empty x Empty()', function (done) {
        cmp.gt(empty, Empty).should.equal(false);
        done();
      });

      test('Empty() x empty', function (done) {
        cmp.gt(Empty, empty).should.equal(false);
        done();
      });

      test('Empty() x Empty()', function (done) {
        cmp.gt(Empty, Empty).should.equal(false);
        done();
      });
    });

    suite('less => false', function () {
      test('string x string', function (done) {
        cmp.gt(bar, foo).should.equal(false);
        done();
      });

      test('string x String()', function (done) {
        cmp.gt(bar, Foo).should.equal(false);
        done();
      });

      test('String() x string', function (done) {
        cmp.gt(Bar, foo).should.equal(false);
        done();
      });

      test('String() x String()', function (done) {
        cmp.gt(Bar, Foo).should.equal(false);
        done();
      });

      test('empty x string', function (done) {
        cmp.gt(empty, foo).should.equal(false);
        done();
      });

      test('empty x String()', function (done) {
        cmp.gt(empty, Foo).should.equal(false);
        done();
      });

      test('Empty() x string', function (done) {
        cmp.gt(Empty, foo).should.equal(false);
        done();
      });

      test('Empty() x String()', function (done) {
        cmp.gt(Empty, Foo).should.equal(false);
        done();
      });
    });
  });

  suite('gts', function () {
    suite('any => false', function () {
      test('string x string', function (done) {
        cmp.gts(foo, foo).should.equal(false);
        done();
      });
    });
  });

  suite('ge', function () {
    suite('greater => true', function () {
      test('string x string', function (done) {
        cmp.ge(foo, bar).should.equal(true);
        done();
      });

      test('string x String()', function (done) {
        cmp.ge(foo, Bar).should.equal(true);
        done();
      });

      test('String() x string', function (done) {
        cmp.ge(Foo, bar).should.equal(true);
        done();
      });

      test('String() x String()', function (done) {
        cmp.ge(Foo, Bar).should.equal(true);
        done();
      });

      test('string x empty', function (done) {
        cmp.ge(foo, empty).should.equal(true);
        done();
      });

      test('string x Empty()', function (done) {
        cmp.ge(foo, Empty).should.equal(true);
        done();
      });

      test('String() x empty', function (done) {
        cmp.ge(Foo, empty).should.equal(true);
        done();
      });

      test('String() x Empty()', function (done) {
        cmp.ge(Foo, Empty).should.equal(true);
        done();
      });
    });

    suite('equal => true', function () {
      test('string x string', function (done) {
        cmp.ge(foo, foo).should.equal(true);
        done();
      });

      test('string x String()', function (done) {
        cmp.ge(foo, Foo).should.equal(true);
        done();
      });

      test('String() x string', function (done) {
        cmp.ge(Foo, foo).should.equal(true);
        done();
      });

      test('String() x String()', function (done) {
        cmp.ge(Foo, Foo).should.equal(true);
        done();
      });

      test('empty x empty', function (done) {
        cmp.ge(empty, empty).should.equal(true);
        done();
      });

      test('empty x Empty()', function (done) {
        cmp.ge(empty, Empty).should.equal(true);
        done();
      });

      test('Empty() x empty', function (done) {
        cmp.ge(Empty, empty).should.equal(true);
        done();
      });

      test('Empty() x Empty()', function (done) {
        cmp.ge(Empty, Empty).should.equal(true);
        done();
      });
    });

    suite('less => false', function () {
      test('string x string', function (done) {
        cmp.ge(bar, foo).should.equal(false);
        done();
      });

      test('string x String()', function (done) {
        cmp.ge(bar, Foo).should.equal(false);
        done();
      });

      test('String() x string', function (done) {
        cmp.ge(Bar, foo).should.equal(false);
        done();
      });

      test('String() x String()', function (done) {
        cmp.ge(Bar, Foo).should.equal(false);
        done();
      });

      test('empty x string', function (done) {
        cmp.ge(empty, foo).should.equal(false);
        done();
      });

      test('empty x String()', function (done) {
        cmp.ge(empty, Foo).should.equal(false);
        done();
      });

      test('Empty() x string', function (done) {
        cmp.ge(Empty, foo).should.equal(false);
        done();
      });

      test('Empty() x String()', function (done) {
        cmp.ge(Empty, Foo).should.equal(false);
        done();
      });
    });
  });

  suite('ges', function () {
    suite('any => false', function () {
      test('string x string', function (done) {
        cmp.ges(foo, foo).should.equal(false);
        done();
      });
    });
  });

  suite('lt', function () {
    suite('greater => false', function () {
      test('string x string', function (done) {
        cmp.lt(foo, bar).should.equal(false);
        done();
      });

      test('string x String()', function (done) {
        cmp.lt(foo, Bar).should.equal(false);
        done();
      });

      test('String() x string', function (done) {
        cmp.lt(Foo, bar).should.equal(false);
        done();
      });

      test('String() x String()', function (done) {
        cmp.lt(Foo, Bar).should.equal(false);
        done();
      });

      test('string x empty', function (done) {
        cmp.lt(foo, empty).should.equal(false);
        done();
      });

      test('string x Empty()', function (done) {
        cmp.lt(foo, Empty).should.equal(false);
        done();
      });

      test('String() x empty', function (done) {
        cmp.lt(Foo, empty).should.equal(false);
        done();
      });

      test('String() x Empty()', function (done) {
        cmp.lt(Foo, Empty).should.equal(false);
        done();
      });
    });

    suite('equal => false', function () {
      test('string x string', function (done) {
        cmp.lt(foo, foo).should.equal(false);
        done();
      });

      test('string x String()', function (done) {
        cmp.lt(foo, Foo).should.equal(false);
        done();
      });

      test('String() x string', function (done) {
        cmp.lt(Foo, foo).should.equal(false);
        done();
      });

      test('String() x String()', function (done) {
        cmp.lt(Foo, Foo).should.equal(false);
        done();
      });

      test('empty x empty', function (done) {
        cmp.lt(empty, empty).should.equal(false);
        done();
      });

      test('empty x Empty()', function (done) {
        cmp.lt(empty, Empty).should.equal(false);
        done();
      });

      test('Empty() x empty', function (done) {
        cmp.lt(Empty, empty).should.equal(false);
        done();
      });

      test('Empty() x Empty()', function (done) {
        cmp.lt(Empty, Empty).should.equal(false);
        done();
      });
    });

    suite('less => true', function () {
      test('string x string', function (done) {
        cmp.lt(bar, foo).should.equal(true);
        done();
      });

      test('string x String()', function (done) {
        cmp.lt(bar, Foo).should.equal(true);
        done();
      });

      test('String() x string', function (done) {
        cmp.lt(Bar, foo).should.equal(true);
        done();
      });

      test('String() x String()', function (done) {
        cmp.lt(Bar, Foo).should.equal(true);
        done();
      });

      test('empty x string', function (done) {
        cmp.lt(empty, foo).should.equal(true);
        done();
      });

      test('empty x String()', function (done) {
        cmp.lt(empty, Foo).should.equal(true);
        done();
      });

      test('Empty() x string', function (done) {
        cmp.lt(Empty, foo).should.equal(true);
        done();
      });

      test('Empty() x String()', function (done) {
        cmp.lt(Empty, Foo).should.equal(true);
        done();
      });
    });
  });

  suite('lts', function () {
    suite('any => false', function () {
      test('string x string', function (done) {
        cmp.lts(foo, foo).should.equal(false);
        done();
      });
    });
  });

  suite('le', function () {
    suite('greater => false', function () {
      test('string x string', function (done) {
        cmp.le(foo, bar).should.equal(false);
        done();
      });

      test('string x String()', function (done) {
        cmp.le(foo, Bar).should.equal(false);
        done();
      });

      test('String() x string', function (done) {
        cmp.le(Foo, bar).should.equal(false);
        done();
      });

      test('String() x String()', function (done) {
        cmp.le(Foo, Bar).should.equal(false);
        done();
      });

      test('string x empty', function (done) {
        cmp.le(foo, empty).should.equal(false);
        done();
      });

      test('string x Empty()', function (done) {
        cmp.le(foo, Empty).should.equal(false);
        done();
      });

      test('String() x empty', function (done) {
        cmp.le(Foo, empty).should.equal(false);
        done();
      });

      test('String() x Empty()', function (done) {
        cmp.le(Foo, Empty).should.equal(false);
        done();
      });
    });

    suite('equal => true', function () {
      test('string x string', function (done) {
        cmp.le(foo, foo).should.equal(true);
        done();
      });

      test('string x String()', function (done) {
        cmp.le(foo, Foo).should.equal(true);
        done();
      });

      test('String() x string', function (done) {
        cmp.le(Foo, foo).should.equal(true);
        done();
      });

      test('String() x String()', function (done) {
        cmp.le(Foo, Foo).should.equal(true);
        done();
      });

      test('empty x empty', function (done) {
        cmp.le(empty, empty).should.equal(true);
        done();
      });

      test('empty x Empty()', function (done) {
        cmp.le(empty, Empty).should.equal(true);
        done();
      });

      test('Empty() x empty', function (done) {
        cmp.le(Empty, empty).should.equal(true);
        done();
      });

      test('Empty() x Empty()', function (done) {
        cmp.le(Empty, Empty).should.equal(true);
        done();
      });
    });

    suite('less => true', function () {
      test('string x string', function (done) {
        cmp.le(bar, foo).should.equal(true);
        done();
      });

      test('string x String()', function (done) {
        cmp.le(bar, Foo).should.equal(true);
        done();
      });

      test('String() x string', function (done) {
        cmp.le(Bar, foo).should.equal(true);
        done();
      });

      test('String() x String()', function (done) {
        cmp.le(Bar, Foo).should.equal(true);
        done();
      });

      test('empty x string', function (done) {
        cmp.le(empty, foo).should.equal(true);
        done();
      });

      test('empty x String()', function (done) {
        cmp.le(empty, Foo).should.equal(true);
        done();
      });

      test('Empty() x string', function (done) {
        cmp.le(Empty, foo).should.equal(true);
        done();
      });

      test('Empty() x String()', function (done) {
        cmp.le(Empty, Foo).should.equal(true);
        done();
      });
    });
  });

  suite('les', function () {
    suite('any => false', function () {
      test('string x string', function (done) {
        cmp.les(foo, foo).should.equal(false);
        done();
      });
    });
  });

  suite('id', function () {
    suite('identical => true', function () {
      test('string x string', function (done) {
        cmp.id(foo, foo).should.equal(true);
        done();
      });

      test('string x String()', function (done) {
        cmp.id(foo, Foo).should.equal(true);
        done();
      });

      test('String() x string', function (done) {
        cmp.id(Foo, foo).should.equal(true);
        done();
      });

      test('String() x String()', function (done) {
        cmp.id(Foo, Foo).should.equal(true);
        done();
      });

      test('empty x empty', function (done) {
        cmp.id(empty, empty).should.equal(true);
        done();
      });

      test('empty x Empty()', function (done) {
        cmp.id(empty, Empty).should.equal(true);
        done();
      });

      test('Empty() x empty', function (done) {
        cmp.id(Empty, empty).should.equal(true);
        done();
      });

      test('Empty() x Empty()', function (done) {
        cmp.id(Empty, Empty).should.equal(true);
        done();
      });
    });

    suite('not identical => false', function () {
      test('string x string', function (done) {
        cmp.id(foo, bar).should.equal(false);
        done();
      });

      test('string x String()', function (done) {
        cmp.id(foo, Bar).should.equal(false);
        done();
      });

      test('String() x string', function (done) {
        cmp.id(Foo, bar).should.equal(false);
        done();
      });

      test('String() x String()', function (done) {
        cmp.id(Foo, Bar).should.equal(false);
        done();
      });

      test('string x empty', function (done) {
        cmp.id(foo, empty).should.equal(false);
        done();
      });

      test('string x Empty()', function (done) {
        cmp.id(foo, Empty).should.equal(false);
        done();
      });

      test('String() x empty', function (done) {
        cmp.id(Foo, empty).should.equal(false);
        done();
      });

      test('String() x Empty()', function (done) {
        cmp.id(Foo, Empty).should.equal(false);
        done();
      });

      test('empty x string', function (done) {
        cmp.id(empty, foo).should.equal(false);
        done();
      });

      test('empty x String()', function (done) {
        cmp.id(empty, Foo).should.equal(false);
        done();
      });

      test('Empty() x string', function (done) {
        cmp.id(Empty, foo).should.equal(false);
        done();
      });

      test('Empty() x String()', function (done) {
        cmp.id(Empty, Foo).should.equal(false);
        done();
      });
    });
  });
});

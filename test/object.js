var cmp = require('../lib/index'),
    should = require('should');

suite('object x object', function () {
  var o1 = { foo: 'bar' },
      o2 = { foo: 'bar' },
      p1 = { foo: 'baz' },
      O1 = new Object(),
      O2 = new Object(),
      P1 = new Object(),
      empty = {},
      Empty = new Object();

  O1.foo = 'bar';
  O2.foo = 'bar';
  P1.foo = 'baz';

  suite('eq', function () {
    suite('equal => true', function () {
      test('object x object'    , function () { cmp.eq(  o1,   o2).should.equal(true); });
      test('object x Object()'  , function () { cmp.eq(  o1,   O1).should.equal(true); });
      test('Object() x object'  , function () { cmp.eq(  O1,   o1).should.equal(true); });
      test('Object() x Object()', function () { cmp.eq(  O1,   O2).should.equal(true); });
      test('null x null'        , function () { cmp.eq(null, null).should.equal(true); });
    });

    suite('not equal => false', function () {
      test('object x object'    , function () { cmp.eq(  o1,   p1).should.equal(false); });
      test('object x Object()'  , function () { cmp.eq(  o1,   P1).should.equal(false); });
      test('Object() x object'  , function () { cmp.eq(  O1,   p1).should.equal(false); });
      test('Object() x Object()', function () { cmp.eq(  O1,   P1).should.equal(false); });
      test('object x null'      , function () { cmp.eq(  o1, null).should.equal(false); });
      test('Object() x null'    , function () { cmp.eq(  O1, null).should.equal(false); });
      test('null x object'      , function () { cmp.eq(null,   o1).should.equal(false); });
      test('null x Object()'    , function () { cmp.eq(null,   O1).should.equal(false); });
    });
  });

  suite('eqs', function () {
    suite('equal => true', function () {
      test('object x object'    , function () { cmp.eqs(  o1,   p1).should.equal(true); });
      test('object x Object()'  , function () { cmp.eqs(  o1,   P1).should.equal(true); });
      test('Object() x object'  , function () { cmp.eqs(  O1,   p1).should.equal(true); });
      test('Object() x Object()', function () { cmp.eqs(  O1,   P1).should.equal(true); });
      test('null x null'        , function () { cmp.eqs(null, null).should.equal(true); });
    });

    suite('not equal => false', function () {
      test('object x object'    , function () { cmp.eqs(  o1, empty).should.equal(false); });
      test('object x Object()'  , function () { cmp.eqs(  o1, Empty).should.equal(false); });
      test('Object() x object'  , function () { cmp.eqs(  O1, empty).should.equal(false); });
      test('Object() x Object()', function () { cmp.eqs(  O1, Empty).should.equal(false); });
      test('object x null'      , function () { cmp.eqs(  o1,  null).should.equal(false); });
      test('Object() x null'    , function () { cmp.eqs(  O1,  null).should.equal(false); });
      test('null x object'      , function () { cmp.eqs(null,    o1).should.equal(false); });
      test('null x Object()'    , function () { cmp.eqs(null,    O1).should.equal(false); });
    });
  });

  suite('ne', function () {
    suite('equal => false', function () {
      test('object x object'    , function () { cmp.ne(  o1,   o2).should.equal(false); });
      test('object x Object()'  , function () { cmp.ne(  o1,   O1).should.equal(false); });
      test('Object() x object'  , function () { cmp.ne(  O1,   o1).should.equal(false); });
      test('Object() x Object()', function () { cmp.ne(  O1,   O2).should.equal(false); });
      test('null x null'        , function () { cmp.ne(null, null).should.equal(false); });
    });

    suite('not equal => true', function () {
      test('object x object'    , function () { cmp.ne(  o1,   p1).should.equal(true); });
      test('object x Object()'  , function () { cmp.ne(  o1,   P1).should.equal(true); });
      test('Object() x object'  , function () { cmp.ne(  O1,   p1).should.equal(true); });
      test('Object() x Object()', function () { cmp.ne(  O1,   P1).should.equal(true); });
      test('object x null'      , function () { cmp.ne(  o1, null).should.equal(true); });
      test('Object() x null'    , function () { cmp.ne(  O1, null).should.equal(true); });
      test('null x object'      , function () { cmp.ne(null,   o1).should.equal(true); });
      test('null x Object()'    , function () { cmp.ne(null,   O1).should.equal(true); });
    });
  });

  suite('nes', function () {
    suite('equal => false', function () {
      test('object x object'    , function () { cmp.nes(  o1,   p1).should.equal(false); });
      test('object x Object()'  , function () { cmp.nes(  o1,   P1).should.equal(false); });
      test('Object() x object'  , function () { cmp.nes(  O1,   p1).should.equal(false); });
      test('Object() x Object()', function () { cmp.nes(  O1,   P1).should.equal(false); });
      test('null x null'        , function () { cmp.nes(null, null).should.equal(false); });
    });

    suite('not equal => true', function () {
      test('object x object'    , function () { cmp.nes(  o1, empty).should.equal(true); });
      test('object x Object()'  , function () { cmp.nes(  o1, Empty).should.equal(true); });
      test('Object() x object'  , function () { cmp.nes(  O1, empty).should.equal(true); });
      test('Object() x Object()', function () { cmp.nes(  O1, Empty).should.equal(true); });
      test('object x null'      , function () { cmp.nes(  o1,  null).should.equal(true); });
      test('Object() x null'    , function () { cmp.nes(  O1,  null).should.equal(true); });
      test('null x object'      , function () { cmp.nes(null,    o1).should.equal(true); });
      test('null x Object()'    , function () { cmp.nes(null,    O1).should.equal(true); });
    });
  });

  suite('gt', function () {
    suite('greater than => true', function () {
      test('object x object'    , function () { cmp.gt(o1, empty).should.equal(true); });
      test('object x Object()'  , function () { cmp.gt(o1, Empty).should.equal(true); });
      test('Object() x object'  , function () { cmp.gt(O1, empty).should.equal(true); });
      test('Object() x Object()', function () { cmp.gt(O1, Empty).should.equal(true); });
    });

    suite('equal => false', function () {
      test('object x object'    , function () { cmp.gt(  o1,   o2).should.equal(false); });
      test('object x Object()'  , function () { cmp.gt(  o1,   O1).should.equal(false); });
      test('Object() x object'  , function () { cmp.gt(  O1,   o1).should.equal(false); });
      test('Object() x Object()', function () { cmp.gt(  O1,   O2).should.equal(false); });
      test('null x null'        , function () { cmp.gt(null, null).should.equal(false); });
    });

    suite('not equal => false', function () {
      test('object x object'    , function () { cmp.gt(  o1,   p1).should.equal(false); });
      test('object x Object()'  , function () { cmp.gt(  o1,   P1).should.equal(false); });
      test('Object() x object'  , function () { cmp.gt(  O1,   p1).should.equal(false); });
      test('Object() x Object()', function () { cmp.gt(  O1,   P1).should.equal(false); });
      test('object x null'      , function () { cmp.gt(  o1, null).should.equal(false); });
      test('Object() x null'    , function () { cmp.gt(  O1, null).should.equal(false); });
      test('null x object'      , function () { cmp.gt(null,   o1).should.equal(false); });
      test('null x Object()'    , function () { cmp.gt(null,   O1).should.equal(false); });
    });

    suite('less than => false', function () {
      test('object x object'    , function () { cmp.gt(empty, o1).should.equal(false); });
      test('object x Object()'  , function () { cmp.gt(Empty, o1).should.equal(false); });
      test('Object() x object'  , function () { cmp.gt(empty, O1).should.equal(false); });
      test('Object() x Object()', function () { cmp.gt(Empty, O1).should.equal(false); });
    });
  });

  suite('ge', function () {
    suite('greater than => true', function () {
      test('object x object'    , function () { cmp.ge(o1, empty).should.equal(true); });
      test('object x Object()'  , function () { cmp.ge(o1, Empty).should.equal(true); });
      test('Object() x object'  , function () { cmp.ge(O1, empty).should.equal(true); });
      test('Object() x Object()', function () { cmp.ge(O1, Empty).should.equal(true); });
    });

    suite('equal => true', function () {
      test('object x object'    , function () { cmp.ge(  o1,   o2).should.equal(true); });
      test('object x Object()'  , function () { cmp.ge(  o1,   O1).should.equal(true); });
      test('Object() x object'  , function () { cmp.ge(  O1,   o1).should.equal(true); });
      test('Object() x Object()', function () { cmp.ge(  O1,   O2).should.equal(true); });
      test('null x null'        , function () { cmp.ge(null, null).should.equal(true); });
    });

    suite('not equal => false', function () {
      test('object x object'    , function () { cmp.ge(  o1,   p1).should.equal(false); });
      test('object x Object()'  , function () { cmp.ge(  o1,   P1).should.equal(false); });
      test('Object() x object'  , function () { cmp.ge(  O1,   p1).should.equal(false); });
      test('Object() x Object()', function () { cmp.ge(  O1,   P1).should.equal(false); });
      test('object x null'      , function () { cmp.ge(  o1, null).should.equal(false); });
      test('Object() x null'    , function () { cmp.ge(  O1, null).should.equal(false); });
      test('null x object'      , function () { cmp.ge(null,   o1).should.equal(false); });
      test('null x Object()'    , function () { cmp.ge(null,   O1).should.equal(false); });
    });

    suite('less than => false', function () {
      test('object x object'    , function () { cmp.ge(empty, o1).should.equal(false); });
      test('object x Object()'  , function () { cmp.ge(Empty, o1).should.equal(false); });
      test('Object() x object'  , function () { cmp.ge(empty, O1).should.equal(false); });
      test('Object() x Object()', function () { cmp.ge(Empty, O1).should.equal(false); });
    });
  });

  suite('lt', function () {
    suite('greater than => false', function () {
      test('object x object'    , function () { cmp.lt(o1, empty).should.equal(false); });
      test('object x Object()'  , function () { cmp.lt(o1, Empty).should.equal(false); });
      test('Object() x object'  , function () { cmp.lt(O1, empty).should.equal(false); });
      test('Object() x Object()', function () { cmp.lt(O1, Empty).should.equal(false); });
    });

    suite('equal => false', function () {
      test('object x object'    , function () { cmp.lt(  o1,   o2).should.equal(false); });
      test('object x Object()'  , function () { cmp.lt(  o1,   O1).should.equal(false); });
      test('Object() x object'  , function () { cmp.lt(  O1,   o1).should.equal(false); });
      test('Object() x Object()', function () { cmp.lt(  O1,   O2).should.equal(false); });
      test('null x null'        , function () { cmp.lt(null, null).should.equal(false); });
    });

    suite('not equal => false', function () {
      test('object x object'    , function () { cmp.lt(  o1,   p1).should.equal(false); });
      test('object x Object()'  , function () { cmp.lt(  o1,   P1).should.equal(false); });
      test('Object() x object'  , function () { cmp.lt(  O1,   p1).should.equal(false); });
      test('Object() x Object()', function () { cmp.lt(  O1,   P1).should.equal(false); });
      test('object x null'      , function () { cmp.lt(  o1, null).should.equal(false); });
      test('Object() x null'    , function () { cmp.lt(  O1, null).should.equal(false); });
      test('null x object'      , function () { cmp.lt(null,   o1).should.equal(false); });
      test('null x Object()'    , function () { cmp.lt(null,   O1).should.equal(false); });
    });

    suite('less than => true', function () {
      test('object x object'    , function () { cmp.lt(empty, o1).should.equal(true); });
      test('object x Object()'  , function () { cmp.lt(Empty, o1).should.equal(true); });
      test('Object() x object'  , function () { cmp.lt(empty, O1).should.equal(true); });
      test('Object() x Object()', function () { cmp.lt(Empty, O1).should.equal(true); });
    });
  });

  suite('le', function () {
    suite('greater than => false', function () {
      test('object x object'    , function () { cmp.le(o1, empty).should.equal(false); });
      test('object x Object()'  , function () { cmp.le(o1, Empty).should.equal(false); });
      test('Object() x object'  , function () { cmp.le(O1, empty).should.equal(false); });
      test('Object() x Object()', function () { cmp.le(O1, Empty).should.equal(false); });
    });

    suite('equal => true', function () {
      test('object x object'    , function () { cmp.le(  o1,   o2).should.equal(true); });
      test('object x Object()'  , function () { cmp.le(  o1,   O1).should.equal(true); });
      test('Object() x object'  , function () { cmp.le(  O1,   o1).should.equal(true); });
      test('Object() x Object()', function () { cmp.le(  O1,   O2).should.equal(true); });
      test('null x null'        , function () { cmp.le(null, null).should.equal(true); });
    });

    suite('not equal => false', function () {
      test('object x object'    , function () { cmp.le(  o1,   p1).should.equal(false); });
      test('object x Object()'  , function () { cmp.le(  o1,   P1).should.equal(false); });
      test('Object() x object'  , function () { cmp.le(  O1,   p1).should.equal(false); });
      test('Object() x Object()', function () { cmp.le(  O1,   P1).should.equal(false); });
      test('object x null'      , function () { cmp.le(  o1, null).should.equal(false); });
      test('Object() x null'    , function () { cmp.le(  O1, null).should.equal(false); });
      test('null x object'      , function () { cmp.le(null,   o1).should.equal(false); });
      test('null x Object()'    , function () { cmp.le(null,   O1).should.equal(false); });
    });

    suite('less than => true', function () {
      test('object x object'    , function () { cmp.le(empty, o1).should.equal(true); });
      test('object x Object()'  , function () { cmp.le(Empty, o1).should.equal(true); });
      test('Object() x object'  , function () { cmp.le(empty, O1).should.equal(true); });
      test('Object() x Object()', function () { cmp.le(Empty, O1).should.equal(true); });
    });
  });

  suite('id', function () {
    suite('identical => true', function () {
      test('object x object'    , function () { cmp.id(  o1,   o1).should.equal(true); });
      test('Object() x Object()', function () { cmp.id(  O1,   O1).should.equal(true); });
      test('null x null'        , function () { cmp.id(null, null).should.equal(true); });
    });

    suite('not identical => false', function () {
      test('object x object'    , function () { cmp.id(  o1,   o2).should.equal(false); });
      test('object x Object()'  , function () { cmp.id(  o1,   O1).should.equal(false); });
      test('Object() x object'  , function () { cmp.id(  O1,   o1).should.equal(false); });
      test('Object() x Object()', function () { cmp.id(  O1,   O2).should.equal(false); });
    });
  });
});
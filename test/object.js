var cmp = require('../lib/index'),
    should = require('should');

suite('object x object', function () {
  suite('eq', function () {
    suite('equal => true', function () {
      test('object   x object'  , function () { cmp.eq({ foo: 'bar' }, { foo: 'bar' }).should.equal(true); });
      test('object   x Object()', function () { cmp.eq(            {},   new Object()).should.equal(true); });
      test('Object() x Object()', function () { cmp.eq(  new Object(),   new Object()).should.equal(true); });
      test('null     x null'    , function () { cmp.eq(          null,           null).should.equal(true); });
    });

    suite('not equal => false', function () {
      test('object   x object'  , function () {                                          cmp.eq({ foo: 'bar' }, { foo: 'baz' }).should.equal(false); });
      test('object   x Object()', function () {                                          cmp.eq({ foo: 'bar' },   new Object()).should.equal(false); });
      test('Object() x Object()', function () { var foo = new Object(); foo.foo = 'bar'; cmp.eq(           foo,   new Object()).should.equal(false); });
      test('object   x null'    , function () {                                          cmp.eq(            {},           null).should.equal(false); });
    });
  });

  suite('ne', function () {
    suite('equal => false', function () {
      test('object   x object'  , function () { cmp.ne({ foo: 'bar' }, { foo: 'bar' }).should.equal(false); });
      test('object   x Object()', function () { cmp.ne(            {},   new Object()).should.equal(false); });
      test('Object() x Object()', function () { cmp.ne(  new Object(),   new Object()).should.equal(false); });
      test('null     x null'    , function () { cmp.ne(          null,           null).should.equal(false); });
    });

    suite('not equal => true', function () {
      test('object   x object'  , function () {                                          cmp.ne({ foo: 'bar' }, { foo: 'baz' }).should.equal(true); });
      test('object   x Object()', function () {                                          cmp.ne({ foo: 'bar' },   new Object()).should.equal(true); });
      test('Object() x Object()', function () { var foo = new Object(); foo.foo = 'bar'; cmp.ne(           foo,   new Object()).should.equal(true); });
      test('object   x null'    , function () {                                          cmp.ne(            {},           null).should.equal(true); });
    });
  });

  suite('gt', function () {
    suite('any => false', function () {
      test('object   x object'  , function () { cmp.gt({ foo: 'bar' }, { foo: 'bar' }).should.equal(false); });
      test('object   x Object()', function () { cmp.gt(            {},   new Object()).should.equal(false); });
      test('Object() x Object()', function () { cmp.gt(  new Object(),   new Object()).should.equal(false); });
      test('object   x null'    , function () { cmp.gt(            {},           null).should.equal(false); });
      test('null     x null'    , function () { cmp.gt(          null,           null).should.equal(false); });
    });
  });

  suite('ge', function () {
    suite('equal => true', function () {
      test('object   x object'  , function () { cmp.ge({ foo: 'bar' }, { foo: 'bar' }).should.equal(true); });
      test('object   x Object()', function () { cmp.ge(            {},   new Object()).should.equal(true); });
      test('Object() x Object()', function () { cmp.ge(  new Object(),   new Object()).should.equal(true); });
      test('null     x null'    , function () { cmp.ge(          null,           null).should.equal(true); });
    });

    suite('not equal => false', function () {
      test('object   x object'  , function () {                                          cmp.ge({ foo: 'bar' }, { foo: 'baz' }).should.equal(false); });
      test('object   x Object()', function () {                                          cmp.ge({ foo: 'bar' },   new Object()).should.equal(false); });
      test('Object() x Object()', function () { var foo = new Object(); foo.foo = 'bar'; cmp.ge(           foo,   new Object()).should.equal(false); });
      test('object   x null'    , function () {                                          cmp.ge(            {},           null).should.equal(false); });
    });
  });

  suite('lt', function () {
    suite('any => false', function () {
      test('object   x object'  , function () { cmp.lt({ foo: 'bar' }, { foo: 'bar' }).should.equal(false); });
      test('object   x Object()', function () { cmp.lt(            {},   new Object()).should.equal(false); });
      test('Object() x Object()', function () { cmp.lt(  new Object(),   new Object()).should.equal(false); });
      test('object   x null'    , function () { cmp.lt(            {},           null).should.equal(false); });
      test('null     x null'    , function () { cmp.lt(          null,           null).should.equal(false); });
    });
  });

  suite('le', function () {
    suite('equal => true', function () {
      test('object   x object'  , function () { cmp.le({ foo: 'bar' }, { foo: 'bar' }).should.equal(true); });
      test('object   x Object()', function () { cmp.le(            {},   new Object()).should.equal(true); });
      test('Object() x Object()', function () { cmp.le(  new Object(),   new Object()).should.equal(true); });
      test('null     x null'    , function () { cmp.le(          null,           null).should.equal(true); });
    });

    suite('not equal => false', function () {
      test('object   x object'  , function () {                                          cmp.le({ foo: 'bar' }, { foo: 'baz' }).should.equal(false); });
      test('object   x Object()', function () {                                          cmp.le({ foo: 'bar' },   new Object()).should.equal(false); });
      test('Object() x Object()', function () { var foo = new Object(); foo.foo = 'bar'; cmp.le(           foo,   new Object()).should.equal(false); });
      test('object   x null'    , function () {                                          cmp.le(            {},           null).should.equal(false); });
    });
  });

  suite('id', function () {
    suite('equal => true', function () {
      test('object   x object'  , function () { var foo = {};           cmp.id(foo ,  foo).should.equal(true); });
      test('Object() x Object()', function () { var foo = new Object(); cmp.id(foo ,  foo).should.equal(true); });
      test('null     x null'    , function () {                         cmp.id(null, null).should.equal(true); });
    });

    suite('not equal => false', function () {
      test('object   x object'  , function () { cmp.id(          {},           {}).should.equal(false); });
      test('object   x Object()', function () { cmp.id(          {}, new Object()).should.equal(false); });
      test('Object() x Object()', function () { cmp.id(new Object(), new Object()).should.equal(false); });
    });
  });
});
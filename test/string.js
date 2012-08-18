var cmp = require('../lib/index'),
    should = require('should');

suite('string x string', function () {
  suite('eq', function () {
    suite('equal => true', function () {
      test('string x string'    , function () { cmp.eq(           'Foo' ,            'Foo' ).should.equal(true); });
      test('string x String()'  , function () { cmp.eq(           'Foo' , new String('Foo')).should.equal(true); });
      test('String() x String()', function () { cmp.eq(new String('Foo'), new String('Foo')).should.equal(true); });
      test('empty x empty'      , function () { cmp.eq(              '' ,               '' ).should.equal(true); });
      test('empty x Empty()'    , function () { cmp.eq(              '' , new String(   '')).should.equal(true); });
    });

    suite('not equal => false', function () {
      test('string x string'    , function () { cmp.eq(           'Foo' ,            'Bar' ).should.equal(false); });
      test('string x String()'  , function () { cmp.eq(           'Foo' , new String('Bar')).should.equal(false); });
      test('String() x String()', function () { cmp.eq(new String('Foo'), new String('Bar')).should.equal(false); });
      test('string x empty'     , function () { cmp.eq(           'Foo' ,               '' ).should.equal(false); });
      test('string x Empty()'   , function () { cmp.eq(           'Foo' , new String(   '')).should.equal(false); });
    });
  });

  suite('ne', function () {
    suite('equal => false', function () {
      test('string x string'    , function () { cmp.ne(           'Foo' ,            'Foo' ).should.equal(false); });
      test('string x String()'  , function () { cmp.ne(           'Foo' , new String('Foo')).should.equal(false); });
      test('String() x String()', function () { cmp.ne(new String('Foo'), new String('Foo')).should.equal(false); });
      test('empty x empty'      , function () { cmp.ne(              '' ,               '' ).should.equal(false); });
      test('empty x Empty()'    , function () { cmp.ne(              '' , new String(   '')).should.equal(false); });
    });

    suite('not equal => true', function () {
      test('string x string'    , function () { cmp.ne(           'Foo' ,            'Bar' ).should.equal(true); });
      test('string x String()'  , function () { cmp.ne(           'Foo' , new String('Bar')).should.equal(true); });
      test('String() x String()', function () { cmp.ne(new String('Foo'), new String('Bar')).should.equal(true); });
      test('string x empty'     , function () { cmp.ne(           'Foo' ,               '' ).should.equal(true); });
      test('string x Empty()'   , function () { cmp.ne(           'Foo' , new String(   '')).should.equal(true); });
    });
  });

  suite('gt', function () {
    suite('greater => true', function () {
      test('string x string', function () { cmp.gt('Foo', 'Bar').should.equal(true); });
      test('string x empty' , function () { cmp.gt('Foo',    '').should.equal(true); });
    });

    suite('equal => false', function () {
      test('string x string', function () { cmp.gt('Foo', 'Foo').should.equal(false); });
      test('empty x empty'  , function () { cmp.gt(   '',    '').should.equal(false); });
    });

    suite('less => false', function () {
      test('string x string', function () { cmp.gt('Bar', 'Foo').should.equal(false); });
      test('empty x string' , function () { cmp.gt(   '', 'Foo').should.equal(false); });
    });
  });

  suite('ge', function () {
    suite('greater => true', function () {
      test('string x string', function () { cmp.ge('Foo', 'Bar').should.equal(true); });
      test('string x empty' , function () { cmp.ge('Foo',    '').should.equal(true); });
    });

    suite('equal => true', function () {
      test('string x string', function () { cmp.ge('Foo', 'Foo').should.equal(true); });
      test('empty x empty'  , function () { cmp.ge(   '',    '').should.equal(true); });
    });

    suite('less => false', function () {
      test('string x string', function () { cmp.ge('Bar', 'Foo').should.equal(false); });
      test('empty x string' , function () { cmp.ge(   '', 'Foo').should.equal(false); });
    });
  });

  suite('lt', function () {
    suite('greater => false', function () {
      test('string x string', function () { cmp.lt('Foo', 'Bar').should.equal(false); });
      test('string x empty' , function () { cmp.lt('Foo',    '').should.equal(false); });
    });

    suite('equal => false', function () {
      test('string x string', function () { cmp.lt('Foo', 'Foo').should.equal(false); });
      test('empty x empty'  , function () { cmp.lt(   '',    '').should.equal(false); });
    });

    suite('less => true', function () {
      test('string x string', function () { cmp.lt('Bar', 'Foo').should.equal(true); });
      test('empty x string' , function () { cmp.lt(   '', 'Foo').should.equal(true); });
    });
  });

  suite('le', function () {
    suite('greater => false', function () {
      test('string x string', function () { cmp.le('Foo', 'Bar').should.equal(false); });
      test('string x empty' , function () { cmp.le('Foo',    '').should.equal(false); });
    });

    suite('equal => true', function () {
      test('string x string', function () { cmp.le('Foo', 'Foo').should.equal(true); });
      test('empty x empty'  , function () { cmp.le(   '',    '').should.equal(true); });
    });

    suite('less => true', function () {
      test('string x string', function () { cmp.le('Bar', 'Foo').should.equal(true); });
      test('empty x string' , function () { cmp.le(   '', 'Foo').should.equal(true); });
    });
  });

  suite('id', function () {
    suite('identical => true', function () {
      test('string x string'    , function () { cmp.id(           'Foo' ,            'Foo' ).should.equal(true); });
      test('string x String()'  , function () { cmp.id(           'Foo' , new String('Foo')).should.equal(true); });
      test('String() x String()', function () { cmp.id(new String('Foo'), new String('Foo')).should.equal(true); });
      test('empty x empty'      , function () { cmp.id(              '' ,               '' ).should.equal(true); });
      test('empty x Empty()'    , function () { cmp.id(              '' , new String(   '')).should.equal(true); });
    });

    suite('not identical => false', function () {
      test('string x string'    , function () { cmp.id(           'Foo' ,            'Bar' ).should.equal(false); });
      test('string x String()'  , function () { cmp.id(           'Foo' , new String('Bar')).should.equal(false); });
      test('String() x String()', function () { cmp.id(new String('Foo'), new String('Bar')).should.equal(false); });
      test('string x empty'     , function () { cmp.id(           'Foo' ,               '' ).should.equal(false); });
      test('string x Empty()'   , function () { cmp.id(           'Foo' , new String(   '')).should.equal(false); });
    });
  });
});
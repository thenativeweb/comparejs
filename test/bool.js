var cmp = require('../lib/index'),
    should = require('should');

suite('bool x bool', function () {
  suite('eq', function () {
    suite('equal => true', function () {
      test('true    x true'   , function () { cmp.eq(             true ,              true ).should.equal(true); });
      test('true    x True()' , function () { cmp.eq(             true , new Boolean( true)).should.equal(true); });
      test('True()  x True()' , function () { cmp.eq(new Boolean( true), new Boolean( true)).should.equal(true); });
      test('false   x false'  , function () { cmp.eq(            false ,             false ).should.equal(true); });
      test('false   x False()', function () { cmp.eq(            false , new Boolean(false)).should.equal(true); });
      test('False() x False()', function () { cmp.eq(new Boolean(false), new Boolean(false)).should.equal(true); });
    });

    suite('not equal => false', function () {
      test('true    x false'   , function () { cmp.eq(             true ,             false ).should.equal(false); });
      test('true    x False()' , function () { cmp.eq(             true , new Boolean(false)).should.equal(false); });
      test('True()  x False()' , function () { cmp.eq(new Boolean( true), new Boolean(false)).should.equal(false); });
      test('false   x true'    , function () { cmp.eq(            false ,              true ).should.equal(false); });
      test('false   x True()'  , function () { cmp.eq(            false , new Boolean( true)).should.equal(false); });
      test('False() x True()'  , function () { cmp.eq(new Boolean(false), new Boolean( true)).should.equal(false); });
    });
  });

  suite('ne', function () {
    suite('equal => false', function () {
      test('true    x true'   , function () { cmp.ne(             true ,              true ).should.equal(false); });
      test('true    x True()' , function () { cmp.ne(             true , new Boolean( true)).should.equal(false); });
      test('True()  x True()' , function () { cmp.ne(new Boolean( true), new Boolean( true)).should.equal(false); });
      test('false   x false'  , function () { cmp.ne(            false ,             false ).should.equal(false); });
      test('false   x False()', function () { cmp.ne(            false , new Boolean(false)).should.equal(false); });
      test('False() x False()', function () { cmp.ne(new Boolean(false), new Boolean(false)).should.equal(false); });
    });

    suite('not equal => true', function () {
      test('true    x false'   , function () { cmp.ne(             true ,             false ).should.equal(true); });
      test('true    x False()' , function () { cmp.ne(             true , new Boolean(false)).should.equal(true); });
      test('True()  x False()' , function () { cmp.ne(new Boolean( true), new Boolean(false)).should.equal(true); });
      test('false   x true'    , function () { cmp.ne(            false ,              true ).should.equal(true); });
      test('false   x True()'  , function () { cmp.ne(            false , new Boolean( true)).should.equal(true); });
      test('False() x True()'  , function () { cmp.ne(new Boolean(false), new Boolean( true)).should.equal(true); });
    });
  });

  suite('gt', function () {
    suite('greater => true', function () {
      test('true x false', function () { cmp.gt(true, false).should.equal(true); });
    });

    suite('equal => false', function () {
      test('true x true'  , function () { cmp.gt( true,  true).should.equal(false); });
      test('false x false', function () { cmp.gt(false, false).should.equal(false); });
    });

    suite('less => false', function () {
      test('false x true', function () { cmp.gt(false, true).should.equal(false); });
    });
  });

  suite('ge', function () {
    suite('greater => true', function () {
      test('true x false', function () { cmp.ge(true, false).should.equal(true); });
    });

    suite('equal => true', function () {
      test('true x true'  , function () { cmp.ge( true,  true).should.equal(true); });
      test('false x false', function () { cmp.ge(false, false).should.equal(true); });
    });

    suite('less => false', function () {
      test('false x true', function () { cmp.ge(false, true).should.equal(false); });
    });
  });

  suite('lt', function () {
    suite('greater => true', function () {
      test('true x false', function () { cmp.lt(true, false).should.equal(false); });
    });

    suite('equal => false', function () {
      test('true x true'  , function () { cmp.lt( true,  true).should.equal(false); });
      test('false x false', function () { cmp.lt(false, false).should.equal(false); });
    });

    suite('less => false', function () {
      test('false x true', function () { cmp.lt(false, true).should.equal(true); });
    });
  });

  suite('le', function () {
    suite('greater => true', function () {
      test('true x false', function () { cmp.le(true, false).should.equal(false); });
    });

    suite('equal => true', function () {
      test('true x true'  , function () { cmp.le( true,  true).should.equal(true); });
      test('false x false', function () { cmp.le(false, false).should.equal(true); });
    });

    suite('less => false', function () {
      test('false x true', function () { cmp.le(false, true).should.equal(true); });
    });
  });

  suite('id', function () {
    suite('identical => true', function () {
      test('true    x true'   , function () { cmp.id(             true ,              true ).should.equal(true); });
      test('true    x True()' , function () { cmp.id(             true , new Boolean( true)).should.equal(true); });
      test('True()  x True()' , function () { cmp.id(new Boolean( true), new Boolean( true)).should.equal(true); });
      test('false   x false'  , function () { cmp.id(            false ,             false ).should.equal(true); });
      test('false   x False()', function () { cmp.id(            false , new Boolean(false)).should.equal(true); });
      test('False() x False()', function () { cmp.id(new Boolean(false), new Boolean(false)).should.equal(true); });
    });

    suite('not identical => false', function () {
      test('true    x false'   , function () { cmp.id(             true ,             false ).should.equal(false); });
      test('true    x False()' , function () { cmp.id(             true , new Boolean(false)).should.equal(false); });
      test('True()  x False()' , function () { cmp.id(new Boolean( true), new Boolean(false)).should.equal(false); });
      test('false   x true'    , function () { cmp.id(            false ,              true ).should.equal(false); });
      test('false   x True()'  , function () { cmp.id(            false , new Boolean( true)).should.equal(false); });
      test('False() x True()'  , function () { cmp.id(new Boolean(false), new Boolean( true)).should.equal(false); });
    });
  });
});
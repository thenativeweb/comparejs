var cmp = require('../lib/index'),
    should = require('should');

suite('number x number', function () {
  suite('eq', function () {
    suite('equal => true', function () {
      test('int x int'          , function () { cmp.eq(                23 ,                 23 ).should.equal(true); });
      test('int x Int()'        , function () { cmp.eq(                23 , new Number(     23)).should.equal(true); });
      test('Int() x Int()'      , function () { cmp.eq(new Number(     23), new Number(     23)).should.equal(true); });
      test('double x double'    , function () { cmp.eq(           3.14159 ,            3.14159 ).should.equal(true); });
      test('double x Double()'  , function () { cmp.eq(           3.14159 , new Number(3.14159)).should.equal(true); });
      test('Double() x Double()', function () { cmp.eq(new Number(3.14159), new Number(3.14159)).should.equal(true); });
    });

    suite('not equal => false', function () {
      test('int x int'          , function () { cmp.eq(                23 ,                 42 ).should.equal(false); });
      test('int x Int()'        , function () { cmp.eq(                23 , new Number(     42)).should.equal(false); });
      test('Int() x Int()'      , function () { cmp.eq(new Number(     23), new Number(     42)).should.equal(false); });
      test('double x double'    , function () { cmp.eq(           3.14159 ,            2.71828 ).should.equal(false); });
      test('double x Double()'  , function () { cmp.eq(           3.14159 , new Number(2.71828)).should.equal(false); });
      test('Double() x Double()', function () { cmp.eq(new Number(3.14159), new Number(2.71828)).should.equal(false); });
    });

    suite('isNaN => false', function () {
      test('int x isNaN'  , function () { cmp.eq(       23 , Number.NaN).should.equal(false); });
      test('isNaN x isNaN', function () { cmp.eq(Number.NaN, Number.NaN).should.equal(false); });
      test('isNan x int'  , function () { cmp.eq(Number.NaN,        42 ).should.equal(false); });
    });
  });

  suite('ne', function () {
    suite('equal => false', function () {
      test('int x int'          , function () { cmp.ne(                23 ,                 23 ).should.equal(false); });
      test('int x Int()'        , function () { cmp.ne(                23 , new Number(     23)).should.equal(false); });
      test('Int() x Int()'      , function () { cmp.ne(new Number(     23), new Number(     23)).should.equal(false); });
      test('double x double'    , function () { cmp.ne(           3.14159 ,            3.14159 ).should.equal(false); });
      test('double x Double()'  , function () { cmp.ne(           3.14159 , new Number(3.14159)).should.equal(false); });
      test('Double() x Double()', function () { cmp.ne(new Number(3.14159), new Number(3.14159)).should.equal(false); });
    });
    
    suite('not equal => true', function () {
      test('int x int'          , function () { cmp.ne(                23 ,                 42 ).should.equal(true); });
      test('int x Int()'        , function () { cmp.ne(                23 , new Number(     42)).should.equal(true); });
      test('Int() x Int()'      , function () { cmp.ne(new Number(     23), new Number(     42)).should.equal(true); });
      test('double x double'    , function () { cmp.ne(           3.14159 ,            2.71828 ).should.equal(true); });
      test('double x Double()'  , function () { cmp.ne(           3.14159 , new Number(2.71828)).should.equal(true); });
      test('Double() x Double()', function () { cmp.ne(new Number(3.14159), new Number(2.71828)).should.equal(true); });
    });

    suite('isNaN => true', function () {
      test('int x isNaN'  , function () { cmp.ne(        23, Number.NaN).should.equal(true); });
      test('isNaN x isNaN', function () { cmp.ne(Number.NaN, Number.NaN).should.equal(true); });
      test('isNan x int'  , function () { cmp.ne(Number.NaN,         42).should.equal(true); });
    });
  });

  suite('gt', function () {
    suite('greater => true', function () {
      test('int x int'      , function () { cmp.gt(     42,      23).should.equal(true); });
      test('double x double', function () { cmp.gt(3.14159, 2.71828).should.equal(true); });
      test('int x double'   , function () { cmp.gt(      3, 2.71828).should.equal(true); });
      test('double x int'   , function () { cmp.gt(3.14159,       3).should.equal(true); });
    });

    suite('equal => false', function () {
      test('int x int'      , function () { cmp.gt(     23,      23).should.equal(false); });
      test('double x double', function () { cmp.gt(3.14159, 3.14159).should.equal(false); });
    });

    suite('less => false', function () {
      test('int x int'      , function () { cmp.gt(     23,      42).should.equal(false); });
      test('double x double', function () { cmp.gt(2.71828, 3.14159).should.equal(false); });
      test('int x double'   , function () { cmp.gt(      3, 3.14159).should.equal(false); });
      test('double x int'   , function () { cmp.gt(2.71828,       3).should.equal(false); });
    });

    suite('isNan => false', function () {
      test('int x isNaN'   , function () { cmp.gt(        23, Number.NaN).should.equal(false); });
      test('isNaN x int'   , function () { cmp.gt(Number.NaN,         23).should.equal(false); });
      test('double x isNaN', function () { cmp.gt(   3.14159, Number.NaN).should.equal(false); });
      test('isNaN x double', function () { cmp.gt(Number.NaN,    3.14159).should.equal(false); });
    });
  });

  suite('ge', function () {
    suite('greater => true', function () {
      test('int x int'      , function () { cmp.ge(     42,      23).should.equal(true); });
      test('double x double', function () { cmp.ge(3.14159, 2.71828).should.equal(true); });
      test('int x double'   , function () { cmp.ge(      3, 2.71828).should.equal(true); });
      test('double x int'   , function () { cmp.ge(3.14159,       3).should.equal(true); });
    });

    suite('equal => true', function () {
      test('int x int'      , function () { cmp.ge(     23,      23).should.equal(true); });
      test('double x double', function () { cmp.ge(3.14159, 3.14159).should.equal(true); });
    });

    suite('less => false', function () {
      test('int x int'      , function () { cmp.ge(     23,      42).should.equal(false); });
      test('double x double', function () { cmp.ge(2.71828, 3.14159).should.equal(false); });
      test('int x double'   , function () { cmp.ge(      3, 3.14159).should.equal(false); });
      test('double x int'   , function () { cmp.ge(2.71828,       3).should.equal(false); });
    });

    suite('isNan => false', function () {
      test('int x isNaN'   , function () { cmp.ge(        23, Number.NaN).should.equal(false); });
      test('isNaN x int'   , function () { cmp.ge(Number.NaN,         23).should.equal(false); });
      test('double x isNaN', function () { cmp.ge(   3.14159, Number.NaN).should.equal(false); });
      test('isNaN x double', function () { cmp.ge(Number.NaN,    3.14159).should.equal(false); });
    });
  });

  suite('lt', function () {
    suite('greater => false', function () {
      test('int x int'      , function () { cmp.lt(     42,      23).should.equal(false); });
      test('double x double', function () { cmp.lt(3.14159, 2.71828).should.equal(false); });
      test('int x double'   , function () { cmp.lt(      3, 2.71828).should.equal(false); });
      test('double x int'   , function () { cmp.lt(3.14159,       3).should.equal(false); });
    });

    suite('equal => false', function () {
      test('int x int'      , function () { cmp.lt(     23,      23).should.equal(false); });
      test('double x double', function () { cmp.lt(3.14159, 3.14159).should.equal(false); });
    });

    suite('less => true', function () {
      test('int x int'      , function () { cmp.lt(     23,      42).should.equal(true); });
      test('double x double', function () { cmp.lt(2.71828, 3.14159).should.equal(true); });
      test('int x double'   , function () { cmp.lt(      3, 3.14159).should.equal(true); });
      test('double x int'   , function () { cmp.lt(2.71828,       3).should.equal(true); });
    });

    suite('isNan => false', function () {
      test('int x isNaN'   , function () { cmp.lt(        23, Number.NaN).should.equal(false); });
      test('isNaN x int'   , function () { cmp.lt(Number.NaN,         23).should.equal(false); });
      test('double x isNaN', function () { cmp.lt(   3.14159, Number.NaN).should.equal(false); });
      test('isNaN x double', function () { cmp.lt(Number.NaN,    3.14159).should.equal(false); });
    });
  });

  suite('le', function () {
    suite('greater => false', function () {
      test('int x int'      , function () { cmp.le(     42,      23).should.equal(false); });
      test('double x double', function () { cmp.le(3.14159, 2.71828).should.equal(false); });
      test('int x double'   , function () { cmp.le(      3, 2.71828).should.equal(false); });
      test('double x int'   , function () { cmp.le(3.14159,       3).should.equal(false); });
    });

    suite('equal => true', function () {
      test('int x int'      , function () { cmp.le(     23,      23).should.equal(true); });
      test('double x double', function () { cmp.le(3.14159, 3.14159).should.equal(true); });
    });

    suite('less => true', function () {
      test('int x int'      , function () { cmp.le(     23,      42).should.equal(true); });
      test('double x double', function () { cmp.le(2.71828, 3.14159).should.equal(true); });
      test('int x double'   , function () { cmp.le(      3, 3.14159).should.equal(true); });
      test('double x int'   , function () { cmp.le(2.71828,       3).should.equal(true); });
    });

    suite('isNan => false', function () {
      test('int x isNaN'   , function () { cmp.le(        23, Number.NaN).should.equal(false); });
      test('isNaN x int'   , function () { cmp.le(Number.NaN,         23).should.equal(false); });
      test('double x isNaN', function () { cmp.le(   3.14159, Number.NaN).should.equal(false); });
      test('isNaN x double', function () { cmp.le(Number.NaN,    3.14159).should.equal(false); });
    });
  });

  suite('id', function () {
    suite('identical => true', function () {
      test('int x int'          , function () { cmp.id(                23 ,                 23 ).should.equal(true); });
      test('int x Int()'        , function () { cmp.id(                23 , new Number(     23)).should.equal(true); });
      test('Int() x Int()'      , function () { cmp.id(new Number(     23), new Number(     23)).should.equal(true); });
      test('double x double'    , function () { cmp.id(           3.14159 ,            3.14159 ).should.equal(true); });
      test('double x Double()'  , function () { cmp.id(           3.14159 , new Number(3.14159)).should.equal(true); });
      test('Double() x Double()', function () { cmp.id(new Number(3.14159), new Number(3.14159)).should.equal(true); });
    });

    suite('not identical => false', function () {
      test('int x int'          , function () { cmp.id(                23 ,                 42 ).should.equal(false); });
      test('int x Int()'        , function () { cmp.id(                23 , new Number(     42)).should.equal(false); });
      test('Int() x Int()'      , function () { cmp.id(new Number(     23), new Number(     42)).should.equal(false); });
      test('double x double'    , function () { cmp.id(           3.14159 ,            2.71828 ).should.equal(false); });
      test('double x Double()'  , function () { cmp.id(           3.14159 , new Number(2.71828)).should.equal(false); });
      test('Double() x Double()', function () { cmp.id(new Number(3.14159), new Number(2.71828)).should.equal(false); });
    });

    suite('isNaN => false', function () {
      test('int x isNaN'  , function () { cmp.id(        23, Number.NaN ).should.equal(false); });
      test('isNaN x isNaN', function () { cmp.id(Number.NaN, Number.NaN ).should.equal(false); });
      test('isNan x int'  , function () { cmp.id(Number.NaN,         42 ).should.equal(false); });
    });
  });
});
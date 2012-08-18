var cmp = require('../lib/index'),
    should = require('should');

suite('function x function', function () {
  suite('eq', function () {
    suite('equal => true', function () {
      test('function   x function'  , function () { cmp.eq(function () { return 23; }, function () { return 23; }).should.equal(true); });
      test('Function() x Function()', function () { cmp.eq(new Function('return 23;'), new Function('return 23;')).should.equal(true); });
    });

    suite('not equal => false', function () {
      test('function   x function'  , function () { cmp.eq(function () { return 23; }, function () { return 42; }).should.equal(false); });
      test('function   x Function()', function () { cmp.eq(function () { return 23; }, new Function('return 42;')).should.equal(false); });
      test('Function() x Function()', function () { cmp.eq(new Function('return 23;'), new Function('return 42;')).should.equal(false); });
    });
  });

  suite('ne', function () {
    suite('equal => false', function () {
      test('function   x function'  , function () { cmp.ne(function () { return 23; }, function () { return 23; }).should.equal(false); });
      test('Function() x Function()', function () { cmp.ne(new Function('return 23;'), new Function('return 23;')).should.equal(false); });
    });

    suite('not equal => true', function () {
      test('function   x function'  , function () { cmp.ne(function () { return 23; }, function () { return 42; }).should.equal(true); });
      test('function   x Function()', function () { cmp.ne(function () { return 23; }, new Function('return 42;')).should.equal(true); });
      test('Function() x Function()', function () { cmp.ne(new Function('return 23;'), new Function('return 42;')).should.equal(true); });
    });
  });

  suite('gt', function () {
    suite('any => false', function () {
      test('function   x function'  , function () { cmp.gt(function () { return 23; }, function () { return 42; }).should.equal(false); });
      test('function   x Function()', function () { cmp.gt(function () { return 23; }, new Function('return 42;')).should.equal(false); });
      test('Function() x Function()', function () { cmp.gt(new Function('return 23;'), new Function('return 42;')).should.equal(false); });
    });
  });

  suite('ge', function () {
    suite('equal => true', function () {
      test('function   x function'  , function () { cmp.ge(function () { return 23; }, function () { return 23; }).should.equal(true); });
      test('Function() x Function()', function () { cmp.ge(new Function('return 23;'), new Function('return 23;')).should.equal(true); });
    });

    suite('not equal => false', function () {
      test('function   x function'  , function () { cmp.ge(function () { return 23; }, function () { return 42; }).should.equal(false); });
      test('function   x Function()', function () { cmp.ge(function () { return 23; }, new Function('return 42;')).should.equal(false); });
      test('Function() x Function()', function () { cmp.ge(new Function('return 23;'), new Function('return 42;')).should.equal(false); });
    });
  });

  suite('lt', function () {
    suite('any => false', function () {
      test('function   x function'  , function () { cmp.lt(function () { return 23; }, function () { return 42; }).should.equal(false); });
      test('function   x Function()', function () { cmp.lt(function () { return 23; }, new Function('return 42;')).should.equal(false); });
      test('Function() x Function()', function () { cmp.lt(new Function('return 23;'), new Function('return 42;')).should.equal(false); });
    });
  });

  suite('le', function () {
    suite('equal => true', function () {
      test('function   x function'  , function () { cmp.le(function () { return 23; }, function () { return 23; }).should.equal(true); });
      test('Function() x Function()', function () { cmp.le(new Function('return 23;'), new Function('return 23;')).should.equal(true); });
    });

    suite('not equal => false', function () {
      test('function   x function'  , function () { cmp.le(function () { return 23; }, function () { return 42; }).should.equal(false); });
      test('function   x Function()', function () { cmp.le(function () { return 23; }, new Function('return 42;')).should.equal(false); });
      test('Function() x Function()', function () { cmp.le(new Function('return 23;'), new Function('return 42;')).should.equal(false); });
    });
  });

  suite('id', function () {
    suite('equal => true', function () {
      test('function   x function'  , function () { var f = function () { return 23; }; cmp.id(f, f).should.equal(true); });
      test('Function() x Function()', function () { var f = new Function('return 23;'); cmp.id(f, f).should.equal(true); });
    });

    suite('not equal => false', function () {
      test('function   x function'  , function () { cmp.id(function () { return 23; }, function () { return 23; }).should.equal(false); });
      test('function   x Function()', function () { cmp.id(function () { return 23; }, new Function('return 23;')).should.equal(false); });
      test('Function() x Function()', function () { cmp.id(new Function('return 23;'), new Function('return 23;')).should.equal(false); });
    });
  });
});
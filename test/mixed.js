var cmp = require('../lib/index'),
    should = require('should');

suite('mixed types', function () {
  suite('eq', function () {
    suite('any => false', function () {
      test('number x string'  , function () { cmp.eq(                        23,                         '23').should.equal(false); });
      test('function x string', function () { cmp.eq(function () { return 23; }, 'function () { return 23; }').should.equal(false); });
    });
  });

  suite('ne', function () {
    suite('any => true', function () {
      test('number x string'  , function () { cmp.ne(                        23,                         '23').should.equal(true); });
      test('function x string', function () { cmp.ne(function () { return 23; }, 'function () { return 23; }').should.equal(true); });
    });
  });

  suite('gt', function () {
    suite('any => false', function () {
      test('number x string'  , function () { cmp.gt(                        23,                         '23').should.equal(false); });
      test('function x string', function () { cmp.gt(function () { return 23; }, 'function () { return 23; }').should.equal(false); });
    });
  });

  suite('ge', function () {
    suite('any => false', function () {
      test('number x string'  , function () { cmp.ge(                        23,                         '23').should.equal(false); });
      test('function x string', function () { cmp.ge(function () { return 23; }, 'function () { return 23; }').should.equal(false); });
    });
  });

  suite('lt', function () {
    suite('any => false', function () {
      test('number x string'  , function () { cmp.lt(                        23,                         '23').should.equal(false); });
      test('function x string', function () { cmp.lt(function () { return 23; }, 'function () { return 23; }').should.equal(false); });
    });
  });

  suite('le', function () {
    suite('any => false', function () {
      test('number x string'  , function () { cmp.le(                        23,                         '23').should.equal(false); });
      test('function x string', function () { cmp.le(function () { return 23; }, 'function () { return 23; }').should.equal(false); });
    });
  });

  suite('id', function () {
    suite('any => false', function () {
      test('number x string'  , function () { cmp.id(                        23,                         '23').should.equal(false); });
      test('function x string', function () { cmp.id(function () { return 23; }, 'function () { return 23; }').should.equal(false); });
    });
  });
});
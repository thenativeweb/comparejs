var cmp = require('../lib/index'),
    should = require('should');

suite('undefined x undefined', function () {
  suite('eq', function () {
    suite('equal => true', function () {
      test('undefined x undefined', function () { cmp.eq(undefined, undefined).should.equal(true); });
    });
  });

  suite('eqs', function () {
    suite('any => false', function () {
      test('undefined x undefined', function () { cmp.eqs(undefined, undefined).should.equal(false); });
    });
  });

  suite('ne', function () {
    suite('equal => false', function () {
      test('undefined x undefined', function () { cmp.ne(undefined, undefined).should.equal(false); });
    });
  });

  suite('nes', function () {
    suite('any => false', function () {
      test('undefined x undefined', function () { cmp.nes(undefined, undefined).should.equal(false); });
    });
  });

  suite('gt', function () {
    suite('equal => false', function () {
      test('undefined x undefined', function () { cmp.gt(undefined, undefined).should.equal(false); });
    });
  });

  suite('ge', function () {
    suite('equal => true', function () {
      test('undefined x undefined', function () { cmp.ge(undefined, undefined).should.equal(true); });
    });
  });

  suite('lt', function () {
    suite('equal => false', function () {
      test('undefined x undefined', function () { cmp.lt(undefined, undefined).should.equal(false); });
    });
  });

  suite('le', function () {
    suite('equal => true', function () {
      test('undefined x undefined', function () { cmp.le(undefined, undefined).should.equal(true); });
    });
  });

  suite('id', function () {
    suite('identical => true', function () {
      test('undefined x undefined', function () { cmp.id(undefined, undefined).should.equal(true); });
    });
  });
});
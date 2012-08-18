var cmp = require('../lib/index'),
    should = require('should');

suite('compare.js', function () {
  suite('eq', function () {
    suite('number x number', function () {
      suite('equal => true', function () {
        test('int x int', function () {
          cmp.eq(23, 23).should.equal(true);
        });

        test('double x double', function () {
          cmp.eq(3.14159, 3.14159).should.equal(true);
        });
      });
      suite('not equal => false', function () {
        test('int x int', function () {
          cmp.eq(23, 42).should.equal(false);
        });

        test('double x double', function () {
          cmp.eq(3.14159, 2.71828).should.equal(false);
        });

        test('int x isNaN', function () {
          cmp.eq(23, Number.NaN).should.equal(false);
        });

        test('isNaN x isNaN', function () {
          cmp.eq(Number.NaN, Number.NaN).should.equal(false);
        });

        test('isNan x int', function () {
          cmp.eq(Number.NaN, 42).should.equal(false);
        });
      });
    });
  });

  suite('ne', function () {
    suite('number x number', function () {
      suite('equal => false', function () {
        test('int x int', function () {
          cmp.ne(23, 23).should.equal(false);
        });

        test('double x double', function () {
          cmp.ne(3.14159, 3.14159).should.equal(false);
        });
      });
      suite('not equal => true', function () {
        test('int x int', function () {
          cmp.ne(23, 42).should.equal(true);
        });

        test('double x double', function () {
          cmp.ne(3.14159, 2.71828).should.equal(true);
        });

        test('int x isNaN', function () {
          cmp.ne(23, Number.NaN).should.equal(true);
        });

        test('isNaN x isNaN', function () {
          cmp.ne(Number.NaN, Number.NaN).should.equal(true);
        });

        test('isNan x int', function () {
          cmp.ne(Number.NaN, 42).should.equal(true);
        });
      });
    });
  });

  suite('gt', function () {

  });

  suite('ge', function () {

  });

  suite('lt', function () {

  });

  suite('le', function () {

  });
});
var cmp = require('../lib/index'),
    should = require('should');

suite('number x number', function () {
  suite('eq', function () {
    suite('equal => true', function () {
      test('int x int', function () {
        cmp.eq(23, 23).should.equal(true);
      });

      test('int x Int()', function () {
        cmp.eq(23, new Number(23)).should.equal(true);
      });

      test('Int() x Int()', function () {
        cmp.eq(new Number(23), new Number(23)).should.equal(true);
      });

      test('double x double', function () {
        cmp.eq(3.14159, 3.14159).should.equal(true);
      });

      test('double x Double()', function () {
        cmp.eq(3.14159, new Number(3.14159)).should.equal(true);
      });

      test('Double() x Double()', function () {
        cmp.eq(new Number(3.14159), new Number(3.14159)).should.equal(true);
      });
    });

    suite('not equal => false', function () {
      test('int x int', function () {
        cmp.eq(23, 42).should.equal(false);
      });

      test('int x Int()', function () {
        cmp.eq(23, new Number(42)).should.equal(false);
      });

      test('Int() x Int()', function () {
        cmp.eq(new Number(23), new Number(42)).should.equal(false);
      });

      test('double x double', function () {
        cmp.eq(3.14159, 2.71828).should.equal(false);
      });

      test('double x Double()', function () {
        cmp.eq(3.14159, new Number(2.71828)).should.equal(false);
      });

      test('Double() x Double()', function () {
        cmp.eq(new Number(3.14159), new Number(2.71828)).should.equal(false);
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

  suite('ne', function () {
    suite('equal => false', function () {
      test('int x int', function () {
        cmp.ne(23, 23).should.equal(false);
      });

      test('int x Int()', function () {
        cmp.ne(23, new Number(23)).should.equal(false);
      });

      test('Int() x Int()', function () {
        cmp.ne(new Number(23), new Number(23)).should.equal(false);
      });

      test('double x double', function () {
        cmp.ne(3.14159, 3.14159).should.equal(false);
      });

      test('double x Double()', function () {
        cmp.ne(3.14159, new Number(3.14159)).should.equal(false);
      });

      test('Double() x Double()', function () {
        cmp.ne(new Number(3.14159), new Number(3.14159)).should.equal(false);
      });
    });
    
    suite('not equal => true', function () {
      test('int x int', function () {
        cmp.ne(23, 42).should.equal(true);
      });

      test('int x Int()', function () {
        cmp.ne(23, new Number(42)).should.equal(true);
      });

      test('Int() x Int()', function () {
        cmp.ne(new Number(23), new Number(42)).should.equal(true);
      });

      test('double x double', function () {
        cmp.ne(3.14159, 2.71828).should.equal(true);
      });

      test('double x Double()', function () {
        cmp.ne(3.14159, new Number(2.71828)).should.equal(true);
      });

      test('Double() x Double()', function () {
        cmp.ne(new Number(3.14159), new Number(2.71828)).should.equal(true);
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

  suite('gt', function () {

  });

  suite('ge', function () {

  });

  suite('lt', function () {

  });

  suite('le', function () {

  });
});
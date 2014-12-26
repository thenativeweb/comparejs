'use strict';

/*eslint-disable no-unused-vars*/
var should = require('should');
/*eslint-enable no-unused-vars*/

var cmp = require('../lib/compare');

suite('function x function', function () {
  /*eslint-disable no-new-func*/
  var F1 = new Function('return 23;'),
      F2 = new Function('return 23;'),
      G1 = new Function('return 42;');
  /*eslint-enable no-new-func*/

  var f1 = function () {
        return 23;
      },
      f2 = function () {
        return 23;
      },
      g1 = function () {
        return 42;
      };

  suite('eq', function () {
    suite('equal => true', function () {
      test('function x function', function (done) {
        cmp.eq(f1, f2).should.equal(true);
        done();
      });

      test('Function() x Function()', function (done) {
        cmp.eq(F1, F2).should.equal(true);
        done();
      });
    });

    suite('not equal => false', function () {
      test('function x function', function (done) {
        cmp.eq(f1, g1).should.equal(false);
        done();
      });

      test('function x Function()', function (done) {
        cmp.eq(f1, F1).should.equal(false);
        done();
      });

      test('Function() x function', function (done) {
        cmp.eq(F1, f1).should.equal(false);
        done();
      });

      test('Function() x Function()', function (done) {
        cmp.eq(F1, G1).should.equal(false);
        done();
      });
    });
  });

  suite('eqs', function () {
    suite('any => false', function () {
      test('function x function', function (done) {
        cmp.eqs(f1, f1).should.equal(false);
        done();
      });
    });
  });

  suite('ne', function () {
    suite('equal => false', function () {
      test('function x function', function (done) {
        cmp.ne(f1, f2).should.equal(false);
        done();
      });

      test('Function() x Function()', function (done) {
        cmp.ne(F1, F2).should.equal(false);
        done();
      });
    });

    suite('not equal => true', function () {
      test('function x function', function (done) {
        cmp.ne(f1, g1).should.equal(true);
        done();
      });

      test('function x Function()', function (done) {
        cmp.ne(f1, F1).should.equal(true);
        done();
      });

      test('Function() x function', function (done) {
        cmp.ne(F1, f1).should.equal(true);
        done();
      });

      test('Function() x Function()', function (done) {
        cmp.ne(F1, G1).should.equal(true);
        done();
      });
    });
  });

  suite('nes', function () {
    suite('any => false', function () {
      test('function x function', function (done) {
        cmp.nes(f1, f1).should.equal(false);
        done();
      });
    });
  });

  suite('gt', function () {
    suite('any => false', function () {
      test('function x function', function (done) {
        cmp.gt(f1, f2).should.equal(false);
        done();
      });

      test('function x function', function (done) {
        cmp.gt(f1, g1).should.equal(false);
        done();
      });

      test('function x Function()', function (done) {
        cmp.gt(f1, F1).should.equal(false);
        done();
      });

      test('Function() x function', function (done) {
        cmp.gt(F1, f1).should.equal(false);
        done();
      });

      test('Function() x Function()', function (done) {
        cmp.gt(F1, F2).should.equal(false);
        done();
      });

      test('Function() x Function()', function (done) {
        cmp.gt(F1, G1).should.equal(false);
        done();
      });
    });
  });

  suite('gts', function () {
    suite('any => false', function () {
      test('function x function', function (done) {
        cmp.gts(f1, f1).should.equal(false);
        done();
      });
    });
  });

  suite('ge', function () {
    suite('equal => true', function () {
      test('function x function', function (done) {
        cmp.ge(f1, f2).should.equal(true);
        done();
      });

      test('Function() x Function()', function (done) {
        cmp.ge(F1, F2).should.equal(true);
        done();
      });
    });

    suite('not equal => false', function () {
      test('function x function', function (done) {
        cmp.ge(f1, g1).should.equal(false);
        done();
      });

      test('function x Function()', function (done) {
        cmp.ge(f1, F1).should.equal(false);
        done();
      });

      test('Function() x function', function (done) {
        cmp.ge(F1, f1).should.equal(false);
        done();
      });

      test('Function() x Function()', function (done) {
        cmp.ge(F1, G1).should.equal(false);
        done();
      });
    });
  });

  suite('ges', function () {
    suite('any => false', function () {
      test('function x function', function (done) {
        cmp.ges(f1, f1).should.equal(false);
        done();
      });
    });
  });

  suite('lt', function () {
    suite('any => false', function () {
      test('function x function', function (done) {
        cmp.lt(f1, f2).should.equal(false);
        done();
      });

      test('function x function', function (done) {
        cmp.lt(f1, g1).should.equal(false);
        done();
      });

      test('function x Function()', function (done) {
        cmp.lt(f1, F1).should.equal(false);
        done();
      });

      test('Function() x function', function (done) {
        cmp.lt(F1, f1).should.equal(false);
        done();
      });

      test('Function() x Function()', function (done) {
        cmp.lt(F1, F2).should.equal(false);
        done();
      });

      test('Function() x Function()', function (done) {
        cmp.lt(F1, G1).should.equal(false);
        done();
      });
    });
  });

  suite('lts', function () {
    suite('any => false', function () {
      test('function x function', function (done) {
        cmp.lts(f1, f1).should.equal(false);
        done();
      });
    });
  });

  suite('le', function () {
    suite('equal => true', function () {
      test('function x function', function (done) {
        cmp.le(f1, f2).should.equal(true);
        done();
      });

      test('Function() x Function()', function (done) {
        cmp.le(F1, F2).should.equal(true);
        done();
      });
    });

    suite('not equal => false', function () {
      test('function x function', function (done) {
        cmp.le(f1, g1).should.equal(false);
        done();
      });

      test('function x Function()', function (done) {
        cmp.le(f1, F1).should.equal(false);
        done();
      });

      test('Function() x function', function (done) {
        cmp.le(F1, f1).should.equal(false);
        done();
      });

      test('Function() x Function()', function (done) {
        cmp.le(F1, G1).should.equal(false);
        done();
      });
    });
  });

  suite('les', function () {
    suite('any => false', function () {
      test('function x function', function (done) {
        cmp.les(f1, f1).should.equal(false);
        done();
      });
    });
  });

  suite('id', function () {
    suite('equal => true', function () {
      test('function x function', function (done) {
        cmp.id(f1, f1).should.equal(true);
        done();
      });

      test('Function() x Function()', function (done) {
        cmp.id(F1, F1).should.equal(true);
        done();
      });
    });

    suite('not equal => false', function () {
      test('function x function', function (done) {
        cmp.id(f1, f2).should.equal(false);
        done();
      });

      test('function x function', function (done) {
        cmp.id(f1, g1).should.equal(false);
        done();
      });

      test('function x Function()', function (done) {
        cmp.id(f1, F1).should.equal(false);
        done();
      });

      test('Function() x function', function (done) {
        cmp.id(F1, f1).should.equal(false);
        done();
      });

      test('Function() x Function()', function (done) {
        cmp.id(F1, F2).should.equal(false);
        done();
      });

      test('Function() x Function()', function (done) {
        cmp.id(F1, G1).should.equal(false);
        done();
      });
    });
  });
});

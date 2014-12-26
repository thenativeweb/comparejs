'use strict';

/*eslint-disable no-unused-vars*/
var should = require('should');
/*eslint-enable no-unused-vars*/

var cmp = require('../lib/compare');

suite('array x array', function () {
  /*eslint-disable no-array-constructor*/
  var A1 = new Array(),
      A2 = new Array(),
      B1 = new Array(),
      Empty = new Array();
  /*eslint-enable no-array-constructor*/

  var a1 = [ 2 ],
      a2 = [ 2 ],
      b1 = [ 3 ],
      empty = [ ];

  A1.push(2);
  A2.push(2);
  B1.push(3);

  suite('eq', function () {
    suite('equal => true', function () {
      test('array x array', function (done) {
        cmp.eq(a1, a2).should.equal(true);
        done();
      });

      test('array x Array()', function (done) {
        cmp.eq(a1, A1).should.equal(true);
        done();
      });

      test('Array() x array', function (done) {
        cmp.eq(A1, a1).should.equal(true);
        done();
      });

      test('Array() x Array()', function (done) {
        cmp.eq(A1, A2).should.equal(true);
        done();
      });

      test('null x null', function (done) {
        cmp.eq(null, null).should.equal(true);
        done();
      });
    });

    suite('not equal => false', function () {
      test('array x array', function (done) {
        cmp.eq(a1, b1).should.equal(false);
        done();
      });

      test('array x Array()', function (done) {
        cmp.eq(a1, B1).should.equal(false);
        done();
      });

      test('Array() x array', function (done) {
        cmp.eq(A1, b1).should.equal(false);
        done();
      });

      test('Array() x Array()', function (done) {
        cmp.eq(A1, B1).should.equal(false);
        done();
      });

      test('array x null', function (done) {
        cmp.eq(a1, null).should.equal(false);
        done();
      });

      test('Array() x null', function (done) {
        cmp.eq(A1, null).should.equal(false);
        done();
      });

      test('null x array', function (done) {
        cmp.eq(null, a1).should.equal(false);
        done();
      });

      test('null x Array()', function (done) {
        cmp.eq(null, A1).should.equal(false);
        done();
      });
    });
  });

  suite('eqs', function () {
    suite('any => false', function () {
      test('array x array', function (done) {
        cmp.eqs(a1, a1).should.equal(false);
        done();
      });
    });
  });

  suite('ne', function () {
    suite('equal => false', function () {
      test('array x array', function (done) {
        cmp.ne(a1, a2).should.equal(false);
        done();
      });

      test('array x Array()', function (done) {
        cmp.ne(a1, A1).should.equal(false);
        done();
      });

      test('Array() x array', function (done) {
        cmp.ne(A1, a1).should.equal(false);
        done();
      });

      test('Array() x Array()', function (done) {
        cmp.ne(A1, A2).should.equal(false);
        done();
      });

      test('null x null', function (done) {
        cmp.ne(null, null).should.equal(false);
        done();
      });
    });

    suite('not equal => true', function () {
      test('array x array', function (done) {
        cmp.ne(a1, b1).should.equal(true);
        done();
      });

      test('array x Array()', function (done) {
        cmp.ne(a1, B1).should.equal(true);
        done();
      });

      test('Array() x array', function (done) {
        cmp.ne(A1, b1).should.equal(true);
        done();
      });

      test('Array() x Array()', function (done) {
        cmp.ne(A1, B1).should.equal(true);
        done();
      });

      test('array x null', function (done) {
        cmp.ne(a1, null).should.equal(true);
        done();
      });

      test('Array() x null', function (done) {
        cmp.ne(A1, null).should.equal(true);
        done();
      });

      test('null x array', function (done) {
        cmp.ne(null, a1).should.equal(true);
        done();
      });

      test('null x Array()', function (done) {
        cmp.ne(null, A1).should.equal(true);
        done();
      });
    });
  });

  suite('nes', function () {
    suite('any => false', function () {
      test('array x array', function (done) {
        cmp.nes(a1, a1).should.equal(false);
        done();
      });
    });
  });

  suite('gt', function () {
    suite('greater than => true', function () {
      test('array x array', function (done) {
        cmp.gt(a1, empty).should.equal(true);
        done();
      });

      test('array x Array()', function (done) {
        cmp.gt(a1, Empty).should.equal(true);
        done();
      });

      test('Array() x array', function (done) {
        cmp.gt(A1, empty).should.equal(true);
        done();
      });

      test('Array() x Array()', function (done) {
        cmp.gt(A1, Empty).should.equal(true);
        done();
      });
    });

    suite('equal => false', function () {
      test('array x array', function (done) {
        cmp.gt(a1, a2).should.equal(false);
        done();
      });

      test('array x Array()', function (done) {
        cmp.gt(a1, A1).should.equal(false);
        done();
      });

      test('Array() x array', function (done) {
        cmp.gt(A1, a1).should.equal(false);
        done();
      });

      test('Array() x Array()', function (done) {
        cmp.gt(A1, A2).should.equal(false);
        done();
      });

      test('null x null', function (done) {
        cmp.gt(null, null).should.equal(false);
        done();
      });
    });

    suite('not equal => false', function () {
      test('array x array', function (done) {
        cmp.gt(a1, b1).should.equal(false);
        done();
      });

      test('array x Array()', function (done) {
        cmp.gt(a1, B1).should.equal(false);
        done();
      });

      test('Array() x array', function (done) {
        cmp.gt(A1, b1).should.equal(false);
        done();
      });

      test('Array() x Array()', function (done) {
        cmp.gt(A1, B1).should.equal(false);
        done();
      });

      test('array x null', function (done) {
        cmp.gt(a1, null).should.equal(false);
        done();
      });

      test('Array() x null', function (done) {
        cmp.gt(A1, null).should.equal(false);
        done();
      });

      test('null x array', function (done) {
        cmp.gt(null, a1).should.equal(false);
        done();
      });

      test('null x Array()', function (done) {
        cmp.gt(null, A1).should.equal(false);
        done();
      });
    });

    suite('less than => false', function () {
      test('array x array', function (done) {
        cmp.gt(empty, a1).should.equal(false);
        done();
      });

      test('array x Array()', function (done) {
        cmp.gt(Empty, a1).should.equal(false);
        done();
      });

      test('Array() x array', function (done) {
        cmp.gt(empty, A1).should.equal(false);
        done();
      });

      test('Array() x Array()', function (done) {
        cmp.gt(Empty, A1).should.equal(false);
        done();
      });
    });
  });

  suite('gts', function () {
    suite('any => false', function () {
      test('array x array', function (done) {
        cmp.gts(a1, a1).should.equal(false);
        done();
      });
    });
  });

  suite('ge', function () {
    suite('greater than => true', function () {
      test('array x array', function (done) {
        cmp.ge(a1, empty).should.equal(true);
        done();
      });

      test('array x Array()', function (done) {
        cmp.ge(a1, Empty).should.equal(true);
        done();
      });

      test('Array() x array', function (done) {
        cmp.ge(A1, empty).should.equal(true);
        done();
      });

      test('Array() x Array()', function (done) {
        cmp.ge(A1, Empty).should.equal(true);
        done();
      });
    });

    suite('equal => true', function () {
      test('array x array', function (done) {
        cmp.ge(a1, a2).should.equal(true);
        done();
      });

      test('array x Array()', function (done) {
        cmp.ge(a1, A1).should.equal(true);
        done();
      });

      test('Array() x array', function (done) {
        cmp.ge(A1, a1).should.equal(true);
        done();
      });

      test('Array() x Array()', function (done) {
        cmp.ge(A1, A2).should.equal(true);
        done();
      });

      test('null x null', function (done) {
        cmp.ge(null, null).should.equal(true);
        done();
      });
    });

    suite('not equal => false', function () {
      test('array x array', function (done) {
        cmp.ge(a1, b1).should.equal(false);
        done();
      });

      test('array x Array()', function (done) {
        cmp.ge(a1, B1).should.equal(false);
        done();
      });

      test('Array() x array', function (done) {
        cmp.ge(A1, b1).should.equal(false);
        done();
      });

      test('Array() x Array()', function (done) {
        cmp.ge(A1, B1).should.equal(false);
        done();
      });

      test('array x null', function (done) {
        cmp.ge(a1, null).should.equal(false);
        done();
      });

      test('Array() x null', function (done) {
        cmp.ge(A1, null).should.equal(false);
        done();
      });

      test('null x array', function (done) {
        cmp.ge(null, a1).should.equal(false);
        done();
      });

      test('null x Array()', function (done) {
        cmp.ge(null, A1).should.equal(false);
        done();
      });
    });

    suite('less than => false', function () {
      test('array x array', function (done) {
        cmp.ge(empty, a1).should.equal(false);
        done();
      });

      test('array x Array()', function (done) {
        cmp.ge(Empty, a1).should.equal(false);
        done();
      });

      test('Array() x array', function (done) {
        cmp.ge(empty, A1).should.equal(false);
        done();
      });

      test('Array() x Array()', function (done) {
        cmp.ge(Empty, A1).should.equal(false);
        done();
      });
    });
  });

  suite('ges', function () {
    suite('any => false', function () {
      test('array x array', function (done) {
        cmp.ges(a1, a1).should.equal(false);
        done();
      });
    });
  });

  suite('lt', function () {
    suite('greater than => false', function () {
      test('array x array', function (done) {
        cmp.lt(a1, empty).should.equal(false);
        done();
      });

      test('array x Array()', function (done) {
        cmp.lt(a1, Empty).should.equal(false);
        done();
      });

      test('Array() x array', function (done) {
        cmp.lt(A1, empty).should.equal(false);
        done();
      });

      test('Array() x Array()', function (done) {
        cmp.lt(A1, Empty).should.equal(false);
        done();
      });
    });

    suite('equal => false', function () {
      test('array x array', function (done) {
        cmp.lt(a1, a2).should.equal(false);
        done();
      });

      test('array x Array()', function (done) {
        cmp.lt(a1, A1).should.equal(false);
        done();
      });

      test('Array() x array', function (done) {
        cmp.lt(A1, a1).should.equal(false);
        done();
      });

      test('Array() x Array()', function (done) {
        cmp.lt(A1, A2).should.equal(false);
        done();
      });

      test('null x null', function (done) {
        cmp.lt(null, null).should.equal(false);
        done();
      });
    });

    suite('not equal => false', function () {
      test('array x array', function (done) {
        cmp.lt(a1, b1).should.equal(false);
        done();
      });

      test('array x Array()', function (done) {
        cmp.lt(a1, B1).should.equal(false);
        done();
      });

      test('Array() x array', function (done) {
        cmp.lt(A1, b1).should.equal(false);
        done();
      });

      test('Array() x Array()', function (done) {
        cmp.lt(A1, B1).should.equal(false);
        done();
      });

      test('array x null', function (done) {
        cmp.lt(a1, null).should.equal(false);
        done();
      });

      test('Array() x null', function (done) {
        cmp.lt(A1, null).should.equal(false);
        done();
      });

      test('null x array', function (done) {
        cmp.lt(null, a1).should.equal(false);
        done();
      });

      test('null x Array()', function (done) {
        cmp.lt(null, A1).should.equal(false);
        done();
      });
    });

    suite('less than => true', function () {
      test('array x array', function (done) {
        cmp.lt(empty, a1).should.equal(true);
        done();
      });

      test('array x Array()', function (done) {
        cmp.lt(Empty, a1).should.equal(true);
        done();
      });

      test('Array() x array', function (done) {
        cmp.lt(empty, A1).should.equal(true);
        done();
      });

      test('Array() x Array()', function (done) {
        cmp.lt(Empty, A1).should.equal(true);
        done();
      });
    });
  });

  suite('lts', function () {
    suite('any => false', function () {
      test('array x array', function (done) {
        cmp.lts(a1, a1).should.equal(false);
        done();
      });
    });
  });

  suite('le', function () {
    suite('greater than => false', function () {
      test('array x array', function (done) {
        cmp.le(a1, empty).should.equal(false);
        done();
      });

      test('array x Array()', function (done) {
        cmp.le(a1, Empty).should.equal(false);
        done();
      });

      test('Array() x array', function (done) {
        cmp.le(A1, empty).should.equal(false);
        done();
      });

      test('Array() x Array()', function (done) {
        cmp.le(A1, Empty).should.equal(false);
        done();
      });
    });

    suite('equal => true', function () {
      test('array x array', function (done) {
        cmp.le(a1, a2).should.equal(true);
        done();
      });

      test('array x Array()', function (done) {
        cmp.le(a1, A1).should.equal(true);
        done();
      });

      test('Array() x array', function (done) {
        cmp.le(A1, a1).should.equal(true);
        done();
      });

      test('Array() x Array()', function (done) {
        cmp.le(A1, A2).should.equal(true);
        done();
      });

      test('null x null', function (done) {
        cmp.le(null, null).should.equal(true);
        done();
      });
    });

    suite('not equal => false', function () {
      test('array x array', function (done) {
        cmp.le(a1, b1).should.equal(false);
        done();
      });

      test('array x Array()', function (done) {
        cmp.le(a1, B1).should.equal(false);
        done();
      });

      test('Array() x array', function (done) {
        cmp.le(A1, b1).should.equal(false);
        done();
      });

      test('Array() x Array()', function (done) {
        cmp.le(A1, B1).should.equal(false);
        done();
      });

      test('array x null', function (done) {
        cmp.le(a1, null).should.equal(false);
        done();
      });

      test('Array() x null', function (done) {
        cmp.le(A1, null).should.equal(false);
        done();
      });

      test('null x array', function (done) {
        cmp.le(null, a1).should.equal(false);
        done();
      });

      test('null x Array()', function (done) {
        cmp.le(null, A1).should.equal(false);
        done();
      });
    });

    suite('less than => true', function () {
      test('array x array', function (done) {
        cmp.le(empty, a1).should.equal(true);
        done();
      });

      test('array x Array()', function (done) {
        cmp.le(Empty, a1).should.equal(true);
        done();
      });

      test('Array() x array', function (done) {
        cmp.le(empty, A1).should.equal(true);
        done();
      });

      test('Array() x Array()', function (done) {
        cmp.le(Empty, A1).should.equal(true);
        done();
      });
    });
  });

  suite('les', function () {
    suite('any => false', function () {
      test('array x array', function (done) {
        cmp.les(a1, a1).should.equal(false);
        done();
      });
    });
  });

  suite('id', function () {
    suite('identical => true', function () {
      test('array x array', function (done) {
        cmp.id(a1, a1).should.equal(true);
        done();
      });

      test('Array() x Array()', function (done) {
        cmp.id(A1, A1).should.equal(true);
        done();
      });

      test('null x null', function (done) {
        cmp.id(null, null).should.equal(true);
        done();
      });
    });

    suite('not identical => false', function () {
      test('array x array', function (done) {
        cmp.id(a1, a2).should.equal(false);
        done();
      });

      test('array x Array()', function (done) {
        cmp.id(a1, A1).should.equal(false);
        done();
      });

      test('Array() x array', function (done) {
        cmp.id(A1, a1).should.equal(false);
        done();
      });

      test('Array() x Array()', function (done) {
        cmp.id(A1, A2).should.equal(false);
        done();
      });
    });
  });
});

'use strict';

/*eslint-disable no-unused-vars*/
var should = require('should');
/*eslint-enable no-unused-vars*/

var cmp = require('../lib/compare');

suite('undefined x undefined', function () {
  suite('eq', function () {
    suite('equal => true', function () {
      test('undefined x undefined', function (done) {
        cmp.eq(undefined, undefined).should.equal(true);
        done();
      });
    });
  });

  suite('eqs', function () {
    suite('any => false', function () {
      test('undefined x undefined', function (done) {
        cmp.eqs(undefined, undefined).should.equal(false);
        done();
      });
    });
  });

  suite('ne', function () {
    suite('equal => false', function () {
      test('undefined x undefined', function (done) {
        cmp.ne(undefined, undefined).should.equal(false);
        done();
      });
    });
  });

  suite('nes', function () {
    suite('any => false', function () {
      test('undefined x undefined', function (done) {
        cmp.nes(undefined, undefined).should.equal(false);
        done();
      });
    });
  });

  suite('gt', function () {
    suite('equal => false', function () {
      test('undefined x undefined', function (done) {
        cmp.gt(undefined, undefined).should.equal(false);
        done();
      });
    });
  });

  suite('gts', function () {
    suite('any => false', function () {
      test('undefined x undefined', function (done) {
        cmp.gts(undefined, undefined).should.equal(false);
        done();
      });
    });
  });

  suite('ge', function () {
    suite('equal => true', function () {
      test('undefined x undefined', function (done) {
        cmp.ge(undefined, undefined).should.equal(true);
        done();
      });
    });
  });

  suite('ges', function () {
    suite('any => false', function () {
      test('undefined x undefined', function (done) {
        cmp.ges(undefined, undefined).should.equal(false);
        done();
      });
    });
  });

  suite('lt', function () {
    suite('equal => false', function () {
      test('undefined x undefined', function (done) {
        cmp.lt(undefined, undefined).should.equal(false);
        done();
      });
    });
  });

  suite('lts', function () {
    suite('any => false', function () {
      test('undefined x undefined', function (done) {
        cmp.lts(undefined, undefined).should.equal(false);
        done();
      });
    });
  });

  suite('le', function () {
    suite('equal => true', function () {
      test('undefined x undefined', function (done) {
        cmp.le(undefined, undefined).should.equal(true);
        done();
      });
    });
  });

  suite('les', function () {
    suite('any => false', function () {
      test('undefined x undefined', function (done) {
        cmp.les(undefined, undefined).should.equal(false);
        done();
      });
    });
  });

  suite('id', function () {
    suite('identical => true', function () {
      test('undefined x undefined', function (done) {
        cmp.id(undefined, undefined).should.equal(true);
        done();
      });
    });
  });
});

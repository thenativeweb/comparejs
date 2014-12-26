'use strict';

/*eslint-disable no-unused-vars*/
var should = require('should');
/*eslint-enable no-unused-vars*/

var cmp = require('../lib/compare');

suite('mixed types', function () {
  var f = function () {
    return 23;
  };

  var fAsString = 'function () { return 23; }';

  suite('eq', function () {
    suite('any => false', function () {
      test('number x string', function (done) {
        cmp.eq(0, '').should.equal(false);
        done();
      });

      test('number x boolean', function (done) {
        cmp.eq(0, false).should.equal(false);
        done();
      });

      test('string x boolean', function (done) {
        cmp.eq('', false).should.equal(false);
        done();
      });

      test('function x string', function (done) {
        cmp.eq(f, fAsString).should.equal(false);
        done();
      });
    });
  });

  suite('eqs', function () {
    suite('any => false', function () {
      test('number x string', function (done) {
        cmp.eqs(0, '').should.equal(false);
        done();
      });

      test('number x boolean', function (done) {
        cmp.eqs(0, false).should.equal(false);
        done();
      });

      test('string x boolean', function (done) {
        cmp.eqs('', false).should.equal(false);
        done();
      });

      test('function x string', function (done) {
        cmp.eqs(f, fAsString).should.equal(false);
        done();
      });
    });
  });

  suite('ne', function () {
    suite('any => true', function () {
      test('number x string', function (done) {
        cmp.ne(0, '').should.equal(true);
        done();
      });

      test('number x boolean', function (done) {
        cmp.ne(0, false).should.equal(true);
        done();
      });

      test('string x boolean', function (done) {
        cmp.ne('', false).should.equal(true);
        done();
      });

      test('function x string', function (done) {
        cmp.ne(f, fAsString).should.equal(true);
        done();
      });
    });
  });

  suite('nes', function () {
    suite('any => false', function () {
      test('number x string', function (done) {
        cmp.nes(0, '').should.equal(false);
        done();
      });

      test('number x boolean', function (done) {
        cmp.nes(0, false).should.equal(false);
        done();
      });

      test('string x boolean', function (done) {
        cmp.nes('', false).should.equal(false);
        done();
      });

      test('function x string', function (done) {
        cmp.nes(f, fAsString).should.equal(false);
        done();
      });
    });
  });

  suite('gt', function () {
    suite('any => false', function () {
      test('number x string', function (done) {
        cmp.gt(0, '').should.equal(false);
        done();
      });

      test('number x boolean', function (done) {
        cmp.gt(0, false).should.equal(false);
        done();
      });

      test('string x boolean', function (done) {
        cmp.gt('', false).should.equal(false);
        done();
      });

      test('function x string', function (done) {
        cmp.gt(f, fAsString).should.equal(false);
        done();
      });
    });
  });

  suite('gts', function () {
    suite('any => false', function () {
      test('number x string', function (done) {
        cmp.gts(0, '').should.equal(false);
        done();
      });

      test('number x boolean', function (done) {
        cmp.gts(0, false).should.equal(false);
        done();
      });

      test('string x boolean', function (done) {
        cmp.gts('', false).should.equal(false);
        done();
      });

      test('function x string', function (done) {
        cmp.gts(f, fAsString).should.equal(false);
        done();
      });
    });
  });

  suite('ge', function () {
    suite('any => false', function () {
      test('number x string', function (done) {
        cmp.ge(0, '').should.equal(false);
        done();
      });

      test('number x boolean', function (done) {
        cmp.ge(0, false).should.equal(false);
        done();
      });

      test('string x boolean', function (done) {
        cmp.ge('', false).should.equal(false);
        done();
      });

      test('function x string', function (done) {
        cmp.ge(f, fAsString).should.equal(false);
        done();
      });
    });
  });

  suite('ges', function () {
    suite('any => false', function () {
      test('number x string', function (done) {
        cmp.ges(0, '').should.equal(false);
        done();
      });

      test('number x boolean', function (done) {
        cmp.ges(0, false).should.equal(false);
        done();
      });

      test('string x boolean', function (done) {
        cmp.ges('', false).should.equal(false);
        done();
      });

      test('function x string', function (done) {
        cmp.ges(f, fAsString).should.equal(false);
        done();
      });
    });
  });

  suite('lt', function () {
    suite('any => false', function () {
      test('number x string', function (done) {
        cmp.lt(0, '').should.equal(false);
        done();
      });

      test('number x boolean', function (done) {
        cmp.lt(0, false).should.equal(false);
        done();
      });

      test('string x boolean', function (done) {
        cmp.lt('', false).should.equal(false);
        done();
      });

      test('function x string', function (done) {
        cmp.lt(f, fAsString).should.equal(false);
        done();
      });
    });
  });

  suite('lts', function () {
    suite('any => false', function () {
      test('number x string', function (done) {
        cmp.lts(0, '').should.equal(false);
        done();
      });

      test('number x boolean', function (done) {
        cmp.lts(0, false).should.equal(false);
        done();
      });

      test('string x boolean', function (done) {
        cmp.lts('', false).should.equal(false);
        done();
      });

      test('function x string', function (done) {
        cmp.lts(f, fAsString).should.equal(false);
        done();
      });
    });
  });

  suite('le', function () {
    suite('any => false', function () {
      test('number x string', function (done) {
        cmp.le(0, '').should.equal(false);
        done();
      });

      test('number x boolean', function (done) {
        cmp.le(0, false).should.equal(false);
        done();
      });

      test('string x boolean', function (done) {
        cmp.le('', false).should.equal(false);
        done();
      });

      test('function x string', function (done) {
        cmp.le(f, fAsString).should.equal(false);
        done();
      });
    });
  });

  suite('les', function () {
    suite('any => false', function () {
      test('number x string', function (done) {
        cmp.les(0, '').should.equal(false);
        done();
      });

      test('number x boolean', function (done) {
        cmp.les(0, false).should.equal(false);
        done();
      });

      test('string x boolean', function (done) {
        cmp.les('', false).should.equal(false);
        done();
      });

      test('function x string', function (done) {
        cmp.les(f, fAsString).should.equal(false);
        done();
      });
    });
  });

  suite('id', function () {
    suite('any => false', function () {
      test('number x string', function (done) {
        cmp.id(0, '').should.equal(false);
        done();
      });

      test('number x boolean', function (done) {
        cmp.id(0, false).should.equal(false);
        done();
      });

      test('string x boolean', function (done) {
        cmp.id('', false).should.equal(false);
        done();
      });

      test('function x string', function (done) {
        cmp.id(f, fAsString).should.equal(false);
        done();
      });
    });
  });
});

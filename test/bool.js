'use strict';

/*eslint-disable no-unused-vars*/
var should = require('should');
/*eslint-enable no-unused-vars*/

var cmp = require('../lib/compare');

suite('bool x bool', function () {
  /*eslint-disable no-new-wrappers*/
  var False = new Boolean(false),
      True = new Boolean(true);
  /*eslint-enable no-new-wrappers*/

  suite('eq', function () {
    suite('equal => true', function () {
      test('true x true', function (done) {
        cmp.eq(true, true).should.equal(true);
        done();
      });

      test('true x True()', function (done) {
        cmp.eq(true, True).should.equal(true);
        done();
      });

      test('True() x true', function (done) {
        cmp.eq(True, true).should.equal(true);
        done();
      });

      test('True() x True()', function (done) {
        cmp.eq(True, True).should.equal(true);
        done();
      });

      test('false x false', function (done) {
        cmp.eq(false, false).should.equal(true);
        done();
      });

      test('false x False()', function (done) {
        cmp.eq(false, False).should.equal(true);
        done();
      });

      test('False() x false', function (done) {
        cmp.eq(False, false).should.equal(true);
        done();
      });

      test('False() x False()', function (done) {
        cmp.eq(False, False).should.equal(true);
        done();
      });
    });

    suite('not equal => false', function () {
      test('true x false', function (done) {
        cmp.eq(true, false).should.equal(false);
        done();
      });

      test('true x False()', function (done) {
        cmp.eq(true, False).should.equal(false);
        done();
      });

      test('True() x false', function (done) {
        cmp.eq(True, false).should.equal(false);
        done();
      });

      test('True() x False()', function (done) {
        cmp.eq(True, False).should.equal(false);
        done();
      });

      test('false x true', function (done) {
        cmp.eq(false, true).should.equal(false);
        done();
      });

      test('false x True()', function (done) {
        cmp.eq(false, True).should.equal(false);
        done();
      });

      test('False() x true', function (done) {
        cmp.eq(False, true).should.equal(false);
        done();
      });

      test('False() x True()', function (done) {
        cmp.eq(False, True).should.equal(false);
        done();
      });
    });
  });

  suite('eqs', function () {
    suite('any => false', function () {
      test('true x true', function (done) {
        cmp.eqs(true, true).should.equal(false);
        done();
      });
    });
  });

  suite('ne', function () {
    suite('equal => false', function () {
      test('true x true', function (done) {
        cmp.ne(true, true).should.equal(false);
        done();
      });

      test('true x True()', function (done) {
        cmp.ne(true, True).should.equal(false);
        done();
      });

      test('True() x true', function (done) {
        cmp.ne(True, true).should.equal(false);
        done();
      });

      test('True() x True()', function (done) {
        cmp.ne(True, True).should.equal(false);
        done();
      });

      test('false x false', function (done) {
        cmp.ne(false, false).should.equal(false);
        done();
      });

      test('false x False()', function (done) {
        cmp.ne(false, False).should.equal(false);
        done();
      });

      test('False() x false', function (done) {
        cmp.ne(False, false).should.equal(false);
        done();
      });

      test('False() x False()', function (done) {
        cmp.ne(False, False).should.equal(false);
        done();
      });
    });

    suite('not equal => true', function () {
      test('true x false', function (done) {
        cmp.ne(true, false).should.equal(true);
        done();
      });

      test('true x False()', function (done) {
        cmp.ne(true, False).should.equal(true);
        done();
      });

      test('True() x false', function (done) {
        cmp.ne(True, false).should.equal(true);
        done();
      });

      test('True() x False()', function (done) {
        cmp.ne(True, False).should.equal(true);
        done();
      });

      test('false x true', function (done) {
        cmp.ne(false, true).should.equal(true);
        done();
      });

      test('false x True()', function (done) {
        cmp.ne(false, True).should.equal(true);
        done();
      });

      test('False() x true', function (done) {
        cmp.ne(False, true).should.equal(true);
        done();
      });

      test('False() x True()', function (done) {
        cmp.ne(False, True).should.equal(true);
        done();
      });
    });
  });

  suite('nes', function () {
    suite('any => false', function () {
      test('true x true', function (done) {
        cmp.nes(true, true).should.equal(false);
        done();
      });
    });
  });

  suite('gt', function () {
    suite('greater => true', function () {
      test('true x false', function (done) {
        cmp.gt(true, false).should.equal(true);
        done();
      });

      test('true x False()', function (done) {
        cmp.gt(true, False).should.equal(true);
        done();
      });

      test('True() x false', function (done) {
        cmp.gt(True, false).should.equal(true);
        done();
      });

      test('True() x False()', function (done) {
        cmp.gt(True, False).should.equal(true);
        done();
      });
    });

    suite('equal => false', function () {
      test('true x true', function (done) {
        cmp.gt(true, true).should.equal(false);
        done();
      });

      test('true x True()', function (done) {
        cmp.gt(true, True).should.equal(false);
        done();
      });

      test('True() x true', function (done) {
        cmp.gt(True, true).should.equal(false);
        done();
      });

      test('True() x True()', function (done) {
        cmp.gt(True, True).should.equal(false);
        done();
      });

      test('false x false', function (done) {
        cmp.gt(false, false).should.equal(false);
        done();
      });

      test('false x False()', function (done) {
        cmp.gt(false, False).should.equal(false);
        done();
      });

      test('False() x false', function (done) {
        cmp.gt(False, false).should.equal(false);
        done();
      });

      test('False() x False()', function (done) {
        cmp.gt(False, False).should.equal(false);
        done();
      });
    });

    suite('less => false', function () {
      test('false x true', function (done) {
        cmp.gt(false, true).should.equal(false);
        done();
      });

      test('false x True()', function (done) {
        cmp.gt(false, True).should.equal(false);
        done();
      });

      test('False() x true', function (done) {
        cmp.gt(False, true).should.equal(false);
        done();
      });

      test('False() x True()', function (done) {
        cmp.gt(False, True).should.equal(false);
        done();
      });
    });
  });

  suite('gts', function () {
    suite('any => false', function () {
      test('true x true', function (done) {
        cmp.gts(true, true).should.equal(false);
        done();
      });
    });
  });

  suite('ge', function () {
    suite('greater => true', function () {
      test('true x false', function (done) {
        cmp.ge(true, false).should.equal(true);
        done();
      });

      test('true x False()', function (done) {
        cmp.ge(true, False).should.equal(true);
        done();
      });

      test('True() x false', function (done) {
        cmp.ge(True, false).should.equal(true);
        done();
      });

      test('True() x False()', function (done) {
        cmp.ge(True, False).should.equal(true);
        done();
      });
    });

    suite('equal => true', function () {
      test('true x true', function (done) {
        cmp.ge(true, true).should.equal(true);
        done();
      });

      test('true x True()', function (done) {
        cmp.ge(true, True).should.equal(true);
        done();
      });

      test('True() x true', function (done) {
        cmp.ge(True, true).should.equal(true);
        done();
      });

      test('True() x True()', function (done) {
        cmp.ge(True, True).should.equal(true);
        done();
      });

      test('false x false', function (done) {
        cmp.ge(false, false).should.equal(true);
        done();
      });

      test('false x False()', function (done) {
        cmp.ge(false, False).should.equal(true);
        done();
      });

      test('False() x false', function (done) {
        cmp.ge(False, false).should.equal(true);
        done();
      });

      test('False() x False()', function (done) {
        cmp.ge(False, False).should.equal(true);
        done();
      });
    });

    suite('less => false', function () {
      test('false x true', function (done) {
        cmp.ge(false, true).should.equal(false);
        done();
      });

      test('false x True()', function (done) {
        cmp.ge(false, True).should.equal(false);
        done();
      });

      test('False() x true', function (done) {
        cmp.ge(False, true).should.equal(false);
        done();
      });

      test('False() x True()', function (done) {
        cmp.ge(False, True).should.equal(false);
        done();
      });
    });
  });

  suite('ges', function () {
    suite('any => false', function () {
      test('true x true', function (done) {
        cmp.ges(true, true).should.equal(false);
        done();
      });
    });
  });

  suite('lt', function () {
    suite('greater => false', function () {
      test('true x false', function (done) {
        cmp.lt(true, false).should.equal(false);
        done();
      });

      test('true x False()', function (done) {
        cmp.lt(true, False).should.equal(false);
        done();
      });

      test('True() x false', function (done) {
        cmp.lt(True, false).should.equal(false);
        done();
      });

      test('True() x False()', function (done) {
        cmp.lt(True, False).should.equal(false);
        done();
      });
    });

    suite('equal => false', function () {
      test('true x true', function (done) {
        cmp.lt(true, true).should.equal(false);
        done();
      });

      test('true x True()', function (done) {
        cmp.lt(true, True).should.equal(false);
        done();
      });

      test('True() x true', function (done) {
        cmp.lt(True, true).should.equal(false);
        done();
      });

      test('True() x True()', function (done) {
        cmp.lt(True, True).should.equal(false);
        done();
      });

      test('false x false', function (done) {
        cmp.lt(false, false).should.equal(false);
        done();
      });

      test('false x False()', function (done) {
        cmp.lt(false, False).should.equal(false);
        done();
      });

      test('False() x false', function (done) {
        cmp.lt(False, false).should.equal(false);
        done();
      });

      test('False() x False()', function (done) {
        cmp.lt(False, False).should.equal(false);
        done();
      });
    });

    suite('less => true', function () {
      test('false x true', function (done) {
        cmp.lt(false, true).should.equal(true);
        done();
      });

      test('false x True()', function (done) {
        cmp.lt(false, True).should.equal(true);
        done();
      });

      test('False() x true', function (done) {
        cmp.lt(False, true).should.equal(true);
        done();
      });

      test('False() x True()', function (done) {
        cmp.lt(False, True).should.equal(true);
        done();
      });
    });
  });

  suite('lts', function () {
    suite('any => false', function () {
      test('true x true', function (done) {
        cmp.lts(true, true).should.equal(false);
        done();
      });
    });
  });

  suite('le', function () {
    suite('greater => false', function () {
      test('true x false', function (done) {
        cmp.le(true, false).should.equal(false);
        done();
      });

      test('true x False()', function (done) {
        cmp.le(true, False).should.equal(false);
        done();
      });

      test('True() x false', function (done) {
        cmp.le(True, false).should.equal(false);
        done();
      });

      test('True() x False()', function (done) {
        cmp.le(True, False).should.equal(false);
        done();
      });
    });

    suite('equal => true', function () {
      test('true x true', function (done) {
        cmp.le(true, true).should.equal(true);
        done();
      });

      test('true x True()', function (done) {
        cmp.le(true, True).should.equal(true);
        done();
      });

      test('True() x true', function (done) {
        cmp.le(True, true).should.equal(true);
        done();
      });

      test('True() x True()', function (done) {
        cmp.le(True, True).should.equal(true);
        done();
      });

      test('false x false', function (done) {
        cmp.le(false, false).should.equal(true);
        done();
      });

      test('false x False()', function (done) {
        cmp.le(false, False).should.equal(true);
        done();
      });

      test('False() x false', function (done) {
        cmp.le(False, false).should.equal(true);
        done();
      });

      test('False() x False()', function (done) {
        cmp.le(False, False).should.equal(true);
        done();
      });
    });

    suite('less => true', function () {
      test('false x true', function (done) {
        cmp.le(false, true).should.equal(true);
        done();
      });

      test('false x True()', function (done) {
        cmp.le(false, True).should.equal(true);
        done();
      });

      test('False() x true', function (done) {
        cmp.le(False, true).should.equal(true);
        done();
      });

      test('False() x True()', function (done) {
        cmp.le(False, True).should.equal(true);
        done();
      });
    });
  });

  suite('les', function () {
    suite('any => false', function () {
      test('true x true', function (done) {
        cmp.les(true, true).should.equal(false);
        done();
      });
    });
  });

  suite('id', function () {
    suite('identical => true', function () {
      test('true x true', function (done) {
        cmp.id(true, true).should.equal(true);
        done();
      });

      test('true x True()', function (done) {
        cmp.id(true, True).should.equal(true);
        done();
      });

      test('True() x true', function (done) {
        cmp.id(True, true).should.equal(true);
        done();
      });

      test('True() x True()', function (done) {
        cmp.id(True, True).should.equal(true);
        done();
      });

      test('false x false', function (done) {
        cmp.id(false, false).should.equal(true);
        done();
      });

      test('false x False()', function (done) {
        cmp.id(false, False).should.equal(true);
        done();
      });

      test('False() x false', function (done) {
        cmp.id(False, false).should.equal(true);
        done();
      });

      test('False() x False()', function (done) {
        cmp.id(False, False).should.equal(true);
        done();
      });
    });

    suite('not identical => false', function () {
      test('true x false', function (done) {
        cmp.id(true, false).should.equal(false);
        done();
      });

      test('true x False()', function (done) {
        cmp.id(true, False).should.equal(false);
        done();
      });

      test('True() x false', function (done) {
        cmp.id(True, false).should.equal(false);
        done();
      });

      test('True() x False()', function (done) {
        cmp.id(True, False).should.equal(false);
        done();
      });

      test('false x true', function (done) {
        cmp.id(false, true).should.equal(false);
        done();
      });

      test('false x True()', function (done) {
        cmp.id(false, True).should.equal(false);
        done();
      });

      test('False() x true', function (done) {
        cmp.id(False, true).should.equal(false);
        done();
      });

      test('False() x True()', function (done) {
        cmp.id(False, True).should.equal(false);
        done();
      });
    });
  });
});

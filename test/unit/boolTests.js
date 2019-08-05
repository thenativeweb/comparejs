'use strict';

/* eslint-disable no-unused-vars */
const should = require('should');
/* eslint-enable no-unused-vars */

const cmp = require('../../lib/compare');

suite('bool x bool', () => {
  /* eslint-disable no-new-wrappers, unicorn/new-for-builtins */
  const False = new Boolean(false),
        True = new Boolean(true);
  /* eslint-enable no-new-wrappers, unicorn/new-for-builtins */

  suite('eq', () => {
    suite('equal => true', () => {
      test('true x true', done => {
        cmp.eq(true, true).should.equal(true);
        done();
      });

      test('true x True()', done => {
        cmp.eq(true, True).should.equal(true);
        done();
      });

      test('True() x true', done => {
        cmp.eq(True, true).should.equal(true);
        done();
      });

      test('True() x True()', done => {
        cmp.eq(True, True).should.equal(true);
        done();
      });

      test('false x false', done => {
        cmp.eq(false, false).should.equal(true);
        done();
      });

      test('false x False()', done => {
        cmp.eq(false, False).should.equal(true);
        done();
      });

      test('False() x false', done => {
        cmp.eq(False, false).should.equal(true);
        done();
      });

      test('False() x False()', done => {
        cmp.eq(False, False).should.equal(true);
        done();
      });
    });

    suite('not equal => false', () => {
      test('true x false', done => {
        cmp.eq(true, false).should.equal(false);
        done();
      });

      test('true x False()', done => {
        cmp.eq(true, False).should.equal(false);
        done();
      });

      test('True() x false', done => {
        cmp.eq(True, false).should.equal(false);
        done();
      });

      test('True() x False()', done => {
        cmp.eq(True, False).should.equal(false);
        done();
      });

      test('false x true', done => {
        cmp.eq(false, true).should.equal(false);
        done();
      });

      test('false x True()', done => {
        cmp.eq(false, True).should.equal(false);
        done();
      });

      test('False() x true', done => {
        cmp.eq(False, true).should.equal(false);
        done();
      });

      test('False() x True()', done => {
        cmp.eq(False, True).should.equal(false);
        done();
      });
    });
  });

  suite('eqs', () => {
    suite('any => false', () => {
      test('true x true', done => {
        cmp.eqs(true, true).should.equal(false);
        done();
      });
    });
  });

  suite('ne', () => {
    suite('equal => false', () => {
      test('true x true', done => {
        cmp.ne(true, true).should.equal(false);
        done();
      });

      test('true x True()', done => {
        cmp.ne(true, True).should.equal(false);
        done();
      });

      test('True() x true', done => {
        cmp.ne(True, true).should.equal(false);
        done();
      });

      test('True() x True()', done => {
        cmp.ne(True, True).should.equal(false);
        done();
      });

      test('false x false', done => {
        cmp.ne(false, false).should.equal(false);
        done();
      });

      test('false x False()', done => {
        cmp.ne(false, False).should.equal(false);
        done();
      });

      test('False() x false', done => {
        cmp.ne(False, false).should.equal(false);
        done();
      });

      test('False() x False()', done => {
        cmp.ne(False, False).should.equal(false);
        done();
      });
    });

    suite('not equal => true', () => {
      test('true x false', done => {
        cmp.ne(true, false).should.equal(true);
        done();
      });

      test('true x False()', done => {
        cmp.ne(true, False).should.equal(true);
        done();
      });

      test('True() x false', done => {
        cmp.ne(True, false).should.equal(true);
        done();
      });

      test('True() x False()', done => {
        cmp.ne(True, False).should.equal(true);
        done();
      });

      test('false x true', done => {
        cmp.ne(false, true).should.equal(true);
        done();
      });

      test('false x True()', done => {
        cmp.ne(false, True).should.equal(true);
        done();
      });

      test('False() x true', done => {
        cmp.ne(False, true).should.equal(true);
        done();
      });

      test('False() x True()', done => {
        cmp.ne(False, True).should.equal(true);
        done();
      });
    });
  });

  suite('nes', () => {
    suite('any => false', () => {
      test('true x true', done => {
        cmp.nes(true, true).should.equal(false);
        done();
      });
    });
  });

  suite('gt', () => {
    suite('greater => true', () => {
      test('true x false', done => {
        cmp.gt(true, false).should.equal(true);
        done();
      });

      test('true x False()', done => {
        cmp.gt(true, False).should.equal(true);
        done();
      });

      test('True() x false', done => {
        cmp.gt(True, false).should.equal(true);
        done();
      });

      test('True() x False()', done => {
        cmp.gt(True, False).should.equal(true);
        done();
      });
    });

    suite('equal => false', () => {
      test('true x true', done => {
        cmp.gt(true, true).should.equal(false);
        done();
      });

      test('true x True()', done => {
        cmp.gt(true, True).should.equal(false);
        done();
      });

      test('True() x true', done => {
        cmp.gt(True, true).should.equal(false);
        done();
      });

      test('True() x True()', done => {
        cmp.gt(True, True).should.equal(false);
        done();
      });

      test('false x false', done => {
        cmp.gt(false, false).should.equal(false);
        done();
      });

      test('false x False()', done => {
        cmp.gt(false, False).should.equal(false);
        done();
      });

      test('False() x false', done => {
        cmp.gt(False, false).should.equal(false);
        done();
      });

      test('False() x False()', done => {
        cmp.gt(False, False).should.equal(false);
        done();
      });
    });

    suite('less => false', () => {
      test('false x true', done => {
        cmp.gt(false, true).should.equal(false);
        done();
      });

      test('false x True()', done => {
        cmp.gt(false, True).should.equal(false);
        done();
      });

      test('False() x true', done => {
        cmp.gt(False, true).should.equal(false);
        done();
      });

      test('False() x True()', done => {
        cmp.gt(False, True).should.equal(false);
        done();
      });
    });
  });

  suite('gts', () => {
    suite('any => false', () => {
      test('true x true', done => {
        cmp.gts(true, true).should.equal(false);
        done();
      });
    });
  });

  suite('gte', () => {
    suite('greater => true', () => {
      test('true x false', done => {
        cmp.gte(true, false).should.equal(true);
        done();
      });

      test('true x False()', done => {
        cmp.gte(true, False).should.equal(true);
        done();
      });

      test('True() x false', done => {
        cmp.gte(True, false).should.equal(true);
        done();
      });

      test('True() x False()', done => {
        cmp.gte(True, False).should.equal(true);
        done();
      });
    });

    suite('equal => true', () => {
      test('true x true', done => {
        cmp.gte(true, true).should.equal(true);
        done();
      });

      test('true x True()', done => {
        cmp.gte(true, True).should.equal(true);
        done();
      });

      test('True() x true', done => {
        cmp.gte(True, true).should.equal(true);
        done();
      });

      test('True() x True()', done => {
        cmp.gte(True, True).should.equal(true);
        done();
      });

      test('false x false', done => {
        cmp.gte(false, false).should.equal(true);
        done();
      });

      test('false x False()', done => {
        cmp.gte(false, False).should.equal(true);
        done();
      });

      test('False() x false', done => {
        cmp.gte(False, false).should.equal(true);
        done();
      });

      test('False() x False()', done => {
        cmp.gte(False, False).should.equal(true);
        done();
      });
    });

    suite('less => false', () => {
      test('false x true', done => {
        cmp.gte(false, true).should.equal(false);
        done();
      });

      test('false x True()', done => {
        cmp.gte(false, True).should.equal(false);
        done();
      });

      test('False() x true', done => {
        cmp.gte(False, true).should.equal(false);
        done();
      });

      test('False() x True()', done => {
        cmp.gte(False, True).should.equal(false);
        done();
      });
    });
  });

  suite('gtes', () => {
    suite('any => false', () => {
      test('true x true', done => {
        cmp.gtes(true, true).should.equal(false);
        done();
      });
    });
  });

  suite('lt', () => {
    suite('greater => false', () => {
      test('true x false', done => {
        cmp.lt(true, false).should.equal(false);
        done();
      });

      test('true x False()', done => {
        cmp.lt(true, False).should.equal(false);
        done();
      });

      test('True() x false', done => {
        cmp.lt(True, false).should.equal(false);
        done();
      });

      test('True() x False()', done => {
        cmp.lt(True, False).should.equal(false);
        done();
      });
    });

    suite('equal => false', () => {
      test('true x true', done => {
        cmp.lt(true, true).should.equal(false);
        done();
      });

      test('true x True()', done => {
        cmp.lt(true, True).should.equal(false);
        done();
      });

      test('True() x true', done => {
        cmp.lt(True, true).should.equal(false);
        done();
      });

      test('True() x True()', done => {
        cmp.lt(True, True).should.equal(false);
        done();
      });

      test('false x false', done => {
        cmp.lt(false, false).should.equal(false);
        done();
      });

      test('false x False()', done => {
        cmp.lt(false, False).should.equal(false);
        done();
      });

      test('False() x false', done => {
        cmp.lt(False, false).should.equal(false);
        done();
      });

      test('False() x False()', done => {
        cmp.lt(False, False).should.equal(false);
        done();
      });
    });

    suite('less => true', () => {
      test('false x true', done => {
        cmp.lt(false, true).should.equal(true);
        done();
      });

      test('false x True()', done => {
        cmp.lt(false, True).should.equal(true);
        done();
      });

      test('False() x true', done => {
        cmp.lt(False, true).should.equal(true);
        done();
      });

      test('False() x True()', done => {
        cmp.lt(False, True).should.equal(true);
        done();
      });
    });
  });

  suite('lts', () => {
    suite('any => false', () => {
      test('true x true', done => {
        cmp.lts(true, true).should.equal(false);
        done();
      });
    });
  });

  suite('lte', () => {
    suite('greater => false', () => {
      test('true x false', done => {
        cmp.lte(true, false).should.equal(false);
        done();
      });

      test('true x False()', done => {
        cmp.lte(true, False).should.equal(false);
        done();
      });

      test('True() x false', done => {
        cmp.lte(True, false).should.equal(false);
        done();
      });

      test('True() x False()', done => {
        cmp.lte(True, False).should.equal(false);
        done();
      });
    });

    suite('equal => true', () => {
      test('true x true', done => {
        cmp.lte(true, true).should.equal(true);
        done();
      });

      test('true x True()', done => {
        cmp.lte(true, True).should.equal(true);
        done();
      });

      test('True() x true', done => {
        cmp.lte(True, true).should.equal(true);
        done();
      });

      test('True() x True()', done => {
        cmp.lte(True, True).should.equal(true);
        done();
      });

      test('false x false', done => {
        cmp.lte(false, false).should.equal(true);
        done();
      });

      test('false x False()', done => {
        cmp.lte(false, False).should.equal(true);
        done();
      });

      test('False() x false', done => {
        cmp.lte(False, false).should.equal(true);
        done();
      });

      test('False() x False()', done => {
        cmp.lte(False, False).should.equal(true);
        done();
      });
    });

    suite('less => true', () => {
      test('false x true', done => {
        cmp.lte(false, true).should.equal(true);
        done();
      });

      test('false x True()', done => {
        cmp.lte(false, True).should.equal(true);
        done();
      });

      test('False() x true', done => {
        cmp.lte(False, true).should.equal(true);
        done();
      });

      test('False() x True()', done => {
        cmp.lte(False, True).should.equal(true);
        done();
      });
    });
  });

  suite('ltes', () => {
    suite('any => false', () => {
      test('true x true', done => {
        cmp.ltes(true, true).should.equal(false);
        done();
      });
    });
  });

  suite('id', () => {
    suite('identical => true', () => {
      test('true x true', done => {
        cmp.id(true, true).should.equal(true);
        done();
      });

      test('True() x True()', done => {
        cmp.id(True, True).should.equal(true);
        done();
      });

      test('false x false', done => {
        cmp.id(false, false).should.equal(true);
        done();
      });

      test('False() x False()', done => {
        cmp.id(False, False).should.equal(true);
        done();
      });
    });

    suite('not identical => false', () => {
      test('true x false', done => {
        cmp.id(true, false).should.equal(false);
        done();
      });

      test('true x False()', done => {
        cmp.id(true, False).should.equal(false);
        done();
      });

      test('True() x false', done => {
        cmp.id(True, false).should.equal(false);
        done();
      });

      test('True() x False()', done => {
        cmp.id(True, False).should.equal(false);
        done();
      });

      test('false x true', done => {
        cmp.id(false, true).should.equal(false);
        done();
      });

      test('false x True()', done => {
        cmp.id(false, True).should.equal(false);
        done();
      });

      test('False() x true', done => {
        cmp.id(False, true).should.equal(false);
        done();
      });

      test('False() x True()', done => {
        cmp.id(False, True).should.equal(false);
        done();
      });

      test('true x True()', done => {
        cmp.id(true, True).should.equal(false);
        done();
      });

      test('True() x true', done => {
        cmp.id(True, true).should.equal(false);
        done();
      });

      test('false x False()', done => {
        cmp.id(false, False).should.equal(false);
        done();
      });

      test('False() x false', done => {
        cmp.id(False, false).should.equal(false);
        done();
      });
    });
  });
});

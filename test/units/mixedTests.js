'use strict';

/* eslint-disable no-unused-vars */
const should = require('should');
/* eslint-enable no-unused-vars */

const cmp = require('../../src/compare');

suite('mixed types', () => {
  const fn = function () {
    return 23;
  };

  const fAsString = 'function () { return 23; }';

  suite('eq', () => {
    suite('any => false', () => {
      test('number x string', done => {
        cmp.eq(0, '').should.equal(false);
        done();
      });

      test('number x boolean', done => {
        cmp.eq(0, false).should.equal(false);
        done();
      });

      test('string x boolean', done => {
        cmp.eq('', false).should.equal(false);
        done();
      });

      test('function x string', done => {
        cmp.eq(fn, fAsString).should.equal(false);
        done();
      });
    });
  });

  suite('eqs', () => {
    suite('any => false', () => {
      test('number x string', done => {
        cmp.eqs(0, '').should.equal(false);
        done();
      });

      test('number x boolean', done => {
        cmp.eqs(0, false).should.equal(false);
        done();
      });

      test('string x boolean', done => {
        cmp.eqs('', false).should.equal(false);
        done();
      });

      test('function x string', done => {
        cmp.eqs(fn, fAsString).should.equal(false);
        done();
      });
    });
  });

  suite('ne', () => {
    suite('any => true', () => {
      test('number x string', done => {
        cmp.ne(0, '').should.equal(true);
        done();
      });

      test('number x boolean', done => {
        cmp.ne(0, false).should.equal(true);
        done();
      });

      test('string x boolean', done => {
        cmp.ne('', false).should.equal(true);
        done();
      });

      test('function x string', done => {
        cmp.ne(fn, fAsString).should.equal(true);
        done();
      });
    });
  });

  suite('nes', () => {
    suite('any => false', () => {
      test('number x string', done => {
        cmp.nes(0, '').should.equal(false);
        done();
      });

      test('number x boolean', done => {
        cmp.nes(0, false).should.equal(false);
        done();
      });

      test('string x boolean', done => {
        cmp.nes('', false).should.equal(false);
        done();
      });

      test('function x string', done => {
        cmp.nes(fn, fAsString).should.equal(false);
        done();
      });
    });
  });

  suite('gt', () => {
    suite('any => false', () => {
      test('number x string', done => {
        cmp.gt(0, '').should.equal(false);
        done();
      });

      test('number x boolean', done => {
        cmp.gt(0, false).should.equal(false);
        done();
      });

      test('string x boolean', done => {
        cmp.gt('', false).should.equal(false);
        done();
      });

      test('function x string', done => {
        cmp.gt(fn, fAsString).should.equal(false);
        done();
      });
    });
  });

  suite('gts', () => {
    suite('any => false', () => {
      test('number x string', done => {
        cmp.gts(0, '').should.equal(false);
        done();
      });

      test('number x boolean', done => {
        cmp.gts(0, false).should.equal(false);
        done();
      });

      test('string x boolean', done => {
        cmp.gts('', false).should.equal(false);
        done();
      });

      test('function x string', done => {
        cmp.gts(fn, fAsString).should.equal(false);
        done();
      });
    });
  });

  suite('gte', () => {
    suite('any => false', () => {
      test('number x string', done => {
        cmp.gte(0, '').should.equal(false);
        done();
      });

      test('number x boolean', done => {
        cmp.gte(0, false).should.equal(false);
        done();
      });

      test('string x boolean', done => {
        cmp.gte('', false).should.equal(false);
        done();
      });

      test('function x string', done => {
        cmp.gte(fn, fAsString).should.equal(false);
        done();
      });
    });
  });

  suite('gtes', () => {
    suite('any => false', () => {
      test('number x string', done => {
        cmp.gtes(0, '').should.equal(false);
        done();
      });

      test('number x boolean', done => {
        cmp.gtes(0, false).should.equal(false);
        done();
      });

      test('string x boolean', done => {
        cmp.gtes('', false).should.equal(false);
        done();
      });

      test('function x string', done => {
        cmp.gtes(fn, fAsString).should.equal(false);
        done();
      });
    });
  });

  suite('lt', () => {
    suite('any => false', () => {
      test('number x string', done => {
        cmp.lt(0, '').should.equal(false);
        done();
      });

      test('number x boolean', done => {
        cmp.lt(0, false).should.equal(false);
        done();
      });

      test('string x boolean', done => {
        cmp.lt('', false).should.equal(false);
        done();
      });

      test('function x string', done => {
        cmp.lt(fn, fAsString).should.equal(false);
        done();
      });
    });
  });

  suite('lts', () => {
    suite('any => false', () => {
      test('number x string', done => {
        cmp.lts(0, '').should.equal(false);
        done();
      });

      test('number x boolean', done => {
        cmp.lts(0, false).should.equal(false);
        done();
      });

      test('string x boolean', done => {
        cmp.lts('', false).should.equal(false);
        done();
      });

      test('function x string', done => {
        cmp.lts(fn, fAsString).should.equal(false);
        done();
      });
    });
  });

  suite('lte', () => {
    suite('any => false', () => {
      test('number x string', done => {
        cmp.lte(0, '').should.equal(false);
        done();
      });

      test('number x boolean', done => {
        cmp.lte(0, false).should.equal(false);
        done();
      });

      test('string x boolean', done => {
        cmp.lte('', false).should.equal(false);
        done();
      });

      test('function x string', done => {
        cmp.lte(fn, fAsString).should.equal(false);
        done();
      });
    });
  });

  suite('ltes', () => {
    suite('any => false', () => {
      test('number x string', done => {
        cmp.ltes(0, '').should.equal(false);
        done();
      });

      test('number x boolean', done => {
        cmp.ltes(0, false).should.equal(false);
        done();
      });

      test('string x boolean', done => {
        cmp.ltes('', false).should.equal(false);
        done();
      });

      test('function x string', done => {
        cmp.ltes(fn, fAsString).should.equal(false);
        done();
      });
    });
  });

  suite('id', () => {
    suite('any => false', () => {
      test('number x string', done => {
        cmp.id(0, '').should.equal(false);
        done();
      });

      test('number x boolean', done => {
        cmp.id(0, false).should.equal(false);
        done();
      });

      test('string x boolean', done => {
        cmp.id('', false).should.equal(false);
        done();
      });

      test('function x string', done => {
        cmp.id(fn, fAsString).should.equal(false);
        done();
      });
    });
  });
});

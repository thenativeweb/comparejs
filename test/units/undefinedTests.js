'use strict';

/* eslint-disable no-unused-vars */
const should = require('should');
/* eslint-enable no-unused-vars */

const cmp = require('../../src/compare');

suite('undefined x undefined', () => {
  suite('eq', () => {
    suite('equal => true', () => {
      test('undefined x undefined', done => {
        cmp.eq(undefined, undefined).should.equal(true);
        done();
      });
    });
  });

  suite('eqs', () => {
    suite('any => false', () => {
      test('undefined x undefined', done => {
        cmp.eqs(undefined, undefined).should.equal(false);
        done();
      });
    });
  });

  suite('ne', () => {
    suite('equal => false', () => {
      test('undefined x undefined', done => {
        cmp.ne(undefined, undefined).should.equal(false);
        done();
      });
    });
  });

  suite('nes', () => {
    suite('any => false', () => {
      test('undefined x undefined', done => {
        cmp.nes(undefined, undefined).should.equal(false);
        done();
      });
    });
  });

  suite('gt', () => {
    suite('equal => false', () => {
      test('undefined x undefined', done => {
        cmp.gt(undefined, undefined).should.equal(false);
        done();
      });
    });
  });

  suite('gts', () => {
    suite('any => false', () => {
      test('undefined x undefined', done => {
        cmp.gts(undefined, undefined).should.equal(false);
        done();
      });
    });
  });

  suite('gte', () => {
    suite('equal => true', () => {
      test('undefined x undefined', done => {
        cmp.gte(undefined, undefined).should.equal(true);
        done();
      });
    });
  });

  suite('gtes', () => {
    suite('any => false', () => {
      test('undefined x undefined', done => {
        cmp.gtes(undefined, undefined).should.equal(false);
        done();
      });
    });
  });

  suite('lt', () => {
    suite('equal => false', () => {
      test('undefined x undefined', done => {
        cmp.lt(undefined, undefined).should.equal(false);
        done();
      });
    });
  });

  suite('lts', () => {
    suite('any => false', () => {
      test('undefined x undefined', done => {
        cmp.lts(undefined, undefined).should.equal(false);
        done();
      });
    });
  });

  suite('lte', () => {
    suite('equal => true', () => {
      test('undefined x undefined', done => {
        cmp.lte(undefined, undefined).should.equal(true);
        done();
      });
    });
  });

  suite('ltes', () => {
    suite('any => false', () => {
      test('undefined x undefined', done => {
        cmp.ltes(undefined, undefined).should.equal(false);
        done();
      });
    });
  });

  suite('id', () => {
    suite('identical => true', () => {
      test('undefined x undefined', done => {
        cmp.id(undefined, undefined).should.equal(true);
        done();
      });
    });
  });
});

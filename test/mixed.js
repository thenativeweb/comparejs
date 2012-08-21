var cmp = require('../lib/index'),
    should = require('should');

suite('mixed types', function () {
  var f         = function () { return 23; },
      fAsString = 'function () { return 23; }';

  suite('eq', function () {
    suite('any => false', function () {
      test('number x string'  , function () { cmp.eq( 0,        '').should.equal(false); });
      test('number x boolean' , function () { cmp.eq( 0,     false).should.equal(false); });
      test('string x boolean' , function () { cmp.eq('',     false).should.equal(false); });
      test('function x string', function () { cmp.eq( f, fAsString).should.equal(false); });
    });
  });

  suite('ne', function () {
    suite('any => true', function () {
      test('number x string'  , function () { cmp.ne( 0,        '').should.equal(true); });
      test('number x boolean' , function () { cmp.ne( 0,     false).should.equal(true); });
      test('string x boolean' , function () { cmp.ne('',     false).should.equal(true); });
      test('function x string', function () { cmp.ne( f, fAsString).should.equal(true); });
    });
  });

  suite('gt', function () {
    suite('any => false', function () {
      test('number x string'  , function () { cmp.gt( 0,        '').should.equal(false); });
      test('number x boolean' , function () { cmp.gt( 0,     false).should.equal(false); });
      test('string x boolean' , function () { cmp.gt('',     false).should.equal(false); });
      test('function x string', function () { cmp.gt( f, fAsString).should.equal(false); });
    });
  });

  suite('ge', function () {
    suite('any => false', function () {
      test('number x string'  , function () { cmp.ge( 0,        '').should.equal(false); });
      test('number x boolean' , function () { cmp.ge( 0,     false).should.equal(false); });
      test('string x boolean' , function () { cmp.ge('',     false).should.equal(false); });
      test('function x string', function () { cmp.ge( f, fAsString).should.equal(false); });
    });
  });

  suite('lt', function () {
    suite('any => false', function () {
      test('number x string'  , function () { cmp.lt( 0,        '').should.equal(false); });
      test('number x boolean' , function () { cmp.lt( 0,     false).should.equal(false); });
      test('string x boolean' , function () { cmp.lt('',     false).should.equal(false); });
      test('function x string', function () { cmp.lt( f, fAsString).should.equal(false); });
    });
  });

  suite('le', function () {
    suite('any => false', function () {
      test('number x string'  , function () { cmp.le( 0,        '').should.equal(false); });
      test('number x boolean' , function () { cmp.le( 0,     false).should.equal(false); });
      test('string x boolean' , function () { cmp.le('',     false).should.equal(false); });
      test('function x string', function () { cmp.le( f, fAsString).should.equal(false); });
    });
  });

  suite('id', function () {
    suite('any => false', function () {
      test('number x string'  , function () { cmp.id( 0,        '').should.equal(false); });
      test('number x boolean' , function () { cmp.id( 0,     false).should.equal(false); });
      test('string x boolean' , function () { cmp.id('',     false).should.equal(false); });
      test('function x string', function () { cmp.id( f, fAsString).should.equal(false); });
    });
  });
});
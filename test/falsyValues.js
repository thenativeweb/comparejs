'use strict';

/*eslint-disable no-unused-vars*/
var should = require('should');
/*eslint-enable no-unused-vars*/

var cmp = require('../lib/compare');

suite('falsy values', function () {
  suite('eq', function () {
    test(' 0 x 0', function (done) {
      cmp.eq(0, 0).should.equal(true);
      done();
    });

    test(' 0 x ""', function (done) {
      cmp.eq(0, '').should.equal(false);
      done();
    });

    test(' 0 x false', function (done) {
      cmp.eq(0, false).should.equal(false);
      done();
    });

    test(' 0 x null', function (done) {
      cmp.eq(0, null).should.equal(false);
      done();
    });

    test(' 0 x undefined', function (done) {
      cmp.eq(0, undefined).should.equal(false);
      done();
    });

    test('"" x 0', function (done) {
      cmp.eq('', 0).should.equal(false);
      done();
    });

    test('"" x ""', function (done) {
      cmp.eq('', '').should.equal(true);
      done();
    });

    test('"" x false', function (done) {
      cmp.eq('', false).should.equal(false);
      done();
    });

    test('"" x null', function (done) {
      cmp.eq('', null).should.equal(false);
      done();
    });

    test('"" x undefined', function (done) {
      cmp.eq('', undefined).should.equal(false);
      done();
    });

    test('false x 0', function (done) {
      cmp.eq(false, 0).should.equal(false);
      done();
    });

    test('false x ""', function (done) {
      cmp.eq(false, '').should.equal(false);
      done();
    });

    test('false x false', function (done) {
      cmp.eq(false, false).should.equal(true);
      done();
    });

    test('false x null', function (done) {
      cmp.eq(false, null).should.equal(false);
      done();
    });

    test('false x undefined', function (done) {
      cmp.eq(false, undefined).should.equal(false);
      done();
    });

    test('null x 0', function (done) {
      cmp.eq(null, 0).should.equal(false);
      done();
    });

    test('null x ""', function (done) {
      cmp.eq(null, '').should.equal(false);
      done();
    });

    test('null x false', function (done) {
      cmp.eq(null, false).should.equal(false);
      done();
    });

    test('null x null', function (done) {
      cmp.eq(null, null).should.equal(true);
      done();
    });

    test('null x undefined', function (done) {
      cmp.eq(null, undefined).should.equal(false);
      done();
    });

    test('undefined x 0', function (done) {
      cmp.eq(undefined, 0).should.equal(false);
      done();
    });

    test('undefined x ""', function (done) {
      cmp.eq(undefined, '').should.equal(false);
      done();
    });

    test('undefined x false', function (done) {
      cmp.eq(undefined, false).should.equal(false);
      done();
    });

    test('undefined x null', function (done) {
      cmp.eq(undefined, null).should.equal(false);
      done();
    });

    test('undefined x undefined', function (done) {
      cmp.eq(undefined, undefined).should.equal(true);
      done();
    });
  });
});

'use strict';

require('should');

var cmp = require('../lib/compare');

suite('cmp', function () {
	suite('eq', function () {
		test('both equal => true', function (done) {
			var first = {
				name:'foo', 
				value: 42, 
				nested: {
					empty: null, 
					valid: true,
					items: [1, 2, 3] 
				}
			}, second = {
				name:'foo', 
				value: 42, 
				nested: {
					empty: null, 
					valid: true,
					items: [1, 2, 3] 
				}
			};
			cmp.eq(first, second).should.equal(true);
			done();
		});

		test('not equal on first level => false', function (done) {
			var first = {
				name:'foo', 
				value: 23, 
				nested: {
					empty: null, 
					valid: true,
					items: [1, 2, 3] 
				}
			}, second = {
				name:'foo', 
				value: 42, 
				nested: {
					empty: null, 
					valid: true,
					items: [1, 2, 3] 
				}
			};
			cmp.eq(first, second).should.equal(false);
			done();
		});

		test('missing property on first level => false', function (done) {
			var first = {
				name:'foo', 
				nested: {
					empty: null, 
					valid: true,
					items: [1, 2, 3] 
				}
			}, second = {
				name:'foo', 
				value: 42, 
				nested: {
					empty: null, 
					valid: true,
					items: [1, 2, 3] 
				}
			};
			cmp.eq(first, second).should.equal(false);
			done();
		});

		test('not equal on second level => false', function (done) {
			var first = {
				name:'foo', 
				value: 42, 
				nested: {
					empty: null, 
					valid: true,
					items: [1, 2, 3] 
				}
			}, second = {
				name:'foo', 
				value: 42, 
				nested: {
					empty: null, 
					valid: false,
					items: [1, 2, 3] 
				}
			};
			cmp.eq(first, second).should.equal(false);
			done();
		});

		test('missing property on second level => false', function (done) {
			var first = {
				name:'foo', 
				value: 42, 
				nested: {
					empty: null, 
					valid: true,
					items: [1, 2, 3] 
				}
			}, second = {
				name:'foo', 
				value: 42, 
				nested: {
					empty: null, 
					items: [1, 2, 3] 
				}
			};
			cmp.eq(first, second).should.equal(false);
			done();
		});
	});

	suite('eqs', function () {
		test('both equal => true', function (done) {
			var first = {
				name:'foo', 
				value: 42, 
				nested: {
					empty: null, 
					valid: true,
					items: [1, 2, 3] 
				}
			}, second = {
				name:'foo', 
				value: 42, 
				nested: {
					empty: null, 
					valid: true,
					items: [1, 2, 3] 
				}
			};
			cmp.eqs(first, second).should.equal(true);
			done();
		});

		test('not equal on first level => true', function (done) {
			var first = {
				name:'foo', 
				value: 23, 
				nested: {
					empty: null, 
					valid: true,
					items: [1, 2, 3] 
				}
			}, second = {
				name:'foo', 
				value: 42, 
				nested: {
					empty: null, 
					valid: true,
					items: [1, 2, 3] 
				}
			};
			cmp.eqs(first, second).should.equal(true);
			done();
		});

		test('missing property on first level => false', function (done) {
			var first = {
				name:'foo', 
				nested: {
					empty: null, 
					valid: true,
					items: [1, 2, 3] 
				}
			}, second = {
				name:'foo', 
				value: 42, 
				nested: {
					empty: null, 
					valid: true,
					items: [1, 2, 3] 
				}
			};
			cmp.eqs(first, second).should.equal(false);
			done();
		});

		test('not equal on second level => true', function (done) {
			var first = {
				name:'foo', 
				value: 42, 
				nested: {
					empty: null, 
					valid: true,
					items: [1, 2, 3] 
				}
			}, second = {
				name:'foo', 
				value: 42, 
				nested: {
					empty: null, 
					valid: false,
					items: [1, 2, 3] 
				}
			};
			cmp.eqs(first, second).should.equal(true);
			done();
		});

		test('missing property on second level => false', function (done) {
			var first = {
				name:'foo', 
				value: 42, 
				nested: {
					empty: null, 
					valid: true,
					items: [1, 2, 3] 
				}
			}, second = {
				name:'foo', 
				value: 42, 
				nested: {
					empty: null, 
					items: [1, 2, 3] 
				}
			};
			cmp.eqs(first, second).should.equal(false);
			done();
		});
	});
});
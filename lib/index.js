(function (exports) {

  var _ = require('underscore');

  var cmp = {
    eq: function (first, second) {
      return first === second;
    },

    ne: function (first, second) {
      return !(this.eq(first, second));
    },

    gt: function (first, second) {
      return first > second;
    },

    ge: function (first, second) {
      return this.gt(first, second) || this.eq(first, second);
    },

    lt: function (first, second) {
      return first < second;
    },

    le: function (first, second) {
      return this.lt(first, second) || this.eq(first, second);
    }
  };

  var unwrap = function (obj) {
    if(typeof obj === 'object' && (obj.constructor === Number || obj.constructor === String)) {
      return obj.valueOf();
    } else {
      return obj;
    }
  };

  var processTypes = function (f, first, second) {
    first = unwrap(first);
    second = unwrap(second);

    return f(first, second);
  };

  var setup = function (comparer) {
    return _.wrap(_.bind(comparer, cmp), processTypes);
  };

  exports.eq = setup(cmp.eq);
  exports.ne = setup(cmp.ne);
  exports.gt = setup(cmp.gt);
  exports.ge = setup(cmp.ge);
  exports.lt = setup(cmp.lt);
  exports.le = setup(cmp.le);

})(typeof exports === 'undefined' ? this['cmp'] = {} : exports);
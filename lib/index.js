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
    if(typeof obj === 'object' && obj.constructor === Number) {
      return obj.valueOf();
    } else {
      return obj;
    }
  }

  var pretype = function (f, first, second) {
    first = unwrap(first);
    second = unwrap(second);

    return f(first, second);
  };

  exports.eq = _.wrap(_.bind(cmp.eq, cmp), pretype);
  exports.ne = _.wrap(_.bind(cmp.ne, cmp), pretype);
  exports.gt = _.wrap(_.bind(cmp.gt, cmp), pretype);
  exports.ge = _.wrap(_.bind(cmp.ge, cmp), pretype);
  exports.lt = _.wrap(_.bind(cmp.lt, cmp), pretype);
  exports.le = _.wrap(_.bind(cmp.le, cmp), pretype);

})(typeof exports === 'undefined' ? this['cmp'] = {} : exports);
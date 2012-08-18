(function (exports) {

  var unwrap = function (obj) {
    if(typeof obj === 'object' && obj.constructor === Number) {
      return obj.valueOf();
    } else {
      return obj;
    }
  }

  var cmp = {
    eq: function (first, second) {
      first = unwrap(first);
      second = unwrap(second);

      return first === second;
    },

    ne: function (first, second) {
      return !(this.eq(first, second));
    },

    gt: function (first, second) {
      first = unwrap(first);
      second = unwrap(second);

      return first > second;
    },

    ge: function (first, second) {

    },

    lt: function (first, second) {

    },

    le: function (first, second) {

    }
  };

  exports.eq = cmp.eq;
  exports.ne = cmp.ne;
  exports.gt = cmp.gt;
  exports.ge = cmp.ge;
  exports.lt = cmp.lt;
  exports.le = cmp.le;

})(typeof exports === 'undefined' ? this['cmp'] = {} : exports);
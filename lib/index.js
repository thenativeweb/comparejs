var _ = require('underscore');

var cmp = {
  eq: function (first, second) {
    // If two functions shall be compared, compare their source code.
    if(typeof first === 'function' && typeof second === 'function') {
      first = first.toString();
      second = second.toString();
    }

    return first === second;
  },

  ne: function (first, second) {
    return !(this.eq(first, second));
  },

  gt: function (first, second) {
    // If at least one parameter is a function, greater than does not make sense.
    if(typeof first === 'function' || typeof second === 'function') {
      return false;
    }

    return first > second;
  },

  ge: function (first, second) {
    return this.gt(first, second) || this.eq(first, second);
  },

  lt: function (first, second) {
    // If at least one parameter is a function, less than does not make sense.
    if(typeof first === 'function' || typeof second === 'function') {
      return false;
    }

    return first < second;
  },

  le: function (first, second) {
    return this.lt(first, second) || this.eq(first, second);
  },

  id: function (first, second) {
    // Functions and objects need to be compared by reference, all other types are compared by value.
    if((typeof first === 'function' && typeof second === 'function') || 
       (typeof first === 'object' && typeof second === 'object' )) {
      return first === second;
    };

    return this.eq(first, second);
  }
};

var unwrap = function (obj) {
  if(obj === null) {
    return obj;
  } else if(typeof obj === 'object' && (obj.constructor === Number || obj.constructor === String || obj.constructor === Boolean)) {
    return obj.valueOf();
  }

  return obj;
};

var processTypes = function (f, first, second) {
  first = unwrap(first);
  second = unwrap(second);
  
  return f(first, second);
};

var setup = function (comparer) {
  return _.wrap(_.bind(comparer, cmp), processTypes);
};

module.exports = {
  eq: setup(cmp.eq),
  ne: setup(cmp.ne),
  gt: setup(cmp.gt),
  ge: setup(cmp.ge),
  lt: setup(cmp.lt),
  le: setup(cmp.le),
  id: setup(cmp.id)
};
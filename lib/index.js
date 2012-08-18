(function (exports) {

  exports.foo = function () {
    console.log('hello world');
  };

})(typeof exports === 'undefined' ? this['cmp'] = {} : exports);
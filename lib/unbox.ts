/* eslint-disable @typescript-eslint/promise-function-async */
const unbox = function (value: any): any {
  if (typeof value !== 'object') {
    return value;
  }
  if (value === null) {
    return value;
  }
  if (!value.constructor) {
    return value;
  }
  if (![ Boolean, Number, String ].includes(value.constructor)) {
    return value;
  }

  return value.valueOf();
};
/* eslint-enable @typescript-eslint/promise-function-async */

export default unbox;

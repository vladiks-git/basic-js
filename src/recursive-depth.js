const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr))
      return 0;

    let depth = 0;
    for (let item of arr) {
      depth = Math.max(depth, this.calculateDepth(item));
    }
    return 1 + depth;
  }

    // remove line with error and write your code here
};
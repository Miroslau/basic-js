const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxLength = 1;
    arr.forEach((index) => {
      let count = 1;
      if(index instanceof Array) {
        count += this.calculateDepth(index);
        maxLength = Math.max(count, maxLength);
      }
    });
    return maxLength;
  }
};
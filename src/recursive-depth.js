const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (arr.length === 0) {
      return 1;
    }

    let maxSubDepth = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        const currentDepth = this.calculateDepth(arr[i]);
        if (currentDepth > maxSubDepth) {
          maxSubDepth = currentDepth;
        }
      }
    }

    return 1 + maxSubDepth;
  }
}

const depthCalc = new DepthCalculator();

depthCalc.calculateDepth(
  [
    1,
    [8, [[]]],
    [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]],
    2,
    3,
    [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]],
    [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]],
    4,
    5,
    ['6575', ['adas', ['dfg', [0]]]],
  ]
)

module.exports = {
  depthCalculator: new DepthCalculator(),
};

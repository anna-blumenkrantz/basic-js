const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
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
    if (!Array.isArray(arr)) {
      // Base case: if input is not an array, return 0
      return 0;
    }

    let maxDepth = 0;
    for (let i = 0; i < arr.length; i++) {
      // Recursively calculate depth for each element in the array
      const depth = this.calculateDepth(arr[i]);
      if (depth > maxDepth) {
        maxDepth = depth;
      }
    }

    // Return the maximum depth of nested arrays found in the input array, plus 1 for the current level
    return maxDepth + 1;
  }
}


module.exports = {
  DepthCalculator
};

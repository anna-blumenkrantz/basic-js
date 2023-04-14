const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // Extract heights from arr, excluding -1 values
  const heights = arr.filter(height => height !== -1);

  // Sort the extracted heights in ascending order
  heights.sort((a, b) => a - b);

  // Replace non -1 values in arr with sorted heights
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = heights.shift();
    }
  }

  return arr;
}

module.exports = {
  sortByHeight
};

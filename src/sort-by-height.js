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
  let heights = arr.map(e => (e == -1) ? -1 : 0);  // getting -1
  let sortedByHeight = [];
  for (let e of arr) {
    if (e != -1) sortedByHeight.push(e);          // deleting -1
  }
  sortedByHeight = sortedByHeight.sort((a, b) => a - b);         // sorting array without -1
  heights.forEach((e, index) => {
    if (e === -1) {
      sortedByHeight.splice(index, 0, -1);        // restoring -1 on prev places
    }
  })
  return sortedByHeight;
}

module.exports = {
  sortByHeight
};

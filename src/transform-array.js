const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!");
  let transformedArr = [];
  let discardNext = false;
  arr.forEach((element, index, array) => {
    if (discardNext) {
      discardNext = false;
      return;
    } 
    switch (element) {
      case '--discard-next':
        discardNext = true;
        break;
      case '--discard-prev':
        if (array[index - 2] != '--discard-next') transformedArr.pop();
        break;
      case '--double-next':
        if (array[index + 1]) transformedArr.push(array[index + 1]);
        break;
      case '--double-prev':
        if (array[index - 1] && (array[index - 2] != '--discard-next')) transformedArr.push(array[index - 1]);
        break;
      default:
        transformedArr.push(element);
    }
  });
  return transformedArr;
}

module.exports = {
  transform
};

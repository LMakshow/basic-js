const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNumber = -1;
  let nArray = Array.from(String(n), Number);             // digits to array
  for ( i = 0; i < nArray.length; i++ ) {
    let candidate = [...nArray];                          // clone array
    candidate.splice(i, 1);                               // delete digit i
    candidate = Number(candidate.join(''));               // forge a number
    if (maxNumber < candidate) maxNumber = candidate;     // check if it's maximal
  }
  return maxNumber;
}

module.exports = {
  deleteDigit
};

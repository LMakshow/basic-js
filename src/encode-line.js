const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encoded = '';
  let n = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      n++;
    } else {
      if (n > 1) {
        encoded += n;
        n = 1;
      }
      encoded += str[i];
    }
  }
return encoded;
}

module.exports = {
  encodeLine
};

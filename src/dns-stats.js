const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let object = {};
  let domainsArray = domains.map(e => e.split('.'));
  domainsArray.forEach(element => {
    let domain = '';
    for (i = element.length - 1; i >= 0; i--) {
      domain += `.${element[i]}`;
      object[domain] ? object[domain]++ : object[domain] = 1;
    }
  })
  return object;
}

// domains = [ 'code.yandex.ru', 'music.yandex.ru', 'yandex.ru' ];
// domainsArray = [ "code", "yandex", "ru" ], [ "music", "yandex", "ru" ], [ "yandex", "ru" ], 
// getDNSStats(domains);

module.exports = {
  getDNSStats
};

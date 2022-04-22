const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (message == null || key == null) throw Error('Incorrect arguments!');
    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptedMessage = [];
    let count = 0;
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90) {
        encryptedMessage[i] = message[i];
      } else {
      encryptedMessage[i] = String.fromCharCode((message.charCodeAt(i) - 65 + key.charCodeAt(count % key.length) - 65) % 26 + 65);
      count++;
      }
    }
    if (this.direct === false) {
      return encryptedMessage.reverse().join('');
    } else return encryptedMessage.join('');
  }
  
  
  decrypt(encryptedMessage, key) {
    if (encryptedMessage == null || key == null) throw Error('Incorrect arguments!');
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let message = [];
    let count = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage.charCodeAt(i) < 65 || encryptedMessage.charCodeAt(i) > 90) {
        message[i] = encryptedMessage[i];
      } else {
      message[i] = String.fromCharCode(((encryptedMessage.charCodeAt(i) - key.charCodeAt(count % key.length) + 26) % 26) + 65);
      count++;
      }
    }
    if (this.direct === false) {
      return message.reverse().join('');
    } else return message.join('');
  }
}

// const directMachine = new VigenereCipheringMachine(false);
// console.log(directMachine.direct);
// console.log(directMachine.encrypt('attack at dawn!', 'alphonse'))
// console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'))

module.exports = {
  VigenereCipheringMachine
};

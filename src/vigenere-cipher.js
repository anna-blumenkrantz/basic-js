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
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Both message and key are required');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encrypted = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      const char = message[i];
      if (this.alphabet.includes(char)) {
        const keyChar = key[j % key.length];
        const shift = this.alphabet.indexOf(keyChar);
        const encryptedChar = this.alphabet[(this.alphabet.indexOf(char) + shift) % this.alphabet.length];
        encrypted += encryptedChar;
        j++;
      } else {
        encrypted += char;
      }
    }

    return this.direct ? encrypted : encrypted.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Both encrypted message and key are required');
    }

    encryptedMessage = this.direct ? encryptedMessage.toUpperCase() : encryptedMessage.split('').reverse().join('').toUpperCase();
    key = key.toUpperCase();

    let decrypted = '';

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessage[i];
      if (this.alphabet.includes(char)) {
        const keyChar = key[j % key.length];
        const shift = this.alphabet.indexOf(keyChar);
        const decryptedChar = this.alphabet[(this.alphabet.indexOf(char) + this.alphabet.length - shift) % this.alphabet.length];
        decrypted += decryptedChar;
        j++;
      } else {
        decrypted += char;
      }
    }

    return decrypted;
  }
}

module.exports = {
  VigenereCipheringMachine
};

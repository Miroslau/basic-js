const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor() {
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(msg, key) {
    let result = "";
    let keyIndex = 0;
 
    for(let symbol of msg){
        let indexLetter = (this.alphabet.indexOf(symbol) + this.alphabet.indexOf(key[keyIndex])) % this.alphabet.length;
        result = result + this.alphabet[indexLetter];
        keyIndex++;
        if(keyIndex === key.length){
            keyIndex = 0;
        }
    }
 
    return result;
  }    
  decrypt(msg, key) {
    let result = "";
    let keyIndex = 0;
    
    for(let symbol of msg){
      let indexLetter = (this.alphabet.indexOf(symbol) + this.alphabet.length - this.alphabet.indexOf(key[keyIndex])) % this.alphabet.length;
      result += this.alphabet[indexLetter];
      keyIndex++;
      if(keyIndex === key.length){
        keyIndex = 0;
      }
    }
  return result;
  }
}

module.exports = VigenereCipheringMachine;

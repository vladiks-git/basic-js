const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mod = true) {
    this.mod = mod
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    this.squareArr = []
  }
  square(){
    for(let i = 0; i < this.alphabet.length; i ++){
      let arr = [...this.alphabet.slice(i), ...this.alphabet.slice(0,i)]
      this.squareArr.push(arr)
    }
  }

  encrypt(message, key) {
    this.square()
    if(!message || !key)
      throw new Error()
    message = message.toUpperCase()
    key = key.toUpperCase()
    let res = []
    for(let w = 0; w < message.length; w ++) {
      for (let i = 0; i < this.alphabet.length; i++) {
        let index = 0
        if (this.alphabet[i] === message[w]) {
          index = i

          for (let j = 0; j < this.alphabet.length; j++) {
            if (this.alphabet[j] === key[w]) {
              res.push(this.squareArr[index][j])
            }
          }
        }
      }
    }
    if(!this.mod){
      return res.reverse().join('')
    }
    return res.join('')
    // remove line with error and write your code here
  }

  decrypt(testW, key) {
    this.square()
    let resWord = []
    for(let i = 0; i < key.length; i ++){
      for(let a = 0; a < this.alphabet.length; a ++){
        let index = 0
        if(key[i] === this.alphabet[a]){
          index = a
          for(let j = 0; j < this.alphabet.length; j ++){
            if(this.squareArr[index][j] === testW[i]){
              resWord.push(this.alphabet[j])
            }
          }
        }
      }
    }
    if(!this.mod){
      return resWord.reverse().join('')
    }
    return resWord.join('')

    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;

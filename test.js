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
        if(message.length !== key.length){
            while (message.length > key.length){
                key += key
            }
            key = key.slice(0,message.length + 1)
        }
        console.log(`message - ${message}`)
        console.log(`key - ${key}`)
        console.log(message.length === key.length)
        this.square()
        if(!message || !key)
            throw new Error()
        message = message.toUpperCase()
        key = key.toUpperCase()
        let res = []
        for(let w = 0; w < message.length; w ++) {
            let ch1 = this.alphabet.indexOf(message[w])
            let ch2 = this.alphabet.indexOf(key[w])
            if(ch1 === -1){
                res.push(message[w])
            }else {
                console.log(`${message[w]} - ${key[w]}`)
                res.push(this.squareArr[ch1][ch2])
            }
        }

        console.log(res)
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

let test = new VigenereCipheringMachine()
console.log(test.encrypt('attack at dawn!', 'alphonse'));
console.log(test.decrypt('attack at dawn!', 'alphonse'))

//
// let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
// let square = []
//
// for(let i = 0; i < alphabet.length; i ++){
//     let arr = [...alphabet.slice(i), ...alphabet.slice(0,i)]
//     square.push(arr)
// }
//
// const word = 'attack'.split('')
// const key = 'alphonse'.split('')
//
// let res = []
//
// for(let w = 0; w < word.length; w ++) {
//     for (let i = 0; i < alphabet.length; i++) {
//         let index = 0
//         if (alphabet[i] === word[w]) {
//             index = i
//
//             for (let j = 0; j < alphabet.length; j++) {
//                 if (alphabet[j] === key[w]) {
//                     res.push(square[index][j])
//                 }
//             }
//         }
//     }
// }
// console.log(res.join(''))
//
// let testW = 'LXFOPVEFRNHR'.split('')
// let resWord = []
// for(let i = 0; i < key.length; i ++){
//     for(let a = 0; a < alphabet.length; a ++){
//         let index = 0
//         if(key[i] === alphabet[a]){
//             index = a
//             for(let j = 0; j < alphabet.length; j ++){
//                 if(square[index][j] === testW[i]){
//                     resWord.push(alphabet[j])
//                 }
//             }
//         }
//     }
// }
//
// console.log(resWord.join(''))

// let s1 = 'qwerty'
// let s2 = 'wds'
// while (s2.length < s1.length){
//     s2 += s2
// }
// s2 = s2.slice(0,s1.length+1)
// console.log(s2.length === s1.length)


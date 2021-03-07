const CustomError = require("../extensions/custom-error");

const chainMaker = {
  res: [],
  getLength() {
    return this.res.length
    // remove line with error and write your code here
  },
  addLink(value = '') {
    this.res.push(`( ${value} )`)
    return this
    // remove line with error and write your code here
  },
  removeLink(position) {
    if(position > this.res.length || !Number(position) || position !== Math.round(position)){
      this.res = []
      throw new Error()
    }else {
      this.res = [...this.res.slice(0,position-1), ...this.res.slice(position)]
      return this
    }
    // remove line with error and write your code here
  },
  reverseChain() {
    this.res.reverse()
    return this
    // remove line with error and write your code here
  },
  finishChain() {
    try{
      return this.res.join('~~')
    }finally {
      this.res = []
    }
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;

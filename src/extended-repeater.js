const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let s = ''
  let res = []
  let resAdd = ''
  let op = ''

  if(options.hasOwnProperty('addition')){
    if(typeof options.addition === 'boolean'){
      op = options.addition.toString()
    }
    else if(options.addition === null){
      op = 'null'
    }
    else {
      op = options.addition.toString()
    }
  }
  if(typeof op === 'string'){
    let add = []
    let tmp = options.additionRepeatTimes || 1
    for(let i = 0; i < tmp; i ++){
      add.push(op)
      resAdd = add.join(options.additionSeparator || '|')
    }
  }
  s += str + resAdd
  let tmp = options.repeatTimes || 1
  for(let i = 0; i < tmp; i ++){
    res.push(s)
  }
  return res.join(options.separator || '+')
  // remove line with error and write your code here
};
  
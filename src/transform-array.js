const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let res = [...arr]
  for(let i = 0; i < res.length; i ++){
    if((res[i] === '--discard-prev' || res[i] === '--double-prev') && i === 0){
      res = [...res.slice(i+1)]
    }
    if((res[i] === '--double-next' || res[i] === '--discard-next') && i === res.length-1){
      res = [...res.slice(0,i)]
    }
    if(res[i] === '--discard-prev'){
      res = [...res.slice(0,i-1), ...res.slice(i+1)]
    }
    if(res[i] === '--double-prev'){
      res[i] = res[i-1]
    }
    if(res[i] === '--double-next'){
      res[i] = res[i+1]
    }
    if(res[i] === '--discard-next'){
      res = [...res.slice(0,i), ...res.slice(i+2)]
      res.splice(i,1)
    }
  }
  return res
};

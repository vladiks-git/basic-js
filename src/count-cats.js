const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let res = 0
  matrix.forEach(item => {
    if(item.includes('^^')){
      let a = item.filter(i => i ==='^^')
      res += a.length
    }
  })
  return res
};

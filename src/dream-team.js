const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members))
    return false
  let res = []
  members.forEach(item => {
    if(typeof item === 'string'){
      let ch = item.trim()[0].toUpperCase()
      res.push(ch)
    }
  })
  if(res.length === 0)
    return false
  return res.sort().join('')
};

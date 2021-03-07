const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(!+sampleActivity || typeof sampleActivity !== 'string' || +sampleActivity <= 0) {
    return false
  }
  let a = MODERN_ACTIVITY/+sampleActivity
  let k = 0.693/HALF_LIFE_PERIOD
  let t = Math.ceil(Math.log(a)/k)
  if(t < 0)
    return false
  return t
  // remove line with error and write your code here
};

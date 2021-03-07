const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2, disksNumber) - 1;
  const seconds = Math.floor((3600 / turnsSpeed) * turns);
  return {
    turns: turns,
    seconds: seconds
  };
  // remove line with error and write your code here
};

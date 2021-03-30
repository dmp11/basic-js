const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNumber,turnsSpeed){
  let hanoi = {};
  hanoi.turns = Math.pow(2, diskNumber) - 1;
  hanoi.seconds = Math.floor(hanoi.turns / turnsSpeed * 3600);
  return(hanoi);
};

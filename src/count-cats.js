const CustomError = require("../extensions/custom-error");

module.exports = function countCats(mask) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  const arrCats = mask.toString().split(",");
  let numCats = 0;
  for (let i = 0; i < arrCats.length; i++) {
    if (arrCats[i] === "^^") {
      numCats++;
    }
  }
  return numCats;
};

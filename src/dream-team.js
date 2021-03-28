const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(ar) {
  let newAr;
  let str = '';
  if (Array.isArray(ar)) {
    for (let i = 0; i < ar.length; i++) {
      if (typeof ar[i] === "string") {
        newAr = ar[i].trim().split('');
        str += newAr[0];
      }
    }
    return str.toUpperCase().split('').sort().join('');
  } else return false;
};

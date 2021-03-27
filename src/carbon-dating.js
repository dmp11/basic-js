const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  if (typeof(sampleActivity)==="string" && isFinite(sampleActivity) && sampleActivity > 0 && sampleActivity <= 15) {
        let sA = parseFloat(sampleActivity);
        let t = Math.log(MODERN_ACTIVITY/(sA))/(.693/HALF_LIFE_PERIOD);
        return Math.ceil(t).toString();
  }
  else return false;

};
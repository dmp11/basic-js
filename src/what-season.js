const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  if(date === undefined) return ('Unable to determine the time of year!');
  if (typeof date.getTime() === undefined) throw "Error";  
    let season = '';
    let month = date.getMonth();
    if(month > 1 && month < 5) season = 'spring'; 
    if(month > 4 && month < 8) season = 'summer';
    if(month > 7 && month < 11) season = 'autumn';
    if(month == 11 || month >= 0 && month < 2) season = 'winter';
    
    return season;
};

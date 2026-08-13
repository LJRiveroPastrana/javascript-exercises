const leapYears = function(year) {
const leapYear = year;
if ((leapYear%4 === 0) && (!(leapYear%100===0) || (leapYear%400 === 0))) {
    return true
    
    }
   return false
};

// Do not edit below this line
module.exports = leapYears;

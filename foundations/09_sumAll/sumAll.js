const sumAll = function(num1, num2) {
    let sum = 0;
   if (Number.isInteger(num1) && num1 > 0 && Number.isInteger(num2) && num1 > 0) {
    let  numMin = Math.min(num1,num2)
    let  numMax = Math.max(num1,num2)
    for (let index = numMin; index <= numMax; index++) {
         sum += index;
       
    }
    return sum
   }
    return "ERROR"
};

// Do not edit below this line
module.exports = sumAll;

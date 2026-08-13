const convertToCelsius = function(tempFahrenheit) {
  let tempCelsiusConvert = ((tempFahrenheit - 32)*5)/9;
  return Number(tempCelsiusConvert.toFixed(1))
};

const convertToFahrenheit = function(tempCelsius) {
  let tempFahrenheitConvert = ((tempCelsius * 9)/5) + 32;
  return Number(tempFahrenheitConvert.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

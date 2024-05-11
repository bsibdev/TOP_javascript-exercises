const convertToCelsius = function(fahrenheit) {
  const CONVERSIONFACTOR = 5/9;
  let celcius = (fahrenheit -32)*CONVERSIONFACTOR;
  return Math.round(celcius*10)/10;
};

const convertToFahrenheit = function(celcius) {
  const CONVERSIONFACTOR = 9/5;
  let fahrenheit = (celcius * CONVERSIONFACTOR)+32;
  return Math.round(fahrenheit*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

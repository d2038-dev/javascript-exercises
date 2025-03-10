const convertToCelsius = function (tempInFahrenheit) {
  let tempInCelsius = +(((tempInFahrenheit - 32) * 5) / 9).toFixed(1);

  return tempInCelsius;
};

const convertToFahrenheit = function (tempInCelsius) {
  let tempInFahrenheit = +((tempInCelsius * 9) / 5 + 32).toFixed(1);

  return tempInFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

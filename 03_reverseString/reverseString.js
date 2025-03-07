const reverseString = function (string) {
  const stringArray = string.split("");
  const reversedArray = [];

  for (let index = stringArray.length - 1; index >= 0; index--) {
    reversedArray.push(stringArray[index]);
  }

  return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;

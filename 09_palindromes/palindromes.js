const palindromes = function (word) {
  const cleanedWord = word
    .toLowerCase()
    .split("")
    .filter((char) => char.match(/[A-Za-z0-9]/))
    .join("");

  const reversedWord = cleanedWord.split("").reverse().join("");

  return cleanedWord == reversedWord;
};

// Do not edit below this line
module.exports = palindromes;

const reverseString = function (word) {
  const splittedWord = word.split("");
  let reversedWord = "";
  for (let i = splittedWord.length - 1; i >= 0; i--) {
    reversedWord += splittedWord[i];
  }

  return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;

const palindromes = function (str) {
  const word = str.toLowerCase().match(/\w/g);
  const rWord = word.slice().reverse();

  return word.join("") === rWord.join("");
};

// Do not edit below this line
module.exports = palindromes;

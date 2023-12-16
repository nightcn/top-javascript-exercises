const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((acc, num) => acc + num, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, num) => acc * num);
};

const power = function (a, p) {
  return a ** p;
};

const factorial = function (num) {
  return num <= 1 ? 1 : num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

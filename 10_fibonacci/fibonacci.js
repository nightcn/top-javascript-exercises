const fibonacci = function (num) {
  let fibArr = [1, 1];

  if (num > 0 && num <= 2) {
    return 1;
  } else if (num > 2) {
    for (let i = 2; i < num; i++) {
      fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
    }
    return fibArr.pop();
  } else {
    return "OOPS";
  }
};

// Do not edit below this line
module.exports = fibonacci;

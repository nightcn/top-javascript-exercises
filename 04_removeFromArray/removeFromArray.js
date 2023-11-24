const removeFromArray = function (...args) {
  let newArr = args[0].filter((item) => {
    return !args.slice(1).includes(item);
  });

  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;

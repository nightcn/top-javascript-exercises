const findTheOldest = function (peopleArr) {
  let dateNow = new Date(Date.now());
  let oldest = peopleArr
    .sort(function (Aperson, Bperson) {
      let aAge =
        (Aperson.yearOfDeath || dateNow.getFullYear()) - Aperson.yearOfBirth;
      let bAge =
        (Bperson.yearOfDeath || dateNow.getFullYear()) - Bperson.yearOfBirth;

      return aAge > bAge ? 1 : -1;
    })
    .pop();

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

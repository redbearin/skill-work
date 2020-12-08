const findBrokenKeys = (intended, actual) => {
  const brokenLetters = [];
  for (let index = 0; index < intended.length; index++) {
    if(intended[index] !== actual[index])
      brokenLetters.push(intended[index]);
  }
  return [...new Set(brokenLetters)];
};

const intended = "beethoven";
const actual = "affthoif5";

findBrokenKeys(intended, actual);
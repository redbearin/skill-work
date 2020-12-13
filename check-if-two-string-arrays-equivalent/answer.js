const arrayStringsAreEqual = (word1, word2) => {
  if (word1.flat().join('') === word2.flat().join(''))
    return true;
  return false;
};

const word1 = ["ab", "c"];
const word2 = ["a", "bc"];
arrayStringsAreEqual(word1, word2);
const arrayStringsAreEqual = (word1, word2) => {
  if (word1.join('') === word2.join(''))
    return true;
  return false;
};

const word1 = ["ab", "c"];
const word2 = ["a", "bc"];
arrayStringsAreEqual(word1, word2);
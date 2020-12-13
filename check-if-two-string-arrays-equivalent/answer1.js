const arrayStringsAreEqual = (word1, word2) => {
  return word1.join('') === word2.join('') ?
    true :
    false;
};

const word1 = ["ab", "c"];
const word2 = ["a", "bc"];
arrayStringsAreEqual(word1, word2);
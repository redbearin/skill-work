const isPalindrome = (origWord, word, revWord) => {
  if (word.length) {
    revWord += word.split('').pop();
    word = word.slice(0, -1);
    return isPalindrome(origWord, word, revWord);
  } 
  // does original word match reversed word
  if (origWord.includes(revWord))
    return true;
  else
    return false;
};

const word = "adieu";
const revWord = ""
origWord = word;

isPalindrome(origWord, word, revWord);
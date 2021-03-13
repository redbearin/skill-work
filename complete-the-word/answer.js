const canComplete = (str, word) => {
  const strArr = str.split('');
  const wordArr = word.split('');
  const letters = [];
  // initialize index in word
  let j = 0;

  for(let i = 0; i < strArr.length; i++) {
    // str letter and word letter not the same
    while (strArr[i] !== wordArr[j]) {
      // case where there are more letters 
      // beyond last letter in word
      // does not meet criteria
      if (j > wordArr.length - 1) 
        return false;
      // add letter to letters array
      // increment to next index in word
      else {
        letters.push(wordArr[j]);
        j++;
      }
    }
    // str letter and word letter match
    letters.push(wordArr[j])
    // increment to next index in word
    j++;
  }
  // compare letters in letters
  // with letters in word
  for(let i = 1; i < letters.length; i++) {
    // don't match
    if (letters[i] !== wordArr[i])
      return false;
  }
  // letters all match
  return true;
}

const str = "bbutl";
const word = "beautiful";
document.getElementById('ans').innerHTML = canComplete(str, word);
const removeLastVowel = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', "O", 'U'];
  const strArr = str.split(' ');
  // go word by word
  for (let i = 0; i < strArr.length; i++) {
    // go letter by letter from back of word
    for (let j = strArr[i].length - 1; j >= 0; j--) {
      // letter is a vowel
      if (vowels.includes(strArr[i][j])) {
        // remove last vowel
        strArr[i] = strArr[i].slice(0, j) + strArr[i].slice(j+1);
        // move to next word
        break;
      }
    }
  }
  return strArr.join(' ');
}

const str = "Those who dare to fail miserably can achieve greatly.";

document.getElementById('ans').innerHTML = removeLastVowel(str);
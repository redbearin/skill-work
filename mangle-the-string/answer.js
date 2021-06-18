const mangle = (str) => {
  // rebuilt word
  let newStr = '';
  let newLtr;
  // lower case vowels
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  // go through item by item in str
  for (let i = 0; i < str.length; i++) {
    // punctuation
    if (str.charCodeAt(i) < 65) 
      newStr += str[i];
    // special cases
    else if (str[i] === 'Z')
      newStr += 'A';
    else if (str[i] === 'z')
      newStr += 'a';
    // other letters
    else {
      // find new letter
      newLtr = String.fromCharCode(str.charCodeAt(i) + 1);
      // new letter is a vowel
      if (vowels.includes(newLtr))
        // change to capital
        newLtr = newLtr.toUpperCase();
      // add newLtr to newStr
      newStr += newLtr;
    }
  }
  return newStr;
}

const str = "Omega";

document.getElementById('ans').textContent = mangle(str);
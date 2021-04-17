const ingExtractor = (str) => {
  const strArr = str.split(' ');
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const final = [];

  for (let i = 0; i < strArr.length; i++) {
    // remove "," from the end of the word
    if (strArr[i][strArr[i].length - 1] === ",") 
      strArr[i] = strArr[i].slice(0, -1);
    // last three are "ing"
    if (strArr[i][strArr[i].length - 1] === 'g' &&
        strArr[i][strArr[i].length - 2] === 'n' &&
        strArr[i][strArr[i].length - 3] === 'i' ) {
        //check if a vowel before the "ing" ending
        for (let j = 0; j < strArr[i].length - 3; j++) {
          // vowel
          if (vowels.includes(strArr[i][j]))
            // word meets criteria
            final.push(strArr[i]);
        }
    }
  }
  return final;
}

const str = "zing went ring, ding wing SINk";

document.getElementById('ans').innerHTML = ingExtractor(str);
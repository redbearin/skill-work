const isPrefixOfWord = (phrase, substr) => {
  const phraseArr = phrase.split(' ');
  for (let index = 0; index < phraseArr.length; index++) {
    let word = phraseArr[index];
    if (word.length < substr.length) continue;
    //make sure substr limited to prefix location
    let prefix = word.slice(0, substr.length);
    if (prefix.includes(substr)) {
      return index;
    }
  }
  return -1;
}

const phrase = "I use three pillows";
const substr = 'pill';

isPrefixOfWord(phrase, substr);
 


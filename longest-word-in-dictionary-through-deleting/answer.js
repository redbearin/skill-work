const findLongestWord = (string, dictionary) => {
  // sort dictionary in alpha order
  dictionary.sort();
  // sort dictionary from longest to shortest word
  dictionary.sort((a,b) => {
    return b.length - a.length;
  });
  // go through words in dictionary
  for (let index = 0; index < dictionary.length; index++) {
    const stringArray = string.split('');
    const word = dictionary[index];
    // go through the letters in that word
    for (let index1 = 0; index1 < word.length; index1++) {
      const letter = word[index1];
      // it is the last letter in word and the letter is in string
      if (index1 === word.length -1 && stringArray.includes(letter)) {
        return word;
      }
      // letter is in the string
      if (stringArray.includes(letter)){
        let indexOfLetter = stringArray.indexOf(letter);
        // replace that letter with a * so it can't be reused
        stringArray[indexOfLetter] = '*';
        // letter not in string, move to next word
      } else {
        break;
      } 
    }
  }
  // there is no dictionary word in the string
  return 'no match';
}

const string = "abpcplea";
const dictionary = ["a","b","c"];

findLongestWord(string, dictionary);

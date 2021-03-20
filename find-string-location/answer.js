const findingNemo = (string) => {
  // split the string into an array of "words"
  const strArray = string.split(' ');
  // regex for punctuation
  const regex = /\?|,|!|\./;
  //go through each element of strArray
  for (let index = 0; index < strArray.length; index++) {
    const word = strArray[index];
    // if the last element of "word" is punctuation, remove it
    if (regex.test(strArray[index][word.length - 1])) {
      strArray[index] = word.slice(0, -1);
    }
    // if the word is Nemo return the word position
    if (strArray[index] === 'Nemo') {
      return 'I found Nemo at ' + (index + 1) + '!';
    }
  }
  // Nemo was not found
  return  "I can't find Nemo :(";
}

const string = "The boy has Nemo!"

findingNemo(string);
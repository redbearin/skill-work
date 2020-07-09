const isPrefixOfWord = (sentence, searchWord) => {
  // break the sentence into an array of words
  const sentArray = sentence.split(' ');
  // cycle through each word in the sentArray
  for(let index = 0; index < sentArray.length; index++) {
    // if the searchWord is longer than word in 
    // sentence skip that sentence word
    if (searchWord.length > sentArray[index].length) 
      continue;
    // for each letter in search word
    for (let index1 = 0; index1 < searchWord.length; index1++) {
      // if the letter in word of sentence and letter 
      // from search word letter match AND 
      // it is the last letter of searchWord 
      // there is a match, so return the position of word in sentence
      if (searchWord[index1] === sentArray[index][index1] && 
      index1 === searchWord.length - 1)
        return index + 1;
      // if the letter in word of sentence and letter 
      // from search word letter match, continue checking
      if (searchWord[index1] === sentArray[index][index1]) 
        continue;
      // letters don't match, so break to next word
      else 
        break;
    }
  }
  //  there was no match
  return - 1;
}

const sentence = "This problem is an easy problem."; 
const searchWord = "pro";

isPrefixOfWord(sentence, searchWord);
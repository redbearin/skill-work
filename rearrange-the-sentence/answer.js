const rearrange = (str) => {
  // make an array of words
  const strArr = str.split(' ');
  const wordsByLoc = {};
  // cycle through every word in array
  for (let index = 0; index < strArr.length; index++) {
    // cycle through every element of word
    for (let index1 = 0; index1 < strArr[index].length; index1++) {
      // content at index is a number
      if(Number.isInteger(+strArr[index][index1])) 
        index1 === (strArr[index].length - 1) ?  
        // is the last index of word
        wordsByLoc[strArr[index][index1]] = 
        strArr[index].slice(0, index1) 
        :
        // is not the last index of the word
        wordsByLoc[strArr[index][index1]] = 
        strArr[index].slice(0, index1) + 
        strArr[index].slice(index1 + 1);
    }
  }
  // create an array of values and join into a phrase
  return Object.values(wordsByLoc).join(' ');
};

const str = "4of Fo1r pe6ople g3ood th5e the2";

rearrange(str);
const wordBreak = (s, wordDict) =>  {
  sArray  = s.split('');
  for (let index =0; index < wordDict.length; index++)  {
    const firstEleIdx = [];
    sArray.forEach((element, eleIdx) => {
      if (element ===  wordDict[index][0]) 
        firstEleIdx.push(eleIdx);
    });

    console.log(firstEleIdx)
    // the array of indices with first letter of dictionary
    // word is empty (there is no such letter in string)
    if (!firstEleIdx) {
      return false;
    }
    // there is at least once index in the string that 
    // matches the first letter of the dictionary word
    for (let index2 = 0; index2 < firstEleIdx.length; index2) {
      // word has been matched (1 if the match has occurred)
      let match = 0;
      // go through each letter in the dictionary word
      for (let index1 = 0; index1 < wordDict[index].length; index1++) {
        // not enough letters in string for complete
        // dictionary word match
        if (index1 + firstEleIdx[index2] > sArray.length - 1)
          return false;
        // letter in string matches letter in dictionary word
        if (sArray[index1 + firstEleIdx[index2]] === wordDict[index][index1]) {
            // not last letter in dictionary word
            if (index1 < wordDict[index].length - 1)
              continue;
            // have a complete dictionary/string match
            // remove word from string
            else 
              sArray.splice(firstEleIdx[index2], firstEleIdx[index2] + index1 + 1);   
              match++;
              console.log(sArray);
        }
        // letter in dictionary does not match letter in string
        if (sArray[index1 + firstEleIdx[index2]] !== wordDict[index][index1]) {
          // last index in 
          if (index2 === firstEleIdx.length - 1)
            return false;
          else 
            break;
        }
      }
      if (match)
        break;
    }
  }
  // all dictionary words in string
  return true;
}


const s = "leetcode";
const wordDict = ["leet", "code"];

wordBreak(s, wordDict);
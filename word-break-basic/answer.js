const wordBreak = (s, wordDict) =>  {
  sArray  = s.split('');
  for ( let index =0; index < wordDict.length; index++)  {
    let elementIdx = sArray.findIndex(element => element ===  wordDict[index][0]);
    if (elementIdx === -1) {
      return false;
    }
    for (let index1 = 0; index1 < wordDict[index].length; index1++) {
      // string index is beyond last index of string
      // there is not a complete word match
      if (index1 + elementIdx > sArray.length - 1)
        return false;
      // letter in string matches letter in dictionary word
      if (sArray[index1 + elementIdx] === wordDict[index][index1]) {
          // not last letter in dictionary word
          if (index1 < wordDict[index].length - 1)        continue;
          // have a complete dictionary/string match
          // remove word from string
          else 
            sArray.splice(elementIdx, elementIdx + index1);   
      }
      // letter in dictionary does not match letter in string
      else 
        return false;
    } 
  }
  // all dictionary words in string
  return true;
}


const s = "applepenapple";
const wordDict = ["apple", "pen"];

wordBreak(s, wordDict);
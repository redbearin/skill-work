const printVertically = (s) => {
  // puts words into sorted array, longest to shortest
  const sArraySorted = s.split(' ').sort((a,b) => b.length - a.length);
  // find the length of the longest word
  const lenLongestWord = sArraySorted[0].length;
  // put words in array in order
  const sArray = s.split(' ');
  const verticalWords = [];
  // cycle through the indices (columns) of each word
  for (let colIdx = 0; colIdx < lenLongestWord; colIdx++) {
    let newWord = '';
    // cycle from word to word (row to row), at a 
    // specific index (column) within word
    for (let rowIdx = 0; rowIdx < sArray.length; rowIdx++) {
      // no character at index location within word
      // add a space to the word
      if (!sArray[rowIdx][colIdx]) 
        newWord += ' ';
      // character at that location within word
      // add the letter to the word
      else 
        newWord += sArray[rowIdx][colIdx];
    }
    // trim the spaces off the end of the word
    // push the word to the array
    verticalWords.push(newWord.trimEnd());
  }
  return verticalWords;
}

const s = "TO BE OR NOT TO BE";

printVertically(s);

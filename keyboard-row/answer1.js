const findWords = (words) => {
  const topRow = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const middleRow = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const bottomRow = ['z', 'x', 'c', 'v', 'b', 'n',  'm'];
  const rows = [topRow, middleRow, bottomRow];

  // words with all letters on same keyboard row
  let keyboardRowWords = [];

  // check each word
  for (let index = 0; index < words.length; index++) {
    // first letter in the word
    let firstLetter = (words[index][0]).toLowerCase();

    // for each keyboard row
    for(let rowsIndex = 0; rowsIndex < rows.length; rowsIndex++) {
      //set the row
      let selectedRow = rows[rowsIndex];

      // row matches the row with the first letter
      if (selectedRow.includes(firstLetter)) {
        for (let ltrIndex = 1; ltrIndex < words[index].length; ltrIndex++) {
          let letter = words[index][ltrIndex].toLowerCase();
          //if the letter is not in the row, it is not a match, break out of loop
          if (!selectedRow.includes(letter)) 
            break;
          // complete word on same row, add to array of words on same row
          if (ltrIndex === words[index].length -1)  
            keyboardRowWords.push(words[index]);
        }
        //keeps from going through additional checks on rows if already matched
        break;
      }
    }
  }
  return keyboardRowWords;
}

const words = ["Hello", "Alaska", "Dad", "Peace"];

findWords(words);

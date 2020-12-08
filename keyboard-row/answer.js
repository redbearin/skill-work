const findWords = (words) => {
  const topRow = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const middleRow = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const bottomRow = ['z', 'x', 'c', 'v', 'b', 'n',  'm'];
  let keyboardRowWords = [];
  for (let index = 0; index < words.length; index++) {
    let firstLetter = (words[index][0]).toLowerCase();
    if (topRow.includes(firstLetter)) {
      for (let index1 = 1; index1 < words[index].length; index1++) {
        let letter = words[index][index1].toLowerCase();
        if (!topRow.includes(letter)) 
          break;
        if (index1 === words[index].length -1)  
          keyboardRowWords.push(words[index]);
      }
    }
    if (middleRow.includes(firstLetter)) {
      for (let index1 = 1; index1 < words[index].length; index1++) {
        let letter = (words[index][index1]).toLowerCase();
        if (!middleRow.includes(letter)) 
          break;
        if (index1 === words[index].length -1)  
          keyboardRowWords.push(words[index]);
      }
    }
    if (bottomRow.includes(firstLetter)) {
      for (let index1 = 1; index1 < words[index].length; index1++) {
        let letter = (words[index][index1]).toLowerCase();
        if (!bottomRow.includes(letter)) 
          break;
        if (index1 === words[index].length -1)  
          keyboardRowWords.push(words[index]);
      }
    }
  }
  return keyboardRowWords;
}

const words = ["Hello", "Alaska", "Dad", "Peace"];

findWords(words);

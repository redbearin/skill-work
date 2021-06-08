const isWordChain = (words) => {
  let count;
  // word by word through words array
  for (let i = 1; i < words.length; i++) {
    // initialize count
    count = 0;
    // letter by letter through words
    for (let j = 0; j < words[i].length; j++) {
      // compare letter in word before to 
      // letter in word, if same increment count
      if (words[i-1][j] === words[i][j])
        count++;
    }
    // more than one letter is a mismatch
    if (count !== words[0].length - 1)
      return false;
  }
  // all words only have one letter difference
  return true;
}


const words = ["read", "red", "led", "lad", "lady"];

document.getElementById('ans').textContent = isWordChain(words);
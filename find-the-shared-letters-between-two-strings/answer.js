const sharedLetters = (word1, word2) => {
  const word2Arr = word2.split('');
  let lowerLtr, index;
  const matches = [];
  // go letter by letter through first word
  // check to see if second word includes
  // that letter 
  for (let i = 0; i < word1.length; i++) {
    lowerLtr = word1[i].toLowerCase();
    // index of match in second word
    index = word2Arr.indexOf(lowerLtr);
    // if letter in both words
    // mark letter as matchedd
    // add letter to matches
    if (index >= 0) {
      word2Arr[index] = '*';
      matches.push(lowerLtr);
    }
  }
  // sort the letters in alpha order
  // then join into a string
  return matches.sort().join('');
}
const word1 = "hello";
const word2 = "yellow";

document.getElementById('ans').textContent = sharedLetters(word1, word2);
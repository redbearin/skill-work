const validWordNest = (word, str) => {
  // index where word begins
  let index = str.search(word);
  // index is not the first index
  while (index !== 0) {
    // remove at index n
    str = str.slice(0, index) + str.slice(index + word.length);
    index = str.search(word);
    // word is not in string
    if (index === -1)
      return false;
  }
  return true;
}

const word = "shape";
const str = "sssshapeshapehahapehpeape";
document.getElementById('ans').innerHTML = validWordNest(word, str) 
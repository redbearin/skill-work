const averageWordLength = (str) => {
  // break str into words
  const arrOfWords = str.split(' ');
  const countArr = [];
  let count;
  // cycle through word by word
  for (let i = 0; i < arrOfWords.length; i++) {
    // initialize letter count
    count = 0;
    // go through element by element
    // as long as letter, increment count
    for (let j = 0; j < arrOfWords[i].length; j++) {
      if (arrOfWords[i].charCodeAt(j) > 64 && arrOfWords[i].charCodeAt(j) < 91 ||
          arrOfWords[i].charCodeAt(j) > 96 && arrOfWords[i].charCodeAt(j) < 123)
        count++;
    }
    // add letter count to countArr
    countArr.push(count);
  }
  // average of all letter counts
  return (countArr.reduce((acc, val) => acc + val) / countArr.length).toFixed(2);
}

const str = "A B C.";

document.getElementById('ans').textContent = averageWordLength(str);
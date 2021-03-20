const reverseOdd = (str) => {
  const wordArray = str.split(' ');
  const finalWordArray = [];
  for (let index = 0; index < wordArray.length; index++) {
    // is it odd?
    wordArray[index].length % 2 !== 0 ?
    // if yes, then make array of letters, reverse letters,
    // join back into string and add to finalWordArray
    finalWordArray.push(wordArray[index].split('').reverse().join('')) :
    // if not, add word, without changes, to finalWordArray 
    finalWordArray.push(wordArray[index]);
  }
  // convert finalWordArray to string
  return finalWordArray.join(' ');
}

const str = "Make sure uoy only esrever sdrow of ddo length";

reverseOdd(str);
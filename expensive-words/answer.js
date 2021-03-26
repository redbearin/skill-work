const getSentenceValue = (str) => {
  // split string into array of words
  const strArr = str.split(' ');
  // initializations
  let total = 0;
  let subtotal;
  let capCount;
  // word through word in array
  for (let i = 0; i < strArr.length; i++) {
    subtotal = 0;
    capCount = 0;
    // character by character through word
    for (let j = 0; j < strArr[i].length; j++) {
      // capital letter
      if (strArr[i].charCodeAt(j) > 64 && strArr[i].charCodeAt(j) < 91) {
        subtotal += strArr[i].charCodeAt(j) - 64;
        // count as capital letter
        capCount++;
      }
      // lowercase letter
      if (strArr[i].charCodeAt(j) > 96 && strArr[i].charCodeAt(j) < 123) 
        subtotal += strArr[i].charCodeAt(j) - 96;
    }
    // every letter is a capital
    // multiply subtotal by 2
    if (capCount === strArr[i].length)
      subtotal *= 2;
    // add subtotal to total
    total += subtotal;
  }
  return total;
}

const str = "Her seaside sea-shelling business is really booming!";

document.getElementById('ans').innerHTML = getSentenceValue(str);
function reformat(s) {
  sArray = s.split('');
  numArray = [];
  charArray = [];
  finalArray = [];
  //saves numbers and chars separately  
  //saves in reverse order so not same string, if already alternating
  for (let index = sArray.length - 1; index >= 0; index--) {
    if (/[0-9]/.test(sArray[index])) {
      numArray.push(sArray[index]);
    } else {
      charArray.push(sArray[index]);
    }
  }

  // case where you can never alternate
  if (Math.abs(numArray.length - charArray.length) > 1) {
    return '';
  } 

  //can alternate
  if (numArray >= charArray.length) {
    for(let index = 0; index < numArray.length; index++) {
      finalArray.push(numArray[index]);
      finalArray.push(charArray[index]);
    }
  } else {
    for(let index = 0; index < charArray.length; index++) {
      finalArray.push(charArray[index]);
      finalArray.push(numArray[index]);
    }
  }
  return finalArray.join('');
}

const s = "a0b1c2";
reformat(s);
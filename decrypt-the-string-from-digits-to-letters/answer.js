const decrypt = (numStr) => {
  // initialize i to the last index of numStr
  let i = numStr.length - 1;
  // initialize string of letters
  let ltrStr = '';
  let num;
  // cycle through number sets back to front
  while (i >= 0) {
    // read two digits
    if (numStr[i] === '#') {
      num = numStr[i-2] + numStr[i-1];
      // increment backward by 3
      i = i - 3;
    }
    // read one digit
    else {
      num = numStr[i];
      // increment backward by 1
      i--;
    }
    // add the new letter
    ltrStr = String.fromCharCode(+num + 96) + ltrStr;
  }
  return ltrStr;
}
const numStr = "25#";
document.getElementById('ans').textContent = decrypt(numStr);
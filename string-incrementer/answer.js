const incrementString = (str) => {
  let strPart = '';
  let num = '';
  let newNum = '';
  let diff;
  // build string part and number part
  for (let i = 0; i < str.length; i++) {
    // if element isn't a number
    if (isNaN(str[i])) {
      strPart += str[i];
    }
    // element is a number
    else 
      num += str[i];
  }
  // no number component
  if (!num.length) 
    return str + 1;
  // number component
  else {
    // add one to number and convert 
    // back to a string
    newNum = (1 + +num).toString();
    // determine different in string length
    // between new number and num from
    // original string
    diff = num.length  - newNum.length;
    // if a difference in lengths
    // add zeros to beginning of number
    // component so the lengths match
    if (diff > 0) {
      for (let i = 0; i < diff; i++) {
        newNum = '0' + newNum;
      }
      return strPart + newNum;
    }
    // no difference in lengths
    else 
      return strPart + newNum;
  }
}

const str = "foo";

document.getElementById('ans').innerHTML = incrementString(str);
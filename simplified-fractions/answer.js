const simplify = (str) => {
  // split string into string numbers
  strArr = str.split('/');
  // change str numbers to integers
  strArr[0] = +strArr[0];
  strArr[1] = +strArr[1];
  // denominator bigger than numerator
  if (strArr[1] > strArr[0]) {
    // go through all possible factors
    // starting with largest
    for (let i = strArr[0]; i >= 1; i--) {
      // factor divides evenly into numerator and denominator
      if (strArr[0] % i === 0 && strArr[1] % i === 0) 
        return (strArr[0] / i).toString() + '/' + 
               (strArr[1] / i).toString();
    }
    // no factors that can be divided into nuerator 
    // and denonominator
    return str;
  }
  // numerator bigger than denominator
  else {
    // denominator divides evenly into numerator
    if (Number.isInteger(strArr[0] / strArr[1]))
        return strArr[0] / strArr[1];
    // denominator cannot be divided evenly into numerator
    return str;
  }
}

const str = "100/400";

document.getElementById('ans').innerHTML = simplify(str);

const countNumbersWithUniqueDigits = (n) => {
  let count = 0;
  for(let num = 0; num < Math.pow(10, n); num++) {
    let numArray = num.toString().split('');
    if (numArray.length < 2) {
      count++;
    } else {
      let uniqueDigits = [...new Set(numArray)];
      if(uniqueDigits.length === numArray.length)
        count++;
    }
  }
  return count;
}

n = 3;
countNumbersWithUniqueDigits(n);
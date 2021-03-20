const isZygodrome = (num) => {
  // convert number to string
  const strNum = num.toString();
  let index = 0;
  // not reached end of string
  while (index < strNum.length) {
    let index1 = index;
    let count = 0;
    // cycle through as long as digits match
    // increment count each time
    while (strNum[index1] === strNum[index]) {
      count++;
      index1++;
    }
    // less than two of digits
    if (count < 2) 
      return false;
    // set index to location where
    // digits not the same
    index = index1;
  }
  // all groupings at least 2
  // of same digit
  return true;
};

const num = 1001;

isZygodrome(num);
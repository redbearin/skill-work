const isZygodrome = (num) => {
  // convert number to string
  const strNum = num.toString();
  // only one digit, no pairs
  if (strNum.length === 1)
    return false;
  // more than one digit
  let index = 0
  while(strNum[index] < strNum.length - 1) {
    let count = 1
    // go through digit to right one by one
    for (let index1 = index + 1; index1 < strNum.length; index1++) {
      // digit matches
      if (strNum[index1] === strNum[index]) {
        // increment match count
        count++;
        // last digit of number
        if (index1 === strNum.length - 1) {
          index += count;
          break;
        }
      }
      // 
      else {
        // less than two digits the same
        // reached a number without at least a pair
        if (count < 2)
          return false;
        // increment the index to place where
        // digit changes and start over at that index
        index += count;
        break;
      }
    } 
  }
  return true;
};

const num = 11;

isZygodrome(num);
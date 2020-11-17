const multiplicativePersistence = (num) => {
  // convert number to a string
  let strNum = num.toString();
  let newNum = 0;
  let count = 0;
  while (strNum.length > 1) {
    // cycle through each digit of number
    for(let index = 0; index < strNum.length; index++) {
      newNum *= +strNum[index];
    }
    // set value of newNum to strNum
    strNum = newNum.toString();
    // increment the count
    count++;
    // reset newNum
    newNum = 0;
  }
  return count;
};

const num = 4;

multiplicativePersistence(num);
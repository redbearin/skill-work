const digitCount = (num) => {
  // object with counts of each digit
  const digitCount = {};
  // string version of num
  const strNum = num.toString();
  // array of string digits
  const arr = strNum.split('');
  // count number of each digit and put 
  // in an object
  for(let index = 0; index < strNum.length; index++) {
    if (digitCount[strNum[index]]) {
      digitCount[strNum[index]] += 1;
    }
    else 
      digitCount[strNum[index]] = 1;
  }
  // when digitCount key matches number
  // replace that number in the array of string digits
  for (let key in digitCount) {
    for (let index = 0; index < strNum.length; index++) {
      if (key === strNum[index])
        arr[index] = +digitCount[key];
    }
  }
  return arr.join('');
};

const num = 2;

digitCount(num);
const nextGreaterElement = (num) => {
  // convert num into a string
  const string = num.toString();
  // find the first digit of num
  const firstDigit = parseInt(string[0]);
  // convert string num to array of string digits
  const strNumArray = string.split('');
  // convert the array string digits to number digits
  const numArray = strNumArray.map(element => parseInt(element));
  // sort the digits from smallest to largest
  const sortedArray = numArray.sort();
  // find the index in the sorted array that includes 
  // the first digit of num
  const startingIdx = sortedArray.findIndex(digit => digit === firstDigit);

  // next largest number broken by digits (what we are finding)
  const nextGreaterNum = [];

  // first digit in num is the last digit when digits are sorted
  // no bigger num can be created so return -1
  if (startingIdx === sortedArray.length - 1) 
    return - 1;
  else {
    // start with next larger digit in num
    nextGreaterNum.push(sortedArray[startingIdx + 1]);
    // add remaining digits from smallest to largest
    for (let index = 0; index < sortedArray.length; index++) {
      if (index === startingIdx + 1)          
        continue;
      else  
        nextGreaterNum.push(sortedArray[index]);
    }
  }

  // take digits from next greater number array from right,
  // build the new number, and return that number
  return nextGreaterNum.reverse().reduce((accumulator, currentValue, index) =>  accumulator + currentValue * Math.pow(10, index));
}

const num = 132;
nextGreaterElement(num);

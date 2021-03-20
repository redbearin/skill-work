const greatestElement = (num) => {
  // convert the number into a string
  // place each string element into an array element
  const strNumArray = num.toString().split('');
  // convert the array elements from string to numbers
  const numArray = strNumArray.map(element => parseInt(element));
  // sort umbers from smallest to largest
  const sortedArray = numArray.sort();
  const biggestNumber = sortedArray.reduce((accumulator, currentValue, index) =>  accumulator + currentValue * Math.pow(10, index));
  // biggest possible number is same as num
  if (biggestNumber === num) 
    return -1;
  // biggest number is different than incoming num
  else 
    return biggestNumber;
}

const num = 45862741289;
greatestElement(num);
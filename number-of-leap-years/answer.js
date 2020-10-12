const numLeapYears = (range) => {
  // create a array of strings and then convert to array of integers
  const rangeArr = range.split('-').map(element => +element);
  let count = 0;
  // start at first number in range
  // check through each number and stop at send number in range
  for (let num = rangeArr[0]; num <= rangeArr[1]; num++) {
    // check to make sure the number does not meet criteria:
    // divisible by 100 and not divisible by 400
    // if so, skip number
    if (num % 100 === 0 && num % 400 !== 0)
      continue;
    // check to see if number divisible by 4
    if(num % 4 === 0) 
      count++;
  }
  return count;
}

const range = '1980-1984';
document.getElementById('answer').innerHTML = numLeapYears(range);
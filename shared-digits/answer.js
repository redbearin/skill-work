const sharedDigits = (arr) => {
  let curStrNums;
  let priorStrNums;
  // go through numbers in array starting
  // with second number
  for (let i = 1; i < arr.length; i++) {
    // convert number and prior number
    // to strings and then put them in arrays
    curStrNums = arr[i].toString().split('');
    priorStrNums = arr[i - 1].toString().split('');
    // cycle digit by digit through prior number
    for (let j = 0; j < priorStrNums.length; j++) {
      // if current number array has prior number
      // move on to next comparison (break)
      if(curStrNums.includes(priorStrNums[j])) 
        break;
      // reached the end of array without a match
      if(j === priorStrNums.length - 1) 
        return false;
    }
  }
  return true;
}

const arr = [1, 12, 123, 1234, 1235, 6789];

document.getElementById('ans').textContent = sharedDigits(arr);
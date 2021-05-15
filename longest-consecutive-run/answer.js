const longestRun = (arr) => {
  let longest = 0;
  let count = 1;
  // check ascending
  for (let i = 1; i < arr.length; i++) {
    // is one bigger than prior
    if (arr[i - 1] + 1 === arr[i]) 
      count++;
    // is not one bigger than prior
    else {
      // count of the string of consecutive 
      // numbers bigger than longest so far
      // make longest the current count
      // initialize count
      if (count > longest) {
        longest = count;
        count = 1;
      }
    }
  }
  // check descending
  for (let i = 1; i < arr.length; i++) {
    // if one less than prior
    if (arr[i - 1] - 1 === arr[i]) 
      count++;
    // is not one less than prior
    else {
      // count of the string of consecutive 
      // numbers bigger than longest so far
      // make longest the current count
      // initialize count
      if (count > longest) {
        longest = count;
        count = 1;
      }
    }
  }
  return longest;
}

const arr = [3, 5, 7, 10, 15];

document.getElementById('ans').textContent = longestRun(arr); 
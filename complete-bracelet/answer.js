const completeBracelet = (arr) => {
  // subarray that is used for comparisons
  let comparison = [];
  // minimum substring count is two elements
  let count = 2;
  let i, sub;
  let flag = false;
  while(count <= arr.length / 2) {
    // build the comparison array for a certain
    // substring count
    for (let idx = 0; idx < count; idx++) {
      comparison.push(arr[idx]);
    }
    // begin comparing substrings at the 
    // index past the comparison array
    i = count;
    // continue checking to the end of arr
    while (i < arr.length) {
      sub = [];
      // build sub array
      for (let idx = count; idx < i+count; idx++) {
        sub.push(arr[idx]);
      }
      // compare sub array to comparison array
      // element by element
      for (let idx = 0; idx < comparison.length; idx++) {
        // if there is a mismatch
        // set flag that there was a mismatch
        // break out of comparison
        if (sub[idx] !== comparison[idx])
          flag = true;
          break;
      }
      // increment i by the subsequence count
      i += count;
    }
    // made it through a comparison cycle 
    // and everything matches
    if (flag === false)
      return true;
    // have not found a match
    // reset flag, comparison array
    // increment the number of elements to compare
    flag = false;
    count++;
    comparison = [];
  }
  // did all the possible comparisons and no matches
  return false;
}

const arr = [1, 2, 2, 1, 2, 2];

document.getElementById('ans').textContent = completeBracelet(arr);
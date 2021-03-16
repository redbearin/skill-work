const minLength = (arr, n) => {

  let sum;
  // initialize count
  let count = 1;
  // count is less than length of arr
  while(count <= arr.length) {
    // cycle through arr in count increments
    for (let i = 0; i < arr.length; i += count) {
      sum = 0;
      // cycle through count groups
      // and get the sum
      for (let j = 0; j < count; j++) {
        sum += arr[j];
      }
      if (sum > n)
        return count;
    }
    // increment count
    count++;
  }
  // could not sum items to reach n
  return -1;
};

const arr = [5, 8, 2, -1, 3, 4];
const n = 9;

document.getElementById('ans').innerHTML = minLength(arr, n);
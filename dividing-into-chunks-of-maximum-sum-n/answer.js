const divide = (arr, n) => {
  // subarray that adds to not more than n
  let chunk = [];
  // array of chunk subarrays
  const chunks = [];
  // add elements to get sum
  let sum = 0;
  // initialize the index
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    // last element of array
    if (i === arr.length - 1) {
      if (sum > n) {
        chunks.push(chunk);
        chunks.push([arr[i]]);
      }
      else {
        chunk.push(arr[i]);
        chunks.push(chunk);
      }
      i++;
    }
    // not the last element of array
    else {
      if (sum > n) {
        chunks.push(chunk);
        chunk = [];
        sum = 0;
      }
      else  {
        chunk.push(arr[i]);
        i++;
      }
    }
  }
  return chunks;
}
const arr = [2, 1, 0, -1, 0, 0, 2, 1, 3];
const n = 3;

document.getElementById('ans').innerHTML = divide(arr, n);
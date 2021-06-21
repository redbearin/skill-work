const hasIdentical = (arr) =>
 {
  let sub;
  // position in subarray
  for (let j = 0; j < arr.length; j++) {
    // initialize subarray
    sub = [];
    // step through subarrays
    for (let i = 0; i < arr.length; i++) {
      sub.push(arr[i][j]);
    }
    //subarray by subarray through array
    for (let i = 0; i < arr.length; i++) {
      if (sub.every((val, index) => val === arr[i][index]))
        return true;
    }
  }
  return false;
}

const arr = [
  [4, 2],
  [2, 1]
];

document.getElementById('ans').innerHTML = hasIdentical(arr);
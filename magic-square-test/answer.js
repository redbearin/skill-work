const isMagic = (arr) => {
  let base = 0;
  let sum;

  // set base (row 0)
  for (let col = 0; col < arr[0].length; col++) {
    base += arr[0][col];
  }

  // check rows
  for(let row = 1; row < arr.length; row++) {
    sum = 0;
    for (let col = 0; col < arr[row].length; col++) {
      sum += arr[row][col];
    }
    if (sum !== base)
      return false
  }

  // check columns
  for (let col = 0; col < arr.length; col++) {
    sum = 0;
    for(let row = 0; row < arr.length; row++) {
      sum += arr[row][col];
    }
    if (sum !== base)
      return false;
  }

  // check diagonals
  sum = 0;
  sum1 = 0
  for (let idx = 0; idx < arr[0].length; idx++) {
    sum += arr[idx][idx];
    sum1 += arr[idx][arr[0].length - (1 + idx)];
  }
  if (sum !== base || sum1 !== base)
    return false;

  // all rows, cols, diag same
  return true;
}

const arr = 
[
  [9,5,1],
  [4,3,8],
  [2,7,6]
];

document.getElementById('ans').innerHTML = isMagic(arr);
const bingoCheck = (arr) => {
  len = arr.length;
  let count, num;

  // location of each 'x'
  // includes subarrays of [row, column]
  const loc = [];

  // build an array of row/column locations 
  // for "x"s
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] === 'x')
        loc.push([row, col]);
    }
  }

  // check same row and same column
  // check row (0) then check col (1)
  for (let j = 0; j < 2; j++) {
    num = loc[0][j];
    count = 1;
    // check each location
    for (let i = 1; i < loc.length; i++) {
      // same as first element
      if (loc[i][j] === num)
        count++;
    }
    // entire row or col has 'x'
    if (count === len) 
        return true;
  }

  // check diagonal
  for (let idx = 0; idx < loc.length; idx++) {
    if(loc[idx][0] !== loc[idx][1])
      return false;
  }

  return true;
}

arr = [
  ["x", "x", "x", "x", "x"],
  [64, 12, 47, 32, 90],
  [37, 16, 68, 83, 54],
  [67, 19, 98, 39, 44],
  [21, 75, 24, 30, 52]
];

document.getElementById('ans').innerHTML = bingoCheck(arr);
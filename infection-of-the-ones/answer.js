const onesInfection = (arr) => {
  const rows = [];
  const cols = [];
  // identify the rows and cols with a 1
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 1) {
        rows[i] = 1;
        cols[j] = 1;
      }
      else  {
        if (rows[i] !== 1)
          rows[i] = 0;
        if (cols[j] !== 1)
          cols[j] = 0;
      }
    }
  }
  // add 1s to rows and cols with a 1
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (rows[i] === 1)
        arr[i][j] = 1;
      else if (cols[j] === 1) 
        arr[i][j] = 1;
    }
  }
  return arr;
}

const arr = [
  [0, 1, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 0, 0]
];

document.getElementById('ans').textContent = onesInfection(arr);
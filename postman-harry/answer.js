const harry = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1)
      for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
      }
    else  
      sum += arr[i][0];
  }
  if (sum === 0)
    return -1;
  else
    return sum;
}

const arr = [[5, 2], [5, 2]];

document.getElementById('ans').innerHTML = harry(arr);
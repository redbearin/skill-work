const harry = (arr) => {
  let sum = 0;
  let index, sumSub;
  for (let i = 0; i < arr.length; i++) {
    sumSub = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sumSub += arr[i][j];
    }
    if (sumSub > sum) {
      sum = sumSub;
      index = i;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (i < index) 
      sum += arr[i][0];
    if (i > index) 
      sum += arr[i][arr[i].length - 1]
  }
  return sum;
}

const arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15]
];

document.getElementById('ans').innerHTML = harry(arr);
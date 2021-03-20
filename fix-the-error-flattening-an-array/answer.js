const flatten = (arr) => {
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr2.push(arr[i][j]);
    }
  }
  return arr2;
}

const arr = [[true, false], [false, false]];

document.getElementById('ans').innerHTML = flatten(arr);
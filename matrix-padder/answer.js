const padMatrix = (arr) => {
  for (let index = 0; index < arr.length; index++) {
    arr[index].unshift(0);
    arr[index].push(0);
  }
  const insert = [];
  for (let index = 0; index < arr[0].length; index++) {
    insert.push(0);
  }
  arr.unshift(insert);
  arr.push(insert);
  return arr;
};

const arr = [[9]];

padMatrix(arr);
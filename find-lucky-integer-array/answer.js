const findLucky = (arr) => {
  let luckyNumber = null;
  for (let index = 0; index < arr.length; index++) {
    let count = 1;
    for (let index1 = 0; index1 < arr.length; index1++) {
      if (index === index1) continue;
      if (arr[index] === arr[index1]) count++;
    }
    if (count === arr[index] && count > luckyNumber) luckyNumber = arr[index];
  }
  return luckyNumber === null ? -1 : luckyNumber;
};

const arr = [7,7,7,7,7,7,7];

findLucky(arr);
const almostSorted = (arr) => {
  let compare = [];
  let countL = 0;
  let countG = 0;
  for (let index = 1; index < arr.length; index++) {
    if (arr[index - 1] <= arr[index])
      compare.push('L');
    else
      compare.push('G');
  }
  console.log(compare)
  for (let index = 0; index < compare.length; index++) {
    if (compare[index] === 'L')
      countL++;
  }
  for (let index = 0; index < compare.length; index++) {
    if (compare[index] === 'G')
      countG++;
  }
  if ((countG > countL && countL !== 1) || 
      (countL > countG && countG !== 1) || 
      (countL === 0) || 
      (countG === 0))
    return false;
  return true;
};

const arr = [7, 8, 9, 3, 10, 11, 12, 2];

almostSorted(arr);
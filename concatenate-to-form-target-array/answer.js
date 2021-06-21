const canConcatenate = (arrs, target) => {
  const sortedConcatArrs = arrs.flat().sort((a,b) => a - b);
  target.sort((a,b) => a - b);
  // set the longest array for length
  let reference;
  if (target.length >= sortedConcatArrs.length)
    reference = target.length;
  else 
    reference = sortedConcatArrs.length;
  // compare array values at two indices
  for (let index = 0; index < reference; index++) {
    if (target[index] !== sortedConcatArrs[index])
      return false;
  }
  return true;
};

const arrs = [[1, 2, 3, 4], [5, 6], [7]];
const target = [1, 2, 3, 4, 5, 6, 7];
canConcatenate(arrs, target);
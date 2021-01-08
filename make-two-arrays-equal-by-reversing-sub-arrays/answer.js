const canBeEqual = (target, arr) => {
  // sort the two arrays
  target.sort((a,b) => a - b);
  arr.sort((a,b) => a - b);
  // check to see if the two arrays are the same
  const isSame = arr.length === target.length && 
                 arr.every((element, index) => 
                           element === target[index]);
  // sorted arrays are the same so reordering 
  // is possible         
  if (isSame) 
    return true;
  // sorted arrays are not the same so reordering 
  // is not possible
  else 
    return false;
};

const target = [3,7,9];
const arr = [3,7,11];

canBeEqual(target, arr);
 
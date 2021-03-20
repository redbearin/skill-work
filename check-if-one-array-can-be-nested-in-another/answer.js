const nestedArray = (arr1, arr2) => {
  // sort the arrays
  arr1.sort((a,b) => a - b);
  arr2.sort((a,b) => a - b);
  if (arr2[0] < arr1[0] && 
      arr1[arr1.length - 1] < arr2[arr2.length - 1])
    return true;
  else 
    return false;
};

const arr1 = [1, 2, 3, 4];
const arr2 = [0, 6];

nestedArray(arr1, arr2);
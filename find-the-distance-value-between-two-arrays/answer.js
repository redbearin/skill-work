const findTheDistanceValue = (arr1, arr2, d) => {

  let count = 0;
  // go through arr1 number by number

  for (let arr1Idx = 0; arr1Idx < arr1.length; arr1Idx++) {

    // go through arr2 number by number
    // increment count if abs value of alls number at arr1 index and each
    // of arr2 indices is > d
    for (let arr2Idx = 0; arr2Idx < arr2.length; arr2Idx++) {

      if (Math.abs(arr1[arr1Idx] - arr2[arr2Idx]) <= d) 
        break;

      if (Math.abs(arr1[arr1Idx] - arr2[arr2Idx]) > d && 
          arr2Idx === arr2.length - 1) 
        count++;
    }
  }
  return count;
};

const arr1 = [1,4,2,3];
const arr2 = [-4,-3,6,10,20,30];
const d = 3;

findTheDistanceValue(arr1, arr2, d);
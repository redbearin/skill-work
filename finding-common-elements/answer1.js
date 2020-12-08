const commonElements = (arr1, arr2) => {
  const commonEle = [];
  // go element by element through arr1
  for (let index = 0; index < arr1.length; index++) {
    // go element by element through arr2
    for(let index1 = 0; index1 < arr2.length; index1++) {
      // element arr1 and arr2 match
      if (arr1[index] === arr2[index1]) {
        commonEle.push(arr2[index1]);
        // replace element in arr2 with marker (already matched)
        // this handles multiples of same number
        arr2[index1] = '*';
        break;
      }
      // avoid going through elements that can't match
      if (arr1[index] <= arr2[index1])
        break;
    }
  }
  return commonEle;
}

const arr1 = [1, 4, 6, 6, 7, 9];
const arr2 = [1, 2, 4, 6, 6, 6, 10];

commonElements(arr1, arr2);
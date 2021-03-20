// works for all examples, but not all conditions

const commonElements = (arr1, arr2) => {
  const commonEle = [];
  for (let index = 0; index < arr2.length; index++) {
    if (arr1.includes(arr2[index])) 
      commonEle.push(arr2[index]);
  }
  return commonEle;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [10, 12, 13, 15];

commonElements(arr1, arr2);
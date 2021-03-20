const checkEquals = (arr1, arr2) => {
  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] !== arr2[index])
      return false;
  }
  return true;
}

const arr1 = [4, 5, 6];
const arr2 = [4, 5, 6];
checkEquals(arr1, arr2);
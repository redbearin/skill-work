const isSpecialArray = (arr) => {
  for (let index = 0; index < arr.length; index += 2) {
    if (arr[index] % 2 !== 0) 
      return false
  }
  for (let index = 1; index < arr.length; index += 2) {
    if (arr[index] % 2 === 0)
      return false;
  }
  return true;
};

const arr = [2, 7, 8, 8, 6, 1, 6, 3];

isSpecialArray(arr);
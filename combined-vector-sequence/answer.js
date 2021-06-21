const combinedVector = (arr1, arr2) => {
  const combined = [];
  if(arr1.length  >= arr2.length) {
    for (let index = 0; index < arr1.length; index++) {
      if(!arr2[index])
        arr2[index] = 0;
      combined.push(arr1[index] + arr2[index]);
    }
  }
  else {
    for (let index = 0; index < arr1.length; index++) {
      if(!arr1[index])
          arr1[index] = 0;
      combined.push(arr1[index] + arr2[index]);
    }
  }
  for (let index = 0; index < combined.length -  1; index++) {
    if (combined[index] + 1 !== combined[index  + 1])
      return false;
  }
  return true;
};

const arr1 = [2,2,2 ];
const arr2 = [5,6,7,10];

combinedVector(arr1, arr2);
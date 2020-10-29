const checkIfExist = (arr) => {
  for (let index=0; index < arr.length - 1; index++) {
    for (let index1=0; index1 < arr.length; index1++){
     if (index === index1)
       continue;
     if (arr[index] * 2 === arr[index1])
       return true;
    }
  }
  return false;
};

arr = [3,1,7,11];
checkIfExist(arr);
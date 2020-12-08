function checkIfExist(arr) {
  for (let index = 0; index < arr.length; index++) {
   for (let index1 = 0; index1 < arr.length; index1++) {
     if (index === index1) continue;
     if (arr[index] === arr[index1]*2) return true;
   }
  }
 return false;
}

const arr = [3,1,7,11];

checkIfExist(arr);
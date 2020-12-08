const canBuild = (arr, nums) => {
  const obj = {};
  for (let index = 0; index < arr.length; index++) {
    obj[index] = arr[index];
  }
  // convert the numbers to string, so they can processed
  const numStr = [];
  for (let index = 0; index < nums.length; index++) {
    numStr.push(nums[index].toString());
  }  
  //
  for (let index = 0; index < numStr.length; index++) {
    for (let index1 = 0; index1 < numStr[index].length; index1++) {
      let count = numStr[index][index1];
      // a least one of these numbers remaining
      if(obj[count] > 0) 
        obj[count] -= 1;
      // none of these numbers remaining
      else
        return false; 
    }
  }
  return true;
}

const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const nums = [3];
canBuild(arr, nums);

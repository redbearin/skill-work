const waysToMakeFair = (nums) => {
  let count = 0;
  for (let index = 0; index < nums.length; index++) {
    let number = nums[index];
    //remove index
    nums.splice(index, 1);
    let sumEven = 0;
    let sumOdd = 0;
    // add all even indexes
    for (let index1 = 0; index1 < nums.length; index1 += 2) {
      sumEven += nums[index1];
    }
    // add all odd indexes
    for (let index1 = 1; index1 < nums.length; index1 += 2) {
      sumOdd += nums[index1];
    }
    if (sumEven === sumOdd) 
      count++;
    // rebuild the array
    nums.splice(index, 0, number);
  }
  return count;
};

const nums = [1,2,3];

waysToMakeFair(nums);
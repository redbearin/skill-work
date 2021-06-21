const maximumUniqueSubarray = (nums) => {
  const numCounts = {};
  const subArr = [];
  // add each unique number to object
  for(let index = 0; index < nums.length; index++) {
    // add number if not already there
    if (!numCounts[nums[index]]) 
      numCounts[nums[index]] = 1;
  }
  // all unique numbers to subArr
  for(let key in numCounts) {
    subArr.push(+key)
  }
  return subArr;
};

const nums = [5,2,1,2,5,2,1,2,5];

maximumUniqueSubarray(nums);
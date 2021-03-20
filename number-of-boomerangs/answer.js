const boomerangs = (nums) => {
  let count = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === nums[index + 2] && 
        nums[index] !== nums[index + 1]) 
      count++;
  }
  return count;
};

const nums = [4, 4, 4, 9, 9, 9, 9];

boomerangs(nums);
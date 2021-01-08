const findPeakElement = (nums) => {
  for (let index = 1; index < nums.length - 1; index++) {
    if(nums[index -1] < nums[index] && nums[index] > nums[index + 1]) return index;
  }
}

const nums = [1,2,3,1];
findPeakElement(nums);
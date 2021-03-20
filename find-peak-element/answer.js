const findPeakElement = (nums) => {
  const peakIndices = [];
  for (let index = 1; index < nums.length - 1; index++) {
    if(nums[index -1] < nums[index] && nums[index] > nums[index + 1]) peakIndices.push(index);
  }
  return peakIndices.join(' or ');
}

const nums = [1,2,3,1];
findPeakElement(nums);
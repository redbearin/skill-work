function createTargetArray(nums, index) {
  let targetArray = [];
  for (let targetIndex = 0; targetIndex < nums.length; targetIndex++) {
    targetArray.splice(index[targetIndex], 0, nums[targetIndex]);
  }
  return targetArray;
}

const nums = [0,1,2,3,4];
const index = [0,1,2,2,1];

createTargetArray(nums, index);
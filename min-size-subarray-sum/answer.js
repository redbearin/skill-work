function minSubArrayLen(nums, s) {
  let count = 0;
  for (let index = 0; index < nums.length; index++) {
    let individualCount = 0;
    let sum = 0;
    for (let index1 = index; index1 < nums.length; index1++) {
      sum += nums[index1];
      if (sum < s) individualCount++;
      else {
        if (sum === s) {
          individualCount++;
          if (count === 0 || individualCount < count) count = individualCount;
        }
        break;
      }
    }
  }
  return count;
}

const s = 7;
const nums = [2,3,1,2,4,3];

minSubArrayLen(nums, s);
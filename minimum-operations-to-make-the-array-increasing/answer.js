const minOperations = (nums) => {
  let newNum;
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i-1] >= nums[i]) {
      newNum = nums[i-1] + 1;
      count += newNum - nums[i];
      nums[i] = newNum;
    }
  }
  return count;
};

const nums = [1,1,1];

document.getElementById('ans').innerHTML = minOperations(nums);
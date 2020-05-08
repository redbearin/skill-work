function minStartValue(nums) {
  let lowestValue = Infinity;
  let sum = nums[0];
  for (let index = 1; index < nums.length; index++) {
    sum += nums[index];
    if (sum < lowestValue) lowestValue = sum;
  }
  return lowestValue < 1 ?  1 - lowestValue : 1;
}

const nums = [1,2];

minStartValue(nums);


const runningSum = (nums) => {
  let sum = 0;
  let sumArray = [];
  // cycles through each number using for loop
  // and increase sum; push latest sum to sumArray
  for (let index =0; index < nums.length; index++)
  {
    sum += nums[index];
    sumArray.push(sum);
  }
  return sumArray;
}

const nums = [3,1,2,10,1];
runningSum(nums);
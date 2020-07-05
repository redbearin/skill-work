const runningSum = (nums) => {
  let sum = 0;
  let sumArray = [];
  nums.forEach(number => {
    sum += number;
    sumArray.push(sum);
  });
  return sumArray;
}

const nums = [3,1,2,10,1];
runningSum(nums);
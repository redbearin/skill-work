const getSumAbsoluteDifferences = (nums) => {
  const arrAbsSums = [];
  // go through each index in nums array
  for (let index = 0; index < nums.length; index++) {
    let absSum = 0;
    for (let index1 = 0; index1 < nums.length; index1++) {
      // find abs diff between two numbers in
      // nums array and add to sums (abs Sum)
      absSum += Math.abs(nums[index] - nums[index1]);
    }
    // add the sum of absolute differences to the
    // array that includes all the sums
    arrAbsSums.push(absSum);
  }
  return arrAbsSums;
};

const nums = [1,4,6,8,10];
getSumAbsoluteDifferences(nums);

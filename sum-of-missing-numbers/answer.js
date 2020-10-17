const sumMissingNumbers = (nums) => {
  nums.sort((a,b) => a - b);
  missingNums = [];
  for (let index = 0; index < nums.length - 1; index++) {
    // check gap between numbers
    let difference = nums[index + 1] - nums[index];
    // if a gap exists
    if (difference > 1) {
      // step by step for the size of the gap
      for (let index1 = 1; index1 < difference; index1++) {
        missingNums.push(nums[index] + index1);
      }
    }  
  }
  // sum the missing numbers
  return missingNums.reduce((accumulator, element) => accumulator + element);
}

nums = [60, 50, 40, 30, 20, 10];
sumMissingNumbers(nums);
function missingNumber(nums){
  nums.sort((a, b) => a - b);
  for(var index = 1; index < nums.length; index++) {
    if (nums[index -1] !== nums[index] -1) {
      return nums[index -1] + 1;
    }
  }
}
var nums = [91,88,87,92,90,93,94,86,95];
missingNumber(nums);
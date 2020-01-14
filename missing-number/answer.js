function missingNumber(nums){
  nums.sort();
  for(var index = 1; index < nums.length; index++) {
    if (nums[index -1] !== nums[index] -1) {
      return nums[index -1] + 1;
    }
  }
}
var nums = [9,6,4,2,3,5,7,0,1];
missingNumber(nums);
function majorityElement(nums) {
  var majorityBase = nums.length/2;
  for (var index = 0; index < nums.length; index++) {
    var count = 0;
    for (var index1 = 0; index1 < nums.length; index1++) {
      if(nums[index] === nums[index1]) {
        count++;
      }
    }
    if (count > majorityBase) {
      return nums[index];
    }
  }
}

var nums = [2,2,1,1,1,2,2];
majorityElement(nums);
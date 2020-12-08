function singleNumber (nums) {
  for (var index = 0; index < nums.length; index++) {
    var match = false;
    for (var index2 = 0; index2 < nums.length; index2++) {
      if(index === index2) {
        continue;
      }
      if (nums[index] === nums[index2]) {
        match = true;
      }
    }
    if (match === false) {
      return nums[index];
    }
  }
};

var nums = [2,2,1];

singleNumber(nums);
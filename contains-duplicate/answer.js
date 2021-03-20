function containsDuplicate(nums) {
  for(var index = 0; index < nums.length; index++) {
    for(var index2 = 0; index2 < nums.length; index2++) {
      if(index === index2) continue;
      if (nums[index] === nums[index2]) {
        return true;
      }
    }
  }
  return false;
}

var nums = [1,1,1,3,3,4,3,2,4,2];

containsDuplicate(nums);
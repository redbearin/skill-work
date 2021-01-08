function smallerNumbersThanCurrent(nums) {
  var countArray = [];
  for(var index = 0; index < nums.length; index++) {
    var count = 0;
    for (var index1 = 0; index1 < nums.length; index1++) {
      if (nums[index1] < nums[index]) count++;
    }
    countArray.push(count);
  }
  return countArray;
}

const nums = [6,5,4,8];

smallerNumbersThanCurrent(nums);

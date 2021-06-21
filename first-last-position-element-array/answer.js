function searchRange(nums, target) {
  var targetIndices = [-1, -1]
  for (var numsIndex = 0; numsIndex < nums.length; numsIndex++) {
    if (nums[numsIndex] === target) {
      targetIndices[0] = numsIndex;
      for (var index = numsIndex; index < nums.length; index++) {
        if (nums[index] === target) {
          continue;
        } else {
          targetIndices[1] = index-1;  
          return targetIndices;
        }     
      }
    }
  } 
  return targetIndices;
}

var nums = [5,7,7,9,9,10]
var target = 9;

searchRange(nums, target);
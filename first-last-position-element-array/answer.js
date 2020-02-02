function searchRange(nums, target) {
  var targetIndices = []
  for (var numsIndex = 0; numsIndex < nums.length; numsIndex++) {
    if (nums[numsIndex] === target) {
      targetIndices.push(numsIndex);
    }
  } 
  if (targetIndices.length === 1) targetIndices.push(targetIndices[0]); 
  if (targetIndices.length > 1) return targetIndices;
  if (!targetIndices.length) return [-1,-1];
}

var nums = [5,7,7,9,9,10]
var target = 5;

searchRange(nums, target);
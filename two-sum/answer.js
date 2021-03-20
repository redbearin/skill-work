function twoSum(nums, target) {
  var indices = [];
  var matchFound = false;
  for (var positionIndex = 0; positionIndex < nums.length; positionIndex++) {
    for (var loopIndex = 0; loopIndex < nums.length; loopIndex++) {
      if (nums[positionIndex] + nums[loopIndex] === target) {
        indices.push(positionIndex);
        indices.push(loopIndex);
        matchFound = true;
      }
    }
    if (matchFound) break;
  }
  return indices;
}

var nums = [2, 7, 11, 15];
var target = 13; 
twoSum(nums, target);


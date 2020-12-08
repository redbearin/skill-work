function sumRange(nums, i, j) {
  var sum = 0;
  for (var index = i; index <= j; index++) {
    sum += nums[index];
  }  
  return sum; 
}

var nums = [-2, 0, 3, -5, 2, -1];
var i = 2;
var j = 5;

sumRange(nums, i, j);
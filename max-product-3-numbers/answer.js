function maximumProduct(nums) {
  nums = nums.sort((a, b) => a - b);
  var product = 1;
  for (var index = nums.length - 1; index > nums.length - 4 ; index--) {
    product *= nums[index];
  }
  return product;
};

var nums = [10,9,4,5,32,2];

maximumProduct(nums);

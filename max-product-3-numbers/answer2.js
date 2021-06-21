function maximumProduct(nums, k) {
  nums = nums.sort((a, b) => a - b);
  var product = 1;
  for (var index = nums.length - 1; index > nums.length - k - 1 ; index--) {
    product *= nums[index];
  }
  return product;
};

var nums = [1,19,4,5,7,22];

var k = 4

maximumProduct(nums, k);
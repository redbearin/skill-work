function rotate(nums, k) {
  const lastIndex = nums.length -1;
  for (let index = lastIndex; index > lastIndex - k; index--) {
    let removedNumber = nums.pop();
    nums.unshift(removedNumber);
  }
  return nums;
}
const nums = [-1,-100,3,99];
const k = 2;

rotate(nums, k);
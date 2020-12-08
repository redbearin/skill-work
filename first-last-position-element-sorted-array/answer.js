function searchRange(nums, target) {
  let lowIndex = 0;
  let highIndex = nums.length  - 1;
  while(lowIndex < highIndex) {
      const midIndex = Math.floor((lowIndex + highIndex) / 2);
      nums[midIndex] >= target ? highIndex = midIndex : lowIndex = midIndex + 1;
  }
  if (nums[lowIndex] !== target) {
      return [-1,-1];
  }
  const actualLowIndex = lowIndex; 
  highIndex = nums.length - 1;
  while (lowIndex < highIndex) { 
      const midIndex = Math.floor((lowIndex + highIndex) / 2);
      nums[midIndex] <= target ? lowIndex = midIndex + 1 : highIndex = midIndex;
  }
  const highIndex2 = highIndex - 1;
  return nums[highIndex] === target ? '[' + actualLowIndex + ', ' + highIndex + ']' : '[' + actualLowIndex + ', ' + highIndex2 + ']';
}

const nums = [2,3,3,4,5,5,6,7,8];
const target = 3;

document.getElementById('positions').innerHTML = searchRange(nums, target);
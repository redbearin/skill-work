const allPairs = (nums, target) => {
  const pairs = [];
  // numbers smallest to largest
  nums.sort((a, b) => a - b);
  // find pairs
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // when a pair = target
      // order pair smallest first
      if (nums[i] + nums[j] === target) {
        if (nums[i] < nums[j])
          pairs.push([nums[i], nums[j]]);
        else
          pairs.push([nums[j], nums[i]]);
      }
    }
  }
  return pairs;
}

const nums = [4, 5, 1, 3, 6, 8];
const target = 9;
document.getElementById('ans').innerHTML = allPairs(nums, target);
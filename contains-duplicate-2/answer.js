function containsNearbyDuplicate(nums, k) {
  for (let indexFirst = 0; indexFirst < nums.length - 1; indexFirst++) {
    for (let indexSecond = indexFirst + 1; indexSecond < nums.length; indexSecond++) {
      if (nums[indexFirst] === nums[indexSecond] && Math.abs(indexSecond - indexFirst) <= k) return true;
    }
  }
  return false;
}

let nums = [1,2,3,1,2,3];
let k = 2;
containsNearbyDuplicate(nums, k);
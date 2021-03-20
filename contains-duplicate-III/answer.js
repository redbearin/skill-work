function containsNearbyAlmostDuplicate (nums, k, t) {
  for (let index = 0; index < nums.length - 1; index++) {
    for (let index1 = index + 1; index1 < nums.length; index1++) {
      if (Math.abs(nums[index] - nums[index1]) <= t && 
          Math.abs(index - index1) <= k) return true;
    }
  }
return false;
}

const nums = [1,0,1,1];
const k = 1;
const t = 2;

document.getElementById('booleanAnswer').innerHTML = containsNearbyAlmostDuplicate (nums, k, t);
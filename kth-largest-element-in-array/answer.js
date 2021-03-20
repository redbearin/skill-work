function findKthLargest(nums, k) {
  const sortedNums = nums.sort((a,b) => a - b);
  return parseInt(sortedNums.splice(-k, 1).join());
}

const nums = [3,2,3,1,2,4,5,5,6];
const k = 4;

document.getElementById("number").innerHTML = findKthLargest(nums, k);


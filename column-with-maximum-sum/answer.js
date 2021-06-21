const maxSum = (nums, n) => {
  let temp, col;
  let maxSum = 0;
  // step number by number up to n
  for (let i = 0; i < n; i++) {
    temp = 0
    // multiples of n
    for (let j=i; j < nums.length; j += 4) {
      temp += nums[j];
    }
    // if bigger set max and set column #
    if (temp > maxSum) {
      maxSum = temp;
      col = i + 1;
    }
  }
  return col;
}

const nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19]
const n = 4

document.getElementById('ans').innerHTML = maxSum(nums, n);
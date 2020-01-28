function findMissingNumbers(nums) {
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  const range = (max, min, step) => Array.from({ length: (max - min) / step + 1}, (_, i) => min + (i * step));
  let completeRange = range(max, min, 1);
  return completeRange.filter(element => !nums.includes(element));
};

var nums = [4,3,2,7,8,2,3,1];

findMissingNumbers(nums);
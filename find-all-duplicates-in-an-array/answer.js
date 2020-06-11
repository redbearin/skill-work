const findDuplicates = (nums) => {
  nums.sort();
  let duplicates = [];
  for (let index = 0; index < nums.length - 1; index++) {
    if (nums[index] === nums[index + 1]) {
      duplicates.push(nums[index]);
    }
  }
  return duplicates;
}

const nums = [4,3,2,7,8,2,3,1];

findDuplicates(nums);
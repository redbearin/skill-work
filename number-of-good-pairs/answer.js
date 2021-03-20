const numIdenticalPairs = (nums) => {
  let match = 0;
    for (let index = 0; index < nums.length - 1; index++) {
      // look for matches to right
      for (let index1 = index + 1; index1 < nums.length; index1++) {
        if (nums[index] === nums[index1])
          match++
      }
    }
  return match;
};

const nums = [1,2,3];

numIdenticalPairs(nums);
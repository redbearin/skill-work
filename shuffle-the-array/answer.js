const shuffle = (nums, n) => {
  const reordered = [];
  // cycle through array and add
  // # at index and number at index
  // + n to the reordered array
  for (let index  = 0;  index < nums.length - n; index++) 
    reordered.push(nums[index], nums[index + n]);
  return reordered;
};

const nums = [1,1,2,2];
const n = 2;

shuffle(nums, n);
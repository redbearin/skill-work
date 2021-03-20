const findNumbers = (nums) => {
  let count = 0;
  for (let index = 0; index < nums.length; index++)  {
    // convert number to string and get num digits
    let len = nums[index].toString().length;
    // num digits / 2 has no remainder (even)
    if(len % 2  === 0)
      count++;
  }
  return count;
};

const nums = [555,901,482,1771];
findNumbers(nums);
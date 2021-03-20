const findLHS = (nums) => {
  // keep track of longest length
  let maxLength = 0;

  // build object with counts for each number
  const numCountObj = {};
  for (let index = 0; index < nums.length; index++) {
    let number = nums[index];
    if (numCountObj[number]) numCountObj[number] += 1;
    else numCountObj[number] = 1;
  }

  // convert object to array w. subarrays
  const numCountArr = Object.keys(numCountObj).map(key => [Number(key), numCountObj[key]]);

  // count occurances of numbers (length) when numbers are one apart
  for (let index = 0; index < numCountArr.length - 1; index++) {
    if (numCountArr[index][0] + 1 === numCountArr[index+1][0]) {
      let length = numCountArr[index][1] + numCountArr[index + 1][1]; 
      if (length > maxLength) 
        maxLength = length;
    }
  }
  return maxLength;
};

const nums = [1,3,2,2,5,2,3,7];
findLHS(nums);
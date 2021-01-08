const rob = (nums) => {
  let odds = nums.reduce((accumulator, currentValue, index) =>  {
    if (index % 2 !== 0) 
      accumulator += currentValue;
    return accumulator;
  });
  let evens = nums.reduce((accumulator, currentValue, index) =>  {
    if (index % 2 === 0) 
      accumulator += currentValue;
    return accumulator;
  }); 
  return Math.max(odds, evens); 
}

const nums = [1,2,3,1];

rob(nums);
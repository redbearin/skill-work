function findNumbers(nums) {
  let count = 0;
  nums.forEach (number => {
    if(number.toString().length % 2 === 0) count++;
  });
  return count;
}

let nums = [12,345,2,6,7896];

findNumbers(nums);
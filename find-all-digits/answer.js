const findAllDigits = (arr) => {
  const arrStr = [];
  const nums = [0,0,0,0,0,0,0,0,0,0];
  // convert array of numbers to array of strings
  for (let index = 0; index < arr.length; index++) {
    arrStr.push(arr[index].toString());
  }
  // check the nums array
  for (let index = 0; index < arrStr.length; index++) {
    for (let index1 = 0; index1 < arrStr[index].length; index1++) {
      // nums array does not have index associated with
      // that num filled (first time it has been found)
      if(!nums[+arrStr[index][index1]])
        // mark it filled
        nums[+arrStr[index][index1]] = '*';
      // nums array has no more zeros
      if (!nums.includes(0)) 
        return +arrStr[index];
    }
  }
  // did not get rid of all zeros iin nums array
  // means at least one number not founds
  return 'Missing Digits';
};

const arr = [5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381];

findAllDigits(arr);
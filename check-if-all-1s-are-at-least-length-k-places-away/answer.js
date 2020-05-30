const kLengthApart = (nums, k) => {
  let index = 0;
  while (index < nums.length) {
    if (index + k + 1 > nums.length - 1) return false;
    if (nums[index] === 1) {
      let count = 0;
      for (let index1 = index + 1; index1 < nums.length; index1++) {
        count++;
        if (nums[index1] === 1 && count < k + 1 ) return false;
        if (nums[index1] === 1 && count >= k + 1 ) {
          if(index1 === nums.length - 1) return true;
          index = index1;
          break;
        }
      }    
    }
    else {
      index++;
    }
  }
  return true;
};

const nums = [1,0,0,0,1,0,0,1];
const k = 2;

kLengthApart(nums, k);

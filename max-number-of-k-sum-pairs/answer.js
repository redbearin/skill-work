const maxOperations = (nums, k) => {
  let pairs = 0;
  for (let index = 0; index < nums.length; index++) {
    for (let index1 = 0; index1 < nums.length; index1++) {
      if (index !== index1) {
        if (nums[index] + nums[index1] === k) {
          nums[index] = '*';
          nums[index1] = '*';
          pairs++;
          break;
        }
      }
    }
  } 
  return pairs; 
};

const nums = [3,1,3,4,3];
const k = 6;

maxOperations(nums, k);
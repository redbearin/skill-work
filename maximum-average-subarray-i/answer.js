const findMaxAverage = (nums, k) => {
  // maximum total for subarray of length k
  let biggestTtl = 0;
  for (let index = 0; index < nums.length - k + 1; index++) {
    let tempTtl = 0;
    // cycle through subarray of len k  and total
    for (let index1 = index; index1 < index + k; index1++) {
      tempTtl += nums[index1];
    }
    // if total of this subarray bigger 
    // biggestTtl replace with this total
    if (tempTtl > biggestTtl)
      biggestTtl = tempTtl;
  }  
  // calculate avg and return
  return biggestTtl/k;
};

const nums = [1,12,-5,-6,50,3];
const k = 4; 
findMaxAverage(nums, k);
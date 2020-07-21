const singleNumber = (nums) => {
  // go through each elment in nums array
  for (let index = 0; index < nums.length; index++) {
    // skip the index if it has been identified as
    // having a matching number
    if (nums[index] === '*') 
      continue;

    // initialize the counter
    let count = 0; 

    // check other elements to see if there is a match
    for (let index1 = 0; index1 < nums.length; index1++) {
      // if the element is the same as element in 
      // outer loop, skip the element
      if (index1 === index) 
        continue;

      // matching element
      // include a mark for that element
      // increment the counter 
      if (nums[index] === nums[index1]) {
        nums[index1] = '*';
        count++;
      }
      
    } 

    // if there was a match include a
    // mark for the outer index element
    if (count) 
      nums[index] = '*';

    // if the counter is still 0
    //there are no other matching elements
    if (!count) 
      return nums[index];

  }  
}

const nums = [0,1,0,1,0,1,99];

singleNumber(nums);
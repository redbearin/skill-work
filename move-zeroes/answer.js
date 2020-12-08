function moveZeros(nums){
  nums.forEach((element, index) => {
  if (element === 0) {
    nums.splice(index, 1);
    nums.push(0);
    }
  });
  return nums;
}

var nums = [0,1,0,3,12];
moveZeros(nums);
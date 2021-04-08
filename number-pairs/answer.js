const number_pairs = (nums) => {
  numsArr = nums.split(' ');
  numsArr.splice(0, 1);
  numsCount = {};
  count = 0;
  for (let i = 0; i < numsArr.length; i++) {
    if (numsCount[numsArr[i]])
      numsCount[numsArr[i]] += 1;
    else 
      numsCount[numsArr[i]] = 1;
  }
  for (let key in numsCount) {
    if (numsCount[key] % 2)
      count += (numsCount[key] - 1) / 2;
    else  
      count += numsCount[key] / 2;      
  }
  return count;
}

nums = "4 2 3 4 1";

document.getElementById('ans').innerHTML = number_pairs(nums);
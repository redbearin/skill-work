let sumOfUnique = (nums) => {
  numCounts = {};
  let final = [];
  for (let i = 0; i < nums.length; i++) {
    if (numCounts[nums[i]])
      numCounts[nums[i]]++;
    else
      numCounts[nums[i]] = 1;
  }
  for (key in numCounts) {
    if (numCounts[key] < 2)
      final.push(+key);
  }
  if (final.length)
    return final.reduce((element, accumulator) => accumulator += element);
  else 
    return 0;
};

const nums = [1,2,3,4,5];
document.getElementById('ans').innerHTML = sumOfUnique(nums);
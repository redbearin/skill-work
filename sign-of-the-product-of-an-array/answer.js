const arraySign = (nums) => {
  let product = nums.reduce((accumulator, value) => accumulator * value);
  if (product > 0)
    return 1;
  if (product === 0)
    return 0;
  else 
    return -1;
};

const nums = [-1,1,-1,1,-1];

document.getElementById('ans').innerHTML = arraySign(nums);
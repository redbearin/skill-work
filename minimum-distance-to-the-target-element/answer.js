const getMinDistance = (nums, target, start) => {
  const idx = nums.indexOf(target);
  return Math.abs(idx - start);
};

const nums = [1,1,1,1,1,1,1,1,1,1];
const target = 1;
const start = 0;

document.getElementById('ans').textContent = getMinDistance(nums, target, start);

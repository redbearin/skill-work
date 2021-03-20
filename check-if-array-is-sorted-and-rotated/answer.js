const check = (nums) => {
  const orig = [...nums];
  let back, flattened;
  let sorted = nums.sort();
  for (let i = 0; i < orig.length; i++) {
    if (orig[i] === sorted[0]) {
      back = orig.slice(i);
      front = orig.slice(0, i);
      back.push(front);
      break;
    }
  }
  flattened = back.flat();
  for (let i = 0; i < back.length; i++) {
    if (sorted[i] !== flattened[i])
      return false;
  }
  return true;
};

const nums = [1,2,3];

document.getElementById('ans').innerHTML = check(nums);
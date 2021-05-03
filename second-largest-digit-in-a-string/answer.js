const secondHighest = (s) => {
  let nums = [];
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i]))
      nums.push(s[i])
  }
  uniqueSorted = [...new Set(nums)].sort((a,b) => a - b);
  if (uniqueSorted.length === 1)
    return -1;
  return uniqueSorted[1];
};

const s = "abc1111";

document.getElementById('ans').innerHTML = secondHighest(s);

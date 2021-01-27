const largestAltitude = (gain) => {
  let max = 0;
  let total = 0;
  for (let index = 0; index < gain.length; index++) {
    total += gain[index];
    if (total > max)
      max = total;
  }
  return max;
};

const gain = [-4,-3,-2,-1,4,3,2];

largestAltitude(gain);

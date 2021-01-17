const totalMoney = (n) => {
  let total = 0;
  for (let index = 0; index < n; index++) {
    // count is 1 more than index
    // at indexes that are multiples of 7 add one to each count
    // subtract off number of multiples of 7 
    total += index + 1 + Math.floor(index/7) - (7 * Math.floor(index/7));
  }
  return total;
};

const n = 4;

totalMoney(n);
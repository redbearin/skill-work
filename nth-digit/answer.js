const findNthDigit = (n) => {
  const array = [];
  // build an subarrays of each number
  // converted to a string
  for (let index = 1; index < n + 1; index++) {
    array.push(index.toString().split(''));
  }
  // remove subarrays
  const flatArray = array.flat(1);
  // find the nth str digit and convert to num
  return parseInt(flatArray[n-1]);
};

const n = 14;

findNthDigit(n);
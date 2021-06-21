const integerReplacement = (n) => {
  // is the number is odd?
  // if so, subtract 1
  // if not, divide number by 2
  n % 2 ? n -= 1 : n /= 2;
  count++;

  // have not reached 1
  if (n !== 1) 
    // loop through again
    return integerReplacement(n);
  return count;
};

const n = 7;
let count = 0;
integerReplacement(n);

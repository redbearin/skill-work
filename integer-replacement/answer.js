const integerReplacement = (n) => {
  let count = 0;
  while(n > 1) {
    // the number is odd
    if (n % 2)
        // subtract 1
        n -= 1;
    // number is event
    else 
      // divide the number by 2
      n /= 2;
    count++;
  }
  return count;
};

const n = 7;
integerReplacement(n);
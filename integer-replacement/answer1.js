const integerReplacement = (n) => {
  let count = 0;
  while(n > 1) {
    // is the number is odd?
    // if so, subtract 1
    // if not, divide number by 2
    n % 2 ?  n -= 1 : n /= 2;

    count++;
  }
  return count;
};

const n = 7;
integerReplacement(n);
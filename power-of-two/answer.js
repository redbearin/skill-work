const isPowerOfTwo = (n) => {
  // if the log2 of the number is an integer 
  // it is a power of 2
  return Number.isInteger(Math.log2(n));
}

const n = 218;
isPowerOfTwo(n);
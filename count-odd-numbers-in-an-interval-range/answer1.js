const countOdds = (low, high) =>{
  let count = 0;
  let base;
  // set the base to an odd number
  // low is odd
  if(low % 2) 
    base = low;
  // low is not odd, move to next odd
  else
    base = low + 1;
  // loop through only odd numbers
  for (let num = base; num <= high; num += 2) {
    count++;
  }
  return count;
}

const low = 8;
const high = 10;
countOdds(low, high);
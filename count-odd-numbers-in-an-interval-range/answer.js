const countOdds = (low, high) =>{
  let count = 0;
  for (let num = low; num <= high; num++) {
    if (num % 2) 
      count++;
  }
  return count;
}

const low = 8;
const high = 10;
countOdds(low, high);
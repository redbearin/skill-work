const trailingZeroes = (n) => {
  let total = 1;
  let count = 0;
  for (let number = n; number > 1; number--) {
     total *= number;
  }
  while (total > 0) {
    if (total % 10 === 0) {
      count++;
      total /= 10;
    } else 
      break;
  }
  return count;   
}

const n = 20;
trailingZeroes(n);
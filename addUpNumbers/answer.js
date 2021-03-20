const addUpNumbers = (n) => {
  let total = 0;
  for (let num = 1; num <= n; num++) {
    total += num;
  }
  return total;
}

const n = 4;
addUpNumbers(n);
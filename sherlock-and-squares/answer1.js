const squares = (start, stop) => {
  let count = 0;
  for (let num = Math.floor(Math.sqrt(start));
       num <= stop; num++) {
    if (Math.pow(num, 2) > stop)
      break;
    if (Math.pow(num, 2) >= start &&
        Math.pow(num, 2) <= stop)
      count++;
  }
  return count;
}

const start = 1;
const stop = 1000000000;
squares(start, stop);
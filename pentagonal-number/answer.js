const pentagonal = (iteration) => {
  let count = 1;
  for (let num = 1; num < iteration; num++) {
    count += 5 * num;
  }
  return count;
}

const iteration = 8;

pentagonal(iteration);
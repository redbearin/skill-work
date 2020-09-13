const triangle = (number) => {
  let sum = 0;
  for (let num = 1; num <= number; num++) {
    sum += num;
  }
  return sum;
}

const number = 215;
triangle(number);
const numberOfSteps = (num) => {
  let count = 0;
  while(num > 0) {
    // if number even divide by 2
    // if number odd subtract 1
    num % 2 === 0 ? num /= 2 : num -= 1;
    count++;
  }
  return count;
}

const num = 123;
numberOfSteps(num);
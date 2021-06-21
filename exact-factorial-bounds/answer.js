const isExact = (num) => {
  let factorial = 1;
  count = 0;
  for (let number = 1; number < Infinity; number++) {
    count++;
    factorial *= number;
    if (factorial === num)
      return [num, count];
    if(factorial > num)
      return 'Not exact';
  }
};

const num = 125;

isExact(num);
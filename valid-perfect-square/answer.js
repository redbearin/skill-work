const isPerfectSquare = (num) => {
  // number to 1/2 power
  // divide that number by 1
  // use identity operator to 
  // determine if no remainder (integer)
  return num ** 0.5 % 1 === 0;
}

const num = 3;
isPerfectSquare(num);
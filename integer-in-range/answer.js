const intWithinBounds = (num, lower, upper) => {
  if (Number.isInteger(num) && 
      num > lower && 
      num < upper) 
    return true;
  else 
    return false;
}

const num = 4.5;
const lower = 3;
const upper = 8;

intWithinBounds(num, lower, upper);
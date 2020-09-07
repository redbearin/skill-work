const calculator = (num1, operator, num2) => {
  if (operator === '+')
    return num1 + num2;
  if (operator === '-')
    return num1 - num2;
  if (operator === '*')
    return num1 * num2;
  // division
  else 
    // if num2 is not zero divide two numbers
    // otherwise return error msg
    return num2 ? 
    (num1 / num2).toFixed(2) : 
    "Can't divide by 0!";
}

const num1 = 2;
const num2 = 0;
const operator = '/';

calculator(num1, operator, num2);

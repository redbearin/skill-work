const oddishOrEvenish = (num) => {
  // convert number to string
  const strNum = num.toString();
  let sum = 0;
  // cycle through each digit in string number
  for (let index = 0; index < strNum.length; index++) 
    // convert string digit to number and addd to sum
    sum += +strNum[index];
  // if remainder for sum / 2 has a value
  if (sum % 2) 
    return 'oddish';
  // if remainder for sum / 2 is zero
  else 
    return 'evenish';
}

const num = 373;
oddishOrEvenish(num);
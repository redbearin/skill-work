const happy = (num) => {
  // convert the number to string
  const strNum = num.toString();
  // total of squares of digits
  let total = 0;
  for (let index = 0; index < strNum.length; index++) {
      total += Math.pow(+strNum[index], 2);
  }
  if (total === 1)
    return true;
  if (total === 4)
    return false;
  else 
    // continue to loop recursively until 
    // you hit a 1 or a 4
    return happy(total);
};

const num = 107;
happy(num);

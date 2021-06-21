const divisibleByLeft = (num) => {
  const strNum = num.toString();
  const output = [false];
  for (let i = 1; i < strNum.length; i++) {
    if (Number.isInteger(+strNum[i] / +strNum[i-1]))
      output.push(true);
    else
      output.push(false);
  }
  return output;
}

num = 635;

divisibleByLeft(num);

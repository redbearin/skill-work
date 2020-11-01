const squareDigits = (num) => {
  const strNum = num.toString();
  let sqrNum = '';
  for (let index = 0; index < strNum.length; index++) {
    sqrNum += Math.pow(+strNum[index], 2);
  }
  return sqrNum;
}

const num = 2483;
squareDigits(num);
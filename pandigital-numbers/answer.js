const isPandigital = (num) => {
  const strArr = num.toString().split('').sort();
  const uniqueStrArr = [...new Set(strArr)];
  if (uniqueStrArr[0] !== '0') 
    return false;
  for (let index = 0; index < uniqueStrArr.length - 1; index++) {
    if (+uniqueStrArr[index] + 1 !== +uniqueStrArr[index + 1])
      return false;
  }
  return true;
}

const num = 90864523148909;
isPandigital(num);
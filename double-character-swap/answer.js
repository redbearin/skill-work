const doubleSwap = (str, swap1, swap2) => {
  let newStr = '';
  for (let index = 0; index < str.length; index++) {
    if (str[index] === swap1)
      newStr += swap2;
    else if (str[index] === swap2)
      newStr += swap1;
    else 
      newStr += str[index];
  }
  return newStr;
}

const str = "128 895 556 788 999";
const swap1 = "8";
const swap2 =  "9";
doubleSwap(str, swap1, swap2);
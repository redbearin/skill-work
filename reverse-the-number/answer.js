const rev = (num) => {
  let strNum = num.toString();
  const final = [];
  if(strNum[0] === "-")
    strNum = strNum.slice(1);
  for (let index = strNum.length - 1; 0 <= index; index--) {
    final.push(strNum[index]);
  }
  return final.join('');
};

const num = -122157;

rev(num);
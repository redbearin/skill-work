const uncensor = (str, vowels) => {
  let count = 0;
  let newStr = '';
  for (let index = 0; index < str.length; index++) {
    if(str[index] === '*') {
      newStr += vowels[count];
      count++;
    }
    else 
      newStr += str[index];
  }
  return newStr;
};

const str = "*PP*RC*S*"; 
const vowels = "UEAE";

uncensor(str, vowels);
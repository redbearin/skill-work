const evalAlgebra = (str) => {
  // break string into an array
  const strArr = str.split(' ');
  let val;
  // x is in the first position
  if (strArr[0] === 'x') {
    val = +strArr[4] - +strArr[2];
    if (strArr[1] === '+')
      return val;
    if (strArr[1] === '-')
      return -val;
  }
  // x is in the second position
  if (strArr[2] === 'x')  {
    val = +strArr[4] - +strArr[0];
    if (strArr[1] === '+')
      return val;
    if (strArr[1] === '-')
      return -val; 
  }
  // x is in the last position
  if (strArr[4] === 'x') {
    if (strArr[1] === '+')
      return +strArr[0] + +strArr[2];
    if (strArr[1] === '-')
    return +strArr[0] - +strArr[2];
  } 
};

const str = "4 - x = 1";

document.getElementById('ans').textContent = evalAlgebra(str);
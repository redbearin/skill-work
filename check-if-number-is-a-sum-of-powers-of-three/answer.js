const checkPowersOfThree = (n) => {
  // create array to hold possible
  const powArr = [];
  // determine the possible powers
  for (let i = 0; i < Infinity; i++) {
    if (Math.pow(3, i) < n)
      powArr.push(i);
    else 
      break;
  }
  let sum;
  const comboLen = Math.pow(2, powArr.length);
  
  // go through all possible combinations
  for (let i = 0; i < comboLen; i++){
    sum = 0;
    for (let j = 0; j < powArr.length; j++) {
      // i index and 2 to j power has a nonzero value
      if (i & Math.pow(2, j))
        // add to sum
        sum += Math.pow(3, powArr[j]);
    }
    // sum matches n
    if (sum === n) 
      return true;
  }
  return false;
};

const n = 12;

document.getElementById('ans').innerHTML = checkPowersOfThree(n);
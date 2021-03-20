const decrypt = (code, k) => {
  const sumArr = [];
  for (let index = 0; index < code.length; index++) {
    let sum = 0;
    let count = 1;
    let index1;
    // positive k
    if(k >= 0) {
      // setting the next index to add to sum
      if (index === code.length -1) 
        index1 = 0;
      else
        index1 = index + 1;
      // sum index by index until k reached
      while (count <= k) {
        sum += code[index1];
        count++;
        if(index1 === code.length -1)
          index1 = 0;
        else
          index1++;
      }
    }
    // negative k
    else {
      // setting next index to add to sum
      if (index === 0) 
        index1 = code.length - 1;
      else
        index1 = index - 1;
      // sum index by index until k reached
      while (-count >= k) {
        sum += code[index1];
        count++;
        if(index1 === 0)
          index1 = code.length - 1;
        else
          index1--;
      }
    }
    // add to the array of sums
    sumArr.push(sum);
  }
  return sumArr;
};

const code = [1,2,3,4];
const k = 0;

decrypt(code, k);
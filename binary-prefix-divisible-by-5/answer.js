const prefixesDivBy5 = (A) => {
  let strBinaryNum = '';
  const output = [];
  for (let index = 0; index < A.length; index++) {
    // convert bit to string bit
    let stringBit = A[index].toString();
    // build binary number for all bits up to and
    // including bit at index
    strBinaryNum += stringBit;
    // convert binary Number to base 10 number
    // determine if it is divisible by 5
    if (parseInt(strBinaryNum, 2) % 5 === 0) {
      output.push(true);
    } else {
      output.push(false);
    }
  }
  return output;
};

const A = [1,1,1,0,1];

prefixesDivBy5(A);
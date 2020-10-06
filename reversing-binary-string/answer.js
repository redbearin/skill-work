const reversedBinaryInteger = (int) => {
  // convert int to binary string
  // convert to array and reverse
  // merge reversed array into a string
  const revBin = (int).toString(2).split('').reverse().join('');
  // create an integer from the binary string
  return parseInt(revBin, 2); 
}

const int = 12;

reversedBinaryInteger(int);
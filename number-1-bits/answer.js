function hammingWeight(n) {
  let oneCount = 0;
  for(let index = 0;index < 32; index++){
      if(n & 1 === 1) oneCount++;
      n >>= 1;   
  }
  return oneCount;
};

var n = 00000000000000000000000000001011;
hammingWeight(n);

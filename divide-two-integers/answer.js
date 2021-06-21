function divide (dividend, divisor) {
  let count = 0;
  let sum = Math.abs(divisor);
  let negativeAnswer = false;
  if ((dividend < 0 && divisor > 0) || 
      (dividend >= 0 && divisor < 0)) 
      negativeAnswer = true;
  while (sum <= Math.abs(dividend)){
    sum += Math.abs(divisor);
    count++;
  }
  return negativeAnswer === false ? count : -count;
}

const dividend = 7;
const divisor = -3;

divide (dividend, divisor);
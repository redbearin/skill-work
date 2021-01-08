function plusOne(digits) {
  var lastIndex = digits.length - 1;
  var lastValue = digits[lastIndex];
  digits[lastIndex] = lastValue + 1;
  return digits;
}

digits = [1,2,3];

plusOne(digits);
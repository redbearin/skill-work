function reverseDigits(num) {
  var numString = num.toString();
  var newNumString = '';
  var base = 0;
  if (numString[0] === '-') {
    base = 1;
  }
  for (var index = numString.length-1; index >= base; index-- ) {
    newNumString += numString[index];
  }
  newNumString = newNumString.replace(/^0+/, '');
  if (base) {
    newNumString = '-' + newNumString;
  }
  return parseInt(newNumString);
}

reverseDigits(123);
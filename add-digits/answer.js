function sumDigits(number) {
  var sum = 0;
  while(number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
}

function addDigits(num) {
  var newNumber = sumDigits(num);
  var stringNewNumber = '' + newNumber;
  while (stringNewNumber.length > 1) {
    newNumber = sumDigits(newNumber);
    stringNewNumber = '' + newNumber;
  }
  return newNumber;
}

var num = 38;
addDigits(num);
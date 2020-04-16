function isHappy(n) {
  var stringNumber = n.toString();
  var newNumber = 0;
  for (var index = 0; index < stringNumber.length; index++) {
    newNumber += Math.pow(parseInt(stringNumber[index]), 2);
  }
  count++;
  if (count > 10) return false;
  if( newNumber > 1) return isHappy(newNumber);
  if (newNumber === 1) return true;
};

var count = 0;
var n = 15;

isHappy(n);

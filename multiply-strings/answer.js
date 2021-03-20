function multiply(num1, num2) {
  var array1 = num1.split('').reverse();
  var array2 = num2.split('').reverse();
  var number1 = 0;
  var number2 = 0;
  for (var num1Index = 0; num1Index < num1.length; num1Index++) {
    number1 = number1 + array1[num1Index] * Math.pow(10, num1Index);
  }
  for (var num2Index = 0; num2Index < num2.length; num2Index++) {
    number2 = number2 + array2[num2Index] * Math.pow(10, num2Index);
  }
  return "" + number1 * number2;
};

var num1 = "321";
var num2 = "23";

document.getElementById("string").innerHTML = multiply(num1, num2);

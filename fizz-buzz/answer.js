function fizzBuzz(n) {
  var output = [];
  for (number = 1; number <= n; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      output.push('Fizz Buzz');
    } else if (number % 3 === 0) {
      output.push('Fizz');
    } else if (number % 5 === 0) {
      output.push('Buzz');
    } else {
      output.push(number);
    }
  }
  return output;
}

var n = 15;

fizzBuzz(n);


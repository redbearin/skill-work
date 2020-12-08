function countPrimes(n) {
  var count = 0;
  for (var number = n - 1; number > 1; number--) {
    var isPrime = true;
    for (var divisor = 2; divisor <= Math.sqrt(number); divisor++) {
      if (number % divisor === 0) {
        isPrime = false;
        break;
      }
    }
    if(isPrime) {
      count++;
    }
  }
  return count;
}

var n = 10;

countPrimes(n);
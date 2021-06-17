const countPrimes = (n) => {
  let count = 0;
  let isPrime;
  // go number by number down to one
  // incrementing from top, easily
  // eliminates case where there is a 1
  for (let num = n - 1; num > 1; num--) {
    isPrime = true;
    for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
      // check all divisors
      if (num % divisor === 0) {
        isPrime = false;
        break;
      }
    }
    // if it is a prime, increment count
    if(isPrime) {
      count++;
    }
  }
  return count;
}

var n = 25;

document.getElementById('ans').textContent = countPrimes(n);
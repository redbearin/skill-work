function isUgly(num){
  var primeFactors = [];
  
  for (var i = 2; i <= num; i++) {
    while (num % i === 0) {
      primeFactors.push(i);
      num /= i;
    }
  }
  
  for (var index = 0; index < primeFactors.length; index++) {
    if (primeFactors[index] === 2 || primeFactors[index] === 3 || primeFactors[index] === 5) {
      continue;
    } 
    return false;
  }
  return true;
}

var num = 14;
isUgly(num);
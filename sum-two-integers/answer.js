function getSum(a, b) {
  for (var index = 0 ; index < Math.abs(b); index++) {
    b >= 0 ? a++ : a--;
  }
  return a;
}

a = -2;
b = 3;

getSum(a, b);
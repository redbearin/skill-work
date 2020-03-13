function subtractProductAndSum(n) {
  var nString = n.toString();
  var product = 1;
  var sum = 0;
  for (var index = 0; index < nString.length; index++) {
    product *= parseInt(nString[index]);
    sum += parseInt(nString[index]);
  }
  return product - sum;
}

n = 234;

subtractProductAndSum(n);

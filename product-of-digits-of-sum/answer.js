const sumDigProd = (...args) => {
  let sum = 0;
  // cycle through arguments
  for (let index = 0; index < args.length; index++) {
    sum += args[index];
  }
  // change sum to string
  let sumStr = sum.toString();
  // continue as long as sumStrlength is > 1
  while (sumStr.length > 1) {
    let product = 1;
    // find product of digits
    for (let index = 0; index < sumStr.length; index++) {
      product *= +sumStr[i];
    }
    // replace sumStr number with product
    sumStr = product.toString();
  }
  return +sumStr;
}

sumDigProd(1, 2, 3, 4, 5, 6);
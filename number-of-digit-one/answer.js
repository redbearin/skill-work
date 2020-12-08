function countDigitOne(n) {
  let count = 0;
  for (let number = 1; number <= n; number++) {
    const stringNumber = number.toString();
    for (let index = 0; index <= stringNumber.length; index++) {
      if (stringNumber[index] === "1") count++;
    }
  }
  return count++;
}

const n = 13;

document.getElementById("count").innerHTML = countDigitOne(n);
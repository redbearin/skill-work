function removeLeadingZeroes(numberLeft) {
  if (numberLeft[0] === 0) {
    numberLeft = numberLeft.splice(0, 1);
  }
  if (numberLeft[0] === 0) return removeLeadingZeroes(numberLeft);
  else return numberLeft;
}

function removeKdigits(num, k) {
    let numberRemaining = Infinity;
    for (let index = 0; index < num.length; index++) {
      let arrayRemNums = num.split('');
      let count = 1;
      while (count <= k) {
        arrayRemNums.splice(index, 1);
        count++;
      }
      let numberLeft = +arrayRemNums.join('');
      numberLeft = removeLeadingZeroes(numberLeft);
      if (numberLeft < numberRemaining) {
        numberRemaining = numberLeft;
      } 
    }
  return numberRemaining;
}

const num = "10200";
const k = 1;

removeKdigits(num, k);
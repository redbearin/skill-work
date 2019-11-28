function isPalindrome(number) {
  let stringNumber = '' + number;
  let numberArray = stringNumber.split('');
  let comparisonArray = [];
  for(let index = numberArray.length -1; 0 <= index; index--) {
    comparisonArray.push(numberArray[index]);
  }
  for (let index = 0; index < numberArray.length; index ++) {
    if (comparisonArray[index] !== numberArray[index]) {
      return false;
    }
  }
  return true;
}

isPalindrome(121);
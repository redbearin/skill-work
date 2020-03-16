function maximum69Number(num) {
  var numArray = num.toString().split('');
  for (let index = 0; index < numArray.length; index++) {
    if (numArray[index] === '6') {
      numArray[index] = '9';
      break;
    }
  }
  return parseInt(numArray.join(''));
}

let num = 9996;

maximum69Number(num);





const topsyTurvy = (start, end) => {
  const notTopsy = ['2','3','4','5','7'];
  const topsyNumbers = [];
  let strNum;
  let number = '';
  let reversed = '';
  // go number by number from start to end
  for(let num = start; num <= end; num++) {
    // convert the number to a string number
    strNum = num.toString();
    // go digit by digit through string number
    // if you run into something that can't be topsy
    // break out
    // otherwise build a copy called number
    for (let i = 0; i < strNum.length; i++) {
      if (notTopsy.includes(strNum[i]))
        break;
      number += strNum[i];
    }
    // copy (number) is the same as the string of the number
    if (number === strNum) {
      // reverse the copy and flips 6s to 9s
      for (let i = number.length - 1; i >= 0; i--) {
        if (number[i] === '6')
          reversed += '9';
        else if (number[i] === '9')
          reversed += 6;
        else 
          reversed += number[i];
      }
      // reversed number is same as the copy (number)
      // if is a topsy turvy number
      // add to array
      if (number === reversed) 
        topsyNumbers.push(+number);
    }
    number = '';
    reversed = '';
  }
  return topsyNumbers;
}

let start = 0;
let end = 10;

document.getElementById('ans').textContent = topsyTurvy(start, end);
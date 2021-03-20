const engToNums = (num) => {
  numArr = num.split(' ');

  const conver = {one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90};


  if (numArr.length === 4) {
    return conver[numArr[0]] * 100 + 
           conver[numArr[2]] + 
           conver[numArr[3]];
  }
  if (numArr.length === 3) {
    return conver[numArr[0]] * 100 + 
           conver[numArr[2]];
  }

  if (numArr.length === 2) {
    if (numArr.includes('hundred'))
      return conver[numArr[0]] * 100;
    else
      return conver[numArr[0]] + 
             conver[numArr[1]];
  }

  if (numArr.length === 1)
    return conver[numArr[0]];
}

const num = "seven hundred sixty seven";

document.getElementById('ans').innerHTML = engToNums(num);
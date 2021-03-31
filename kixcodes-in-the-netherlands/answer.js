const kixCode = (str) => {
  // break string into arr at commas
  const strArr = str.split(',');
  // array of strArr index 1 broken on spaces
  const arrOfIdx1 = strArr[1].trim().split(' ');
  // array of strArr index 2 broken on spaces
  const arrOfIdx2 = strArr[2].trim().split(' ');
  // remove any non-numeric from arrOfIdx1[1]
  // and replace with 'X'
  let last = '';
  for(let i = 0; i < arrOfIdx1[1].length; i++) {
    // a number
    if (!isNaN(arrOfIdx1[1][i]))
      last += arrOfIdx1[1][i];
    // not a number
    else
      last += "X";
  }
  return arrOfIdx2[0] + arrOfIdx2[1] + last;
}

const str = `Dijk, Antwoordnummer 80430, 2130 VA Hoofddorp`;
document.getElementById('ans').innerHTML = kixCode(str);

//`2500GG30250`
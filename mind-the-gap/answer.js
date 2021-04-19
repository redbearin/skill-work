const gapful = (num) => {
  let newNumStr, firstLast;
  if (num <= 100)
    return 100;
  // number > 100
  else {
    for (let i = 1; i < Infinity; i++) { 
      // number in minus direction   
      newNumStr = (num - i).toString();
      // add first and last digits to make new number
      firstLast = +(newNumStr[0] + newNumStr[newNumStr.length - 1]);
      if (+newNumStr % firstLast === 0)
        return +newNumStr;

      // number in plus direction
      newNumStr = (num + i).toString();
      // add first and last digits to make new number
      firstLast = +(newNumStr[0] + newNumStr[newNumStr.length - 1]);
      if (+newNumStr % firstLast === 0)
        return +newNumStr;
    }
  }
}
const num = 1442;
document.getElementById('ans').innerHTML = gapful(num);
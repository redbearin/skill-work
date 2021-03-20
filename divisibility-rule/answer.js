const divisibilityRule = (num) => {
  // initialize variables
  let sumLastRound, 
      strSumLastRound, 
      index, 
      idxArr;
  // initialize sumRound to get into while loop
  let sumRound = num;
  // number multipliers
  const arr = [1, 10, 9, 12, 3, 4];
  while (sumRound !== sumLastRound) {
    // reset sumLastRound number to round number
    sumLastRound = sumRound;
    // initialize sumRound
    sumRound = 0;
    // change the string so you can proceed digit by digit
    strSumLastRound = sumLastRound.toString();
    // starting strSumLastRound index (start at end)
    index = strSumLastRound.length - 1;
    // starting arr index (start at beginningg)
    idxArr = 0;
    while(index >= 0) {
      sumRound += +strSumLastRound[index] * arr[idxArr];
      index--;
      // reached the end of number multiplier array
      // return to first index
      if (idxArr === arr.length - 1)
        idxArr = 0;
      // increment to next index
      else
        idxArr++;
    }
  }
  return sumRound;
}

const num = 85299258;

document.getElementById("ans").innerHTML  = divisibilityRule(num);
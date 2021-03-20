const process = (arr, letter1, letter2, add, score) => {
  let change = 1;
  let index = 0;
  // as long as the first time through
  // or you have made an adjustment
  while (change > 0) 
  {
    //match the letter combination
    if (arr[index] === letter1 && 
        arr[index + 1] === letter2) {
      arr.splice(index,2);
      score += add;
      // return to beginning of array
      index = 0;
    }
    // doesn't match letter combination
    else {
      // reached the end of array
      if (index === arr.length - 2) {
        // no change, set to exit
        if (change === 1) 
          change = 0;
        // was change, check again
        else {
          index = 0;
          change = 1;
        }
      }
      // increment to next index
      else
        index++;
    }
  }
  return [arr, score];
}

const maximumGain = (s, x, y) => {
  const sArr = s.split('');
  let result1, result2;

  if (x > y) {
    result1 = process(sArr, 'a', 'b', x, 0);
    result2 = process(result1[0], 'b', 'a', y, result1[1]);
    return result2[1];
  }
  else {
    result1 = process(sArr, 'b', 'a', y, 0);
    result2 = process(result1[0], 'a', 'b', x, result1[1]);
    return result2[1];
  }
};

const s = "aabbaaxybbaabb";
const x = 5;
const y = 4;

maximumGain(s, x, y);
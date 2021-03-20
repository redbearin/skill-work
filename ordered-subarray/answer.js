const isOrdSub = (sub, arr) => {
  const matchArr = [];
  let index1 = 0;
  for (let index = 0; index < sub.length; index++) {
    while (index1 < arr.length) {
      // value in subarray index and array index match
      if(sub[index] === arr[index1]) {
        // add to the array of matches
        matchArr.push(sub[index]);   
        index1++; 
        // allows you to keep the position in the arr
        // for next subarray number
        break;  
      }
      index1++;
    }
  }

  // matchArray length and subarray length match
  if (matchArr.length === sub.length) 
  {
    for (let index = 0; index < sub.length; index++) {
      // index where matchArray and subarray do not match
      if (matchArr[index] !== sub[index]) 
        return false;
    } 
    return true;
  }
  // match Array and subarray are different lengths
  return false;
};
const sub = [5, 3, 1];
const arr = [1, 2, 3, 4, 5];

isOrdSub(sub, arr);


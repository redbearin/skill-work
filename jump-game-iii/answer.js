const canReach = (arr, startIdx) => {
  const stack = [startIdx];
  let index, lftIdx, rtIdx;
  
  while(stack.length) {
    // take the index off the bottom of the stack
    index = stack.shift();  
    // if the value of the current index is 0
    // the configuration works
    if (arr[index] === 0) {
      return true;
    }
    // set the new left index
    lftIdx = index - arr[index];
    // set the new right index
    rtIdx = index + arr[index];
    // mark array value that is the current index
    arr[index] = -1;
    
    // left index is within arr
    // and hasn't been the current index; add to stack
    if (lftIdx >= 0 && arr[lftIdx] >= 0) {
        stack.push(lftIdx);
    }
    // right index is within arr
    // and hasn't been the current index; add to stack
    if (rtIdx < arr.length && arr[rtIdx] >= 0) {
        stack.push(rtIdx);
    }
  }  
  return false;
};

const arr = [3,0,2,1,2];
const startIdx = 2;

canReach(arr, startIdx);
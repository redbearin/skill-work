const getLength = (arr) => {
  // copy of array
  const arrCopy = [...arr];
  const numOnly = [];
  while(arrCopy.length) {
    // remove last element
    const lastEle = arrCopy.pop();
    // last Element is an array
    if(Array.isArray(lastEle)) {
      // add back last element without outer bracket
      arrCopy.push(...lastEle);
    } 
    // last element is not an array
    else {
      numOnly.push(lastEle);
    }
  }
  // reverse the numOnly array to correct order 
  // and get length
  return numOnly.reverse().length;
}

const arr = [1, 2, [3, 4, [5, 6]]];
getLength(arr);
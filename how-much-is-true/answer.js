const countTrue = (arr) => {
  let count = 0;
  if (arr.length ===  0) 
    return 0;
  for (let index = 0; index < arr.length; index++)  {
    if (arr[index] === true) 
      count++;
  }
  return count;
}

const arr = [true, false, false, true, false];
countTrue(arr);
const lessEqual = (arr, numEle) => {
  // sort arr, low to high
  arr.sort((a,b) => a - b);
  // no elements then exactly one element <=
  if (numEle === 0)
    return 1;
  // find last lowest element
  lastEle = arr[numEle - 1];
  // last element is same
  // as next element
  // there is no solution
  if (arr[numEle] ===  lastEle)
    return 'null';
  // last element is different
  // than next element
  // this is the solution
  else
    return lastEle;
}

const arr = [10, 15, 20, 25];
const numEle = 0;

document.getElementById('ans').innerHTML = lessEqual(arr, numEle);
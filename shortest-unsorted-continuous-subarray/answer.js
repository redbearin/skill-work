const findUnsortedSubarray = (arr) => {
  // create a copy of the array
  const copy = [...arr];
  // sort the array
  arr.sort((a,b) => a-b);
  // array that says whether original array
  // element and sorted array element match
  const match = [];
  let start, end;
  // 
  for (let i = 0; i < arr.length; i++) {
    if (copy[i] === arr[i])
      match.push('y');
    else
      match.push('n');
  }
  // set first index where there
  // is a mismatch
  for (let i = 0; i < match.length; i++) {
    if (match[i] === 'n')
      start = i;
  }
  // set last index where there is
  // a mismatch
  for (let i = match.length - 1; i >= 0; i--) {
    if (match[i] === 'n')
      end = i;
  }
  // index where the matches between
  // original array and sorted array are not the same
  if (start !== end)
    return (start - end + 1);
  // array already sorted or is empty
  else
    return 0;
}

const arr = [1, 1, 1];

document.getElementById('ans').innerHTML = findUnsortedSubarray(arr);
const numbersToRanges = (arr) => {
  let subStart = arr[0];
  const ranges = [];
  // loop through elements in array
  for (let i = 0; i< arr.length - 1; i++){
    // second to last element
    if (i === arr.length - 2) {
      // new range and last element not in sequence
      if (subStart === arr[i] && arr[i] + 1 !== arr[i+1])
          ranges.push(subStart, arr[i+1]);
      // new range and next/last element in sequence
      else 
        ranges.push(subStart + '-' + arr[i+1]);
    }
    // not second to last element and 
    // this element and next element not in sequence
    else if (arr[i] + 1 !== arr[i+1]) {
      // single element
      if (subStart === arr[i])
        ranges.push(subStart);
      // range of elements
      else
        ranges.push(subStart + '-' + arr[i]);
      subStart = arr[i + 1];
    }
  }
  return ranges;
}
const arr = [1, 2, 3, 4, 99, 100];

document.getElementById('ans').innerHTML = numbersToRanges(arr);

const sortByLetter = (arr) => {
  // nothing in arr
  if(!arr)
    return [];
  // array that holds letter and idx
  const ltrAndIdx = [];
  // go index by index through arr
  for (let i = 0; i < arr.length; i++) {
    // go element by element through each item
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i].charCodeAt(j) > 96 &&
          arr[i].charCodeAt(j) < 123 ) {
        ltrAndIdx.push([arr[i][j], i]);
        break;
      }
    }
  }
  // sort based on letters
  ltrAndIdx.sort();
  // build a reordered array based on the
  // sorted letter order
  const reordered = [];
  for (let i = 0; i < ltrAndIdx.length; i++) {
    reordered.push(arr[ltrAndIdx[i][1]]);
  }
  return reordered;
}

const arr = ["572z", "5y5", "304q2"];
document.getElementById('ans').textContent = sortByLetter(arr);
const advancedSort = (arr) => {
  let final = [];
  let sub;
  for (let i =0; i < arr.length; i++) {
    // skip element if already removed
    if (arr[i] === '*')
      continue;
    // initialize subarray
    sub = [];
    // push the elment into the subarray
    sub.push(arr[i]);
    // go through array and look for matches
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        // add matches to subarray
        sub.push(arr[i]);
        // mark element as removed
        arr[j] = '*';
      }
    }
    // mark element as removed
    arr[i] = '*';
    // add subarray to final array
    final.push(sub);
  }
  return final;
}
const arr = ["b", "a", "b", "a", "c"];

document.getElementById('ans').innerHTML = advancedSort(arr);
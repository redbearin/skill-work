const highestOccurrence = (arr) => {
  let biggest = 0;
  let count;
  let final = [];
  for (let i = 0; i < arr.length; i++) {
    // already counted this element
    if (arr[i] === '*')
      continue;
    // reset count
    count = 0;
    // cycle through each element
    for(let j = 0; j < arr.length; j++) {
      // elements match
      if (arr[i] === arr[j]) {
        count++;
        // element is not itself
        if (i !== j)
          // mark element as counted
          arr[j] = '*';
      }
    }
    // biggest count
    if (count > biggest) {
      biggest = count;
      // reset final array
      final = [];
      // add new element to final array
      final.push(arr[i])
    }
    // count same as biggest count
    else if (count === biggest)
      // add element to final array
      final.push (arr[i]);
    // mark element as counted
    arr[i] = '*';
  }
  return final;
}

const arr = ["it", "keeps", "coding", "on", "or", "it", "gets", "the", "hose"];
document.getElementById('ans').innerHTML = highestOccurrence(arr);
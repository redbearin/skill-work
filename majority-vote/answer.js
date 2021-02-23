const majorityVote = (arr) => {
  let count;
  for (let i = 0; i < arr.length; i++) {
    // already checked this element
    if (arr[i] === '*') 
      continue;
    // initialize count
    count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
        // mark that you have checked this element
        if(i !== j)
          arr[j] = '*';
      }
    }
    if (count / arr.length > 0.5)
      return arr[i];
    // mark that you have checked this element
    arr[i] === '*';
  }
  // nothing meets majority criteria
  return 'null';
}

const arr = ["A", "B", "B", "A", "C", "C"];

document.getElementById('ans').innerHTML = majorityVote(arr);





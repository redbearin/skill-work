const commonChars = (A) => {
  // array of subarrayss
  const newA = [];
  const commonChars = [];
  // create an array of subarrays from the array of strings
  for (let index = 0; index < A.length; index++){
    newA.push(A[index].split(''));
  }
  // go through each index in the first subarray
  for (let index = 0; index < newA[0].length; index++) {
    // start count at 1, because the first subarray has 
    // the character
    let count = 1;
    // go through each index of the array beyond the first
    for (let index1 = 1; index1 < newA.length; index1++) {
      // determine the index that has the character in the
      // first subarray (no match will be -1)
      const elementIdx = newA[index1].indexOf(newA[0][index]);
      // if there is a match assign a "*" to that character in
      // subarray so we know it has already been matched
      // increment the counter
      if (elementIdx > -1) {
        newA[index1][elementIdx] = '*';
        count++;
      }
    }
    // count is the same as the number of subarrays
    // means the character appears in each subarray
    // which means it is a common character
    if (count === newA.length){
      commonChars.push(newA[0][index]);
    }
  }
  return commonChars;
};

const A = ["cool","lock","cook"];

commonChars(A);

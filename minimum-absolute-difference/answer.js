const minimumAbsDifference = (arr) => {
  const differences = [];
  // find absolute difference between elements 
  // in array and push subarray of elements and
  // difference [element1, element2, abs diff]
  for (let index = 0; index < arr.length; index++) {
    for (let index1 = index + 1; index1 < arr.length; index1++) {
      differences.push([arr[index], arr[index1], Math.abs(arr[index] - arr[index1])]);
    }
  }
  // sort the elment pairs by their abs
  // difference
  differences.sort((a,b) => a[2] - b[2]);
  // cycle thru differences array remove all
  // element pairs but the ones with the lowest
  // difference
  for (let index = differences.length -1; index >=0; index--) {
    if (differences[index][2] > differences[0][2]) {
      differences.splice(index, 1);
    } 
    // remove the difference value from subarray
    // reorder so the smallest element is in
    // index 0 of subarray
    else {
      differences[index].splice(2, 1);
      if (differences[index][0] > differences[index][1]) {
        let temp = differences[index][0];
        differences[index][0] = differences[index][1];
        differences[index][1] = temp;
      }
    }
  }
  // sort the subarrays based on the first
  // element
  differences.sort((a,b) => a[0] - b[0]);
  return differences;
};

const arr = [3,8,-10,23,19,-4,-14,27];

minimumAbsDifference(arr);

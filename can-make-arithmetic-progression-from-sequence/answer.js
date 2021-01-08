const canMakeArithmeticProgression = (arr) => {
  // distance between first two arr elements
  let difference;
  // sort in order so distances can be compared
  arr.sort((a,b) => a-b);

  // loop through array compare distance between sorted
  // elements
  for (let index = 1; index < arr.length; index++) {
    // find the distance between two elements
    let indDifference = arr[index] - arr[index - 1];
    // set the first distance for comparison
    if (index === 1)
      difference = indDifference;
    // if the distance does not match the first distance
    // it cannot be an arithmetic progession
    if (difference !== indDifference)
      return false;
  }
  return true;
}

const arr = [1,2,4];
canMakeArithmeticProgression(arr);
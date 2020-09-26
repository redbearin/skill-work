const positiveDominant = (arr) => {
  // remove duplicates from array
  const uniqueArr = [...new Set(arr)];
  let negCount = 0;
  let posCount = 0;
  // increment counts based on negative, positive (increment 
  // nothing if 0)
  for (let index = 0; index < uniqueArr.length; index++) {
    if (uniqueArr[index] < 0)
      negCount++;
    if (uniqueArr[index] > 0)
      posCount++;
  }
  // more positives than negatives
  if (posCount > negCount)
    return true;
  else 
    return false;
}
const arr = [1, 1, 1, 1, -3, -4];
positiveDominant(arr);
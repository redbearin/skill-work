const restoreString = (s, indices) => {
  const reordered = [];
  // cycle through each index in indices
  // get get the new index for that letter
  for (let index = 0; index < indices.length; index ++) {
    // move the letter at that index to the
    // position referred in the indices array
    reordered[indices[index]] = s[index];
  }
  // join the array elements
  return reordered.join('');
};

const s = "art";
const indices = [1,0,2];

restoreString(s, indices);
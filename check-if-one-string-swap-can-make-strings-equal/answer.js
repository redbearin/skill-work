const areAlmostEqual = (s1, s2) => {
  let s1CodeSum = 0;
  let s2CodeSum = 0;
  // number of different letters
  let diffLtrs = 0;
  for (let i = 0; i < s1.length; i++) {
    // more that two letters different
    if (diffLtrs > 2)
      return false;
    // letters are different
    if (s2[i] !== s1[i]) {
      // add the ASCII codes for the letter in 
      s1CodeSum += s1.charCodeAt(i);
      s2CodeSum += s2.charCodeAt(i);
      // increment the number of different 
      // letters counter
      diffLtrs++;
    }
  }
  // sum of the different ASCII codes 
  // in both words are the same
  if (s1CodeSum === s2CodeSum)
    return true;
  return 
    false;
};

const s1 = "abcd";
const s2 = "dcba";

document.getElementById('ans').textContent = areAlmostEqual(s1, s2);
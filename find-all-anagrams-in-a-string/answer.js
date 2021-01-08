const findAnagrams = (s, p) => {
  // sort p
  const sortedP = p.split('').sort().join('');
  const indices =[];
  // cycle through indices until you reach the 
  // last index that will allow the same number of
  // characters as p
  for (let index = 0; index < s.length - p.length + 1; index++) {
    let sub = '';
    for (let index1 =index; index1 < s.length; index1++) {
      // build the substring
      sub += s[index1];
      // sort the substring
      let sortedSub = sub.split('').sort().join('');
      // substring and p match - save index
      if (sortedSub === sortedP)
        indices.push(index);
    }
  }
  return indices;
};

const s = "cbaebabacd";
const p = "abc";

findAnagrams(s, p);
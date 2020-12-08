const isAnagram = (s, t) => {
  const sArray = s.split('');
  const tArray = t.split('');
  // look match to s letter in t
  for (let index = 0; index < sArray.length; index++) {
    for (let index1 = 0; index1 < tArray.length; index1++) {
      // if letters in t and s match
      if (tArray[index1] === sArray[index]) {
        tArray[index1] = '*';
        break;
      }
    }
  } 
  // remove duplicates in tArray
  tUnique = [...new Set(tArray)];
  // if '*" is the only element left in tArray 
  // the letters all match so it is an anagram
  if (tUnique.length === 1 && tUnique[0] === '*') 
    return true;
  // all letters don't match, so it isn't an anagram
  else 
    return false;
}

 const s = "rat";
 const t = "car";
 isAnagram(s, t);
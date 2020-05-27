const maxVowels = (s, k) => {
  let mostVowels = 0;
  for (let index = 0; index < s.length; index ++) {
    let count = 0;
    if (index + k - 1 > s.length - 1) break;
    const topIndex = index + k;
    for(let index1 = index; index1 < topIndex; index1++) {
      if (index1 + k - 1 > s.length - 1) break;
      if (s[index1] === 'a' || 
        s[index1] === 'e' || 
        s[index1] === 'i' || 
        s[index1] === 'o' || 
        s[index1] === 'u') count++;
      if (count > mostVowels) mostVowels = count;
    }
  }  
  return mostVowels;
}

const s = "rhythms"
const k = 4;
maxVowels(s, k);

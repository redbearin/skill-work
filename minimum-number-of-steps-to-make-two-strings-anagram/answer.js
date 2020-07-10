const minSteps = (s, t) => {
  // count number of letters in s
  // that don't have a match
  let count = 0;
  // convert the t string to an array
  const tArray = t.split('');
  // go thru each letter in s
  for(let index = 0; index < s.length; index++) {
    // go through each letter in tArray
    for(let index1 = 0; index1 < tArray.length; index1++) {
      // if letter in tArray matches letter is s 
      // mark it matched and go to next letter in s
      if (tArray[index1] === s[index]) {
        tArray[index1] = '*';
        break;
      }
      // if the letter is the last letter in tArray
      // and it does not match the s letter
      // it has to be replaced so increment count
      if (index1 === tArray.length -1 && tArray[index1] !== s[index]) {
        count++;
      }
    }
  }
  // return the total letters that have to replaced
  return count;
}

const s = "friend";
const t = "family";

minSteps(s, t);
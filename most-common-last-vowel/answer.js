const commonLastVowel = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  // break into words
  const strArr = str.split(' ');
  // counts of last vowels
  const lastVowelCts = {};

  for (let i = 0; i < strArr.length; i++) {
    // start at back of word until you find a vowel
    // add 1 to lastVowelCt object for that vowel
    for (let j = strArr[i].length - 1; j >= 0; j--) {
      // convert upper case vowels to lowercase
      if (strArr[i].charCodeAt(j) > 64 && strArr[i].charCodeAt(j) < 91 )
        ltr = strArr[i][j].toLowerCase();
      else  
        ltr = strArr[i][j].toLowerCase();
      if (vowels.includes(ltr)) {
        // already have this leter in object
        if (lastVowelCts[ltr])
          lastVowelCts[ltr] += 1;
        // letter not currently in object
        else 
          lastVowelCts[ltr] = 1;
        break;
      }
    }
  }
  const lastVowelCtArr = [];
  // convert object to array of subarrays
  for(let key in lastVowelCts) {
    lastVowelCtArr.push([key, lastVowelCts[key]])
  }
  // sort the array of subarrays in
  // descending order
  lastVowelCtArr.sort((a, b) => b[1] - a[1]);
  // return ltr in the first index
  return lastVowelCtArr[0][0];
}

const str = "OOI UUI EEI AAI";

document.getElementById('ans').innerHTML = commonLastVowel(str);
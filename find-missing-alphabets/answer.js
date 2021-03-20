const missingAlphabets = (str) => {
  // initialize all letters and counts
  const alpha = {
    a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0
  }
  // record count of each letter
  for (let i = 0; i < str.length; i++) {
    alpha[str[i]]++;
  }
  let maxCount = 0;
  // find the maximum letter count
  for (key in alpha) {
    if (alpha[key] > maxCount)
      maxCount = alpha[key];
  }
  // missing letters
  let missStr = '';
  // number of letters missing
  let numOfLtrMissing;
  // letter by letter through alpha object
  for (key in alpha) {
    if (alpha[key] < maxCount) {
      numOfLtrMissing = maxCount - alpha[key];
      // add letters to missing letter strings
      for (let i = 0; i < numOfLtrMissing; i++) {
        missStr += key;
      }
    }
  }
  return missStr;
}

const str = "abcdefghijklmnopqrstuvwxy";

document.getElementById('ans').innerHTML = missingAlphabets(str);
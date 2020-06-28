const licenseKeyFormatting = (string, k) => {
  let newStringArray = [];
  let count = 0;
  //  remove - and reintroduce at k spacing
  for (let index = string.length -1; index >= 0; index--) {
    // add letter or number and increment counter
    if (string[index] !== '-') {
      count++;
      newStringArray.unshift(string[index]);
    }
    // add the '-' and reset counter
    if (count === k && index !== 0) {
      newStringArray.unshift('-');
      count = 0;
    }
  }
  // join into string and make all letters uppercase
  return newStringArray.join('').toUpperCase();
}

const string = "5F3Z-2e-9-w";
const k = 4;

licenseKeyFormatting(string, k);
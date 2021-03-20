const titleToNumber = (string) => {
  let result = 0;
  // start at right side of number to find letter for that index
  // use k to find the exponent, increases with number of columns
  for (let index = string.length - 1, k = 0; index >= 0; index--, k++) {
    result += (string.charCodeAt(index) - 64) * (Math.pow(26, k));
  };
  return result;
}

const string = 'ZY';

titleToNumber(string);
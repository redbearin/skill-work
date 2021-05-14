const isAuthenticSkewer = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  // create an array of letters
  const letters = [];
  // create an array of spacers
  const spacers = [];
  let spacer = '';
  for (let i = 0; i < str.length; i++) {
    // element is a letter
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91 ||
        str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
      // first or last element
      if (i === 0 || i === str.length - 1) {
        // first or last elements is a vowel
        // does not meet criteria, so return false
        if (vowels.includes(str[i]) || vowels.includes(str[str.length - 1]))
          return false;
        // first element is a consonant
        if (i === 0)
          letters.push(str[i]);
      } 
      // spacer has content  
      if(spacer) {
        // add to spacers array
        spacers.push(spacer);
        // reinitialize the spacer
        spacer = '';
        // add the letter to the letter array
        letters.push(str[i]);
      }
    }
    // element is not a letter
    else {
      // first or last element not a letter
      if(i === 0 || i === str.length - 1) 
        return false;
      // add element to spacer
      spacer += str[i];
    }
  }
  // set the base spacer
  let base = spacers[0];
  // go thru spacer by spacer and make sure 
  // they are all the same
  for (let i = 1; i < spacers.length; i++) {
    if (spacers[i] !== base)
      return false;
  }
  // make sure all odd elements are vowels
  for (let i = 1; i < letters.length; i += 2) {
    if (!vowels.includes(letters[i]))
      return false;
  }
  return true;
}

const str = "C-L-A-P";

document.getElementById('ans').textContent = isAuthenticSkewer(str);
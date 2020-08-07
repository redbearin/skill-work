const sortString = (s) =>{
  // create a sorted array of letters in s 
  let letters = s.split('').sort();
  let str = '';

  while (letters.length) {
    // filter through letters array
    // check to make sure letter is different from last
    // if so add that letter to the string and
    // remove letter from the letters array
    letters = letters.filter((letter, index) => {
      if (index === 0 || letter !== str[str.length - 1]) {
        str += letter;
        // remove the letter
        return false;
      }
      // keep the letter
      return true;
    });

    // reverse the letters array
    letters.reverse();
  }

  return str;
};

const s = "aaaabbbbcccc";

sortString(s);
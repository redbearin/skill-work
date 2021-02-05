const validName = (name) => {
  // break into array
  const nameArr = name.split(' ');

  // two character groupings
  if (nameArr.length === 2) {
    // 2 chars + space + 2 or more characters
    if (nameArr[0].length === 2 && 
        nameArr[1].length >= 2) {
      // capital letter and period in first group
      if(nameArr[0].charCodeAt(0) > 64 && 
         nameArr[0].charCodeAt(0) < 91 && 
         nameArr[0][1] === '.')
        // no '.' in 2nd character grouping 
        if (!nameArr[1].split('').includes('.'))
          return true;
    }
    return false;
  } 

  // three character groupings
  if (nameArr.length === 3) {
    // third character grouping a word 
    if (nameArr[2].length >= 2 &&
        !nameArr[2].split('').includes('.')) 
    {
      // first character grouping a word
      if (nameArr[0].length >= 2 &&
          !nameArr[0].split('').includes('.')) 
      {
        // 2nd char grouping initial
        if (nameArr[1].length === 2 &&
          nameArr[1].charCodeAt(0) > 64 && 
          nameArr[1].charCodeAt(0) < 91 && 
          nameArr[1][1] === '.')
          return true;
        // 2nd char grouping a word
        if (nameArr[1].length >= 2 &&
          !nameArr[1].split('').includes('.'))
          return true;
      }
    }
    // 1st & 2nd groups initials
    if (nameArr[0].length === 2 &&
        nameArr[0].charCodeAt(0) > 64 && 
        nameArr[0].charCodeAt(0) < 91 && 
        nameArr[0][1] === '.' &&
        nameArr[1].length === 2 &&
        nameArr[1].charCodeAt(0) > 64 && 
        nameArr[1].charCodeAt(0) < 91 && 
        nameArr[1][1] === '.')
      return true;
    else 
      return false;
  }
  // not two or three character groups
  else 
    return false;
};

const name = "Herb. George Wells"

document.getElementById('ans').innerHTML = validName(name);

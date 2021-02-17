const minOperations = (str) => {
  let count = 0;
  const base = str[0];
  for(let i = 1; i < str.length; i++) {
    // even index
    if (i % 2 === 0) {
      if (str[i] !== base)
        count++;
    } 
    // odd index
    else {
      if (str[i] === base)
        count++;
    }
  }
  return count;
};

const str = "1111";

document.getElementById('ans').innerHTML = minOperations(str);

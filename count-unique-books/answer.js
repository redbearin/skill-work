const countUniqueBooks = (str, end) => {
  // count number of end charcters
  count = 0;
  // arr of characters between ends
  arr = []
  // go character by character through string
  for (let idx = 0; idx < str.length; idx++) {
    // character is an end
    if (str[idx] === end) 
      count++;
    // characters after front book end
    if (count % 2 && str[idx] !== end) 
      arr.push(str[idx]);
  }
  // return count of unique charcters
  return [...new Set(arr)].length;
}

const str = "ZZABCDEF";

const end = 'Z';

document.getElementById('ans').innerHTML = countUniqueBooks(str, end);
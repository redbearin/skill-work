const oddOneOut = (words) => {
  // lengths of words
  const len = [];
  
  // add length of each word to len array
  for (let i = 0; i < words.length; i++) {
    len.push(words[i].length)
  }

  // create object with counts of 
  // words with each length
  lenObj = {};
  for (let i = 0; i < len.length; i++) {
    if(lenObj[len[i]])
      lenObj[len[i]]++;
    else  
      lenObj[len[i]] = 1;
  }

  // determine number of unique lengths
  let uniqueLengths = 0;
  for (key in lenObj) {
    uniqueLengths++;
  }

  // more than 2 unique lengths
  if (uniqueLengths > 2)
    return false;
  // 2 unique lengths
  // count of one of lengths = 1
  else {
    for (key in lenObj) {
      if (lenObj[key] === 1)
        return true;
    }
  }
  return false;
}

const words = ["very", "to", "an", "some"];

document.getElementById('ans').innerHTML = oddOneOut(words);
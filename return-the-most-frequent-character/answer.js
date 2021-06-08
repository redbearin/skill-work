const mostFrequentChar = (arr) => {
  // array of characters
  const charArr = arr.join('').split('');
  // object that includes characters 
  // and counts of each
  const charCounts = {};
  // add characters and counts to 
  // char counts object
  for (let i = 0; i < charArr.length; i++) {
    if (charCounts[charArr[i]])
      charCounts[charArr[i]] += charCounts[charArr[i]] + 1;
    else  
    charCounts[charArr[i]] = 1;
  }
  // create an array of charcters and counts, sorted 
  // highest to lowest counts
  const sortedChars = Object.entries(charCounts).sort((a,b) => b[1] - a[1]);
  // find letter with highest count
  const ltrsWithHighestCts = [sortedChars[0][0]];
  // add other letters that have the same count
  for (let i = 1; i < sortedChars.length; i++) {
    if (sortedChars[i][1] === sortedChars[0][1])
      ltrsWithHighestCts.push(sortedChars[i][0]);
    else
      break;
  }
  // return letters with top counts in alpha order
  return ltrsWithHighestCts.sort();
}

const arr = ["the", "hills", "are", "alive", "with", "the", "sound", "of", "music"];

document.getElementById('ans').textContent = mostFrequentChar(arr);
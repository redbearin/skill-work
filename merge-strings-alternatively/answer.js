const mergeAlternately = (word1, word2) => {
  // initialize final string
  let final = '';
  // set longest length
  if (word1.length >= word2.length) 
    wlonger = word1;
  else 
    wlonger = word2;

  // go letter by letter through words
  for(let i = 0; i < wlonger.length; i++) {
    // no letter in word1
    if(!word1[i]) 
      final += word2[i];
    // no letter in word2
    else if(!word2[i]) 
      final += word1[i];
    // letters in both worddd
    else 
      final += word1[i] + word2[i];
  }
  return final;
};

const word1 = "abcd";
const word2 = "pq";

document.getElementById('ans').innerHTML = mergeAlternately(word1, word2);
function maxPower(s) {
  let lengthLongestSubstr = 1;
  let lengthSubstr = 1;
    for (let index = 1; index < s.length; index++) {
    s[index - 1] === s[index] ? 
      lengthSubstr++ : 
      lengthSubstr = 1;
    if ( lengthSubstr > lengthLongestSubstr ) 
      lengthLongestSubstr = lengthSubstr;
  }
  return lengthLongestSubstr;
}

let s = "tourist";
document.getElementById('answer').innerHTML = maxPower(s);
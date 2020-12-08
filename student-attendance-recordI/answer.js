function checkRecord(s) {
  var aCount = 0
  for (var index = 0; index < s.length; index++) {
    if (s[index] === 'A') aCount++;
    if (aCount > 1) return false; 
    if (index !== s.length - 2) {
      if (s[index] === 'L' && s[index + 1] === 'L' && s[index + 2] === 'L') {
        return false;
      }
    }
  }
  return true;  
};

var s = "PPALLL";

checkRecord(s);
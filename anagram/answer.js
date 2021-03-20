function isAnagram(s, t) {
  for (var indexS = 0; indexS < s.length; indexS++) {
    var letter = s[indexS];
    var countLettersS = 0;
    for (var indexS2 = 0; indexS2 < s.length; indexS2++){
      if(s[indexS] === s[indexS2]) countLettersS++;
    }
    var countLettersT = 0;
    for (var indexT = 0; indexT < t.length; indexT++) {
      if (t[indexT] === letter) countLettersT++;
    }
    if (countLettersS !== countLettersT) return false;
  }
  return true;
}

var s = "rat";
var t = "car";

isAnagram(s, t);
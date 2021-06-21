function firstUniqChar(s) {
  for (var index = 0; index < s.length; index++) {
    var counter = 0;
    for (var index1 = 0; index1 < s.length; index1++) {
      if(s[index] === s[index1]) counter++;
    }
    if (counter === 1) return index;
  }
};

var s = "lovinglifeinlodi";

firstUniqChar(s);

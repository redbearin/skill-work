function isIsomorphic (s, t) {
  var complete = [];
  for (var index = 0; index < s.length; index++) {
    var indices = [];
    var count = 0;
    for(var i = 0; i < s.length; i++) {
        if(index === i) continue;
        if (s[index] === s[i]) indices.push(i); 
    }
    if(indices !== []) {
      indices.unshift(index);
    }
    indices.sort();  
    for (var comIndex = 0; comIndex < complete.length; comIndex++) {
      if (complete[comIndex] === indices) {
        count++;
      }
    }
    if (!count) {
      complete.push(indices);
    }
  }
  for (var index2 = 0; index2 < t.length; index2++) {
    
  }
}


var s = "toss";
var t = "miff"

isIsomorphic (s, t);
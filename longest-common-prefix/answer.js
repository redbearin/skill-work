function longestCommonPrefix(strings) {
  var matches = '';
  for (var subIndex = 0; subIndex < strings[0].length; subIndex++) {
    var count = 0;
    var letter = strings[0][subIndex];
    for(var index = 0; index < strings.length; index++) {
      if(strings[index][subIndex] === letter) {
        count++;
      } 
    }
    if (count === strings.length) {
      matches += strings[0][subIndex];
    } else {
      return matches;
    }
  }
}

strings = ["dog","racecar","car"];

longestCommonPrefix(strings);
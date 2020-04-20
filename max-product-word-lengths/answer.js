function findLetter(word1, word2) {
  for (var index = 0; index < word1.length; index++) {
    if (word2.includes(word1[index])) return true;   
  }
  return false;
}

function maxProduct(words) {
  words.sort((a,b) => b.length - a.length);
  var totalLength = 0;
  for (var index = 0; index < words.length - 1; index++) {
    for (var index1 = index + 1; index1 < words.length; index1++) {
      var word1 = words[index];
      var word2 = words[index1];
      var comboLength = word1.length * word2.length;
      if (comboLength > totalLength) {
        var hasLetter = findLetter(word1, word2);
        if (!hasLetter) {
          totalLength = comboLength;
          break;
        }
      }      
    }
  }
  return totalLength;
}

var words = ["a","ab","abc","d","cd","bcd","abcd"];
maxProduct(words);

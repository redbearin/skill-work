function determineMatch(word, charsArray) {
  for (var index = 0; index < word.length; index++) {
    for (var index1 = 0; index1 < charsArray.length; index1++) {
      if (index === word.length - 1 && word[index] === charsArray[index1]) return word;
      if (word[index] === charsArray[index1]) {
        charsArray.splice(index1, 1);
        break;
      }
      if (index1 === charsArray.length -1 && word[index] !== charsArray[index1]) return '';
    }
  }
}

function countCharacters(words, chars) {
  var charsArray = chars.split('');
  var wordsFromCharacters = [];
  for (var index = 0; index < words.length; index++) {
    var word = words[index];
    wordsFromCharacters.push(determineMatch(word, charsArray));
  }
  var count = 0;
  for (var index1 = 0; index1 < wordsFromCharacters.length; index1++)   {
    if (wordsFromCharacters[index1] === '') continue;
    else {
      var internalCount = 0;
      var matchedWord = wordsFromCharacters[index1];
      for (var index2; index2 < matchedWord.length; index2++) {
        internalCount++;
      }
      count += internalCount;
    }
  }
  return count;
}

var words = ["cat","bt","hat","tree"];
var chars = "atach";

countCharacters(words, chars);
function reverseWords(s) {
  var sArray = s.split(' ');
  var reversedWordsArray = [];
  for (var index = 0; index < sArray.length; index++) {
    var reversedWord = ''
    for (var index1 = sArray[index].length -1 ; 0 <= index1 ; index1--) {
      reversedWord += sArray[index][index1];
    }
    reversedWordsArray.push(reversedWord);
  }
  return reversedWordsArray.join(' ');
}

var s = "Let's enter the iGEM contest";

reverseWords(s);
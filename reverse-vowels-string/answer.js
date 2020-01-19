function reverseVowels(s){
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var vowelsReverseOrder = [];
  for (var index = s.length - 1; 0 <= index; index--) {
    if(vowels.indexOf(s[index]) !== -1){
      vowelsReverseOrder.push(s[index]);
    }
  }
  var newWord = '';
  var reverseVowelIndex = 0;
  for(index1=0; index1 < s.length; index1++){
    if(vowels.indexOf(s[index1]) !== -1){
      newWord += vowelsReverseOrder[reverseVowelIndex];
      reverseVowelIndex++;
    } else {
      newWord += s[index1];
    }
  }
  return newWord;
}

var s = "hello"

reverseVowels(s);
function decodeString(s) {
  for (var index = s.length - 1; 0 <= index; index--) {
    //reached a number
    if (!isNaN(s[index])) {
      var letters = '';
      var completeletters = '';
      var endingIndex;
      //combine letters inside brackets together
      for(var index1 = index + 2; index1 < s.length; index1++) {
        if (s[index1] !== ']') {
          letters += s[index1];
        } else {
        endingIndex = index1;
        break;
        }
      }
      //create multiples of letters in brackets
      for (var count = 1; count <= s[index]; count++) {
        completeletters += letters;
      }
      //eliminate brackets and create new string
      var difference = endingIndex + 1 - index;
      var stringArray = s.split('');
      stringArray.splice(index, difference, completeletters);
      s = stringArray.join('');
      break;
    }
  }
  //repeat if there are more brackets
  for (var index2 = 0; index2 < s.length; index2++) {
    if (s[index2] === '[') {
      return decodeString(s);
    }
  }
  return s;
}

var s = "2[abc]3[cd]ef";

decodeString(s);

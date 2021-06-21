function reverseString(string, lengthSubstring) {
  var newString = '';
  for (var indexString = 0; indexString < string.length; indexString += lengthSubstring) {
    if (!string[indexString + lengthSubstring - 1]) {
      for (var indexSubstring = indexString; indexSubstring < string.length; indexSubstring++) {
        newString += string[indexSubstring];
      }
    } else {
      for (var indexSubstring = indexString + lengthSubstring -1; indexString <= indexSubstring; indexSubstring--) {
        newString += string[indexSubstring];
      }
    }
  }
  return newString;
}

var string = "abcdefghijklmn";
var lengthSubstring = 4;

reverseString(string, lengthSubstring);
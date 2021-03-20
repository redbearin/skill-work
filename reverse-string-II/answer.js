function reverseString(string, k) {
  var newString = '';
    for (var index = 0; index < string.length; index += 2) {
      var stringIndex = string[index];
      if (index !== string.length - 1) newString += string[index +1];
      newString += stringIndex;
    }
    return newString;
}

var string = "abcdefg";
var k = 2;

reverseString(string, k);
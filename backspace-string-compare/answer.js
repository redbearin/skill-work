function modifyString(string) {  
  var stringArray = string.split('');
  var count = 0;
  for (var index = stringArray.length - 1; 0 <= index; index--) {
    if (count > 0 && stringArray[index] !== '#') {
      count--;
      stringArray.splice(index, 1);
    }
    if (stringArray[index] === '#') {
      count++;
      stringArray.splice(index, 1);
    }
  }
  return stringArray.join('');
}

function backspaceCompare(string1, string2) {
  var string1Mod = modifyString(string1);
  var string2Mod = modifyString(string2);
  for (var index=0; index < string1Mod.length; index++) {
    if (string1Mod[index] === string2Mod[index]) continue;
    else return false;
  }
  return true;
}

var string1 = "ab##";
var string2 = "c#d#";

backspaceCompare(string1, string2);

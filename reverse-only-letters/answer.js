function reverseOnlyLetters(string) {
  var regex = /[a-z]/i;
  var stringArray = string.split('');
  var newArray = [];
  for (var index = string.length -1; index >= 0; index--) {
    if (regex.test(stringArray[index])) {
      newArray.push(stringArray[index]);
    } 
  }
  for (var index1 =0; index1 < stringArray.length; index1++) {
    if (!regex.test(stringArray[index1])) {
      newArray.splice(index1, 0, stringArray[index1]);
    }
  }
  return newArray.join('');
}

var string = "a-bC-dEf-ghIj";

reverseOnlyLetters(string);
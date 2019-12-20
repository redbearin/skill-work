function lengthLastWord(string) {
  const stringArray = string.split(' ');
  const lastIndex = stringArray.length - 1;
  return stringArray[lastIndex].length;
}

string = 'Hello World';

lengthLastWord(string);
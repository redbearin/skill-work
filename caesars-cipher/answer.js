const caesarCipher = (str, key) => {
  newStr = '';
  for (let i = 0; i < str.length; i++) {
    if ((str.charCodeAt(i) > 90 && 
         str.charCodeAt(i) < 97) || 
         str.charCodeAt(i) > 123 ||
         str.charCodeAt(i) < 65 ) {
          newStr += str[i];
         }

    else if ((str.charCodeAt(i) > 64 && 
              str.charCodeAt(i) < 91 &&
              str.charCodeAt(i) + key > 90) || 
              (str.charCodeAt(i) > 96 && 
              str.charCodeAt(i) < 123 &&
              str.charCodeAt(i) + key > 122))
      newStr += String.fromCharCode(str.charCodeAt(i) + key - 26);
    else
      newStr += String.fromCharCode(str.charCodeAt(i) + key);
  }
  return newStr;
}

const str = "A friend in need is a friend indeed";
const key = 20;

caesarCipher(str, key);
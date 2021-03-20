const normalize = (string) => {
  let newStr = string[0];
  for(let index = 1; index < string.length; index++) {
    if (string.charCodeAt(index) === 32 || (string.charCodeAt(index) >= 65 &&string.charCodeAt(index) <= 90)) 
      newStr += string[index].toLowerCase();
    else 
      return string;
  }
  return newStr + '!';
}

const string = "Today is not caps lock day.";
normalize(string);
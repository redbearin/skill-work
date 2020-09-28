const missingLetter = (str) => {
  for (let index = 0; index < str.length - 1; index++) {
    if(str.charCodeAt(index) + 1 !== 
       str.charCodeAt(index + 1))
      return String.fromCharCode(str.charCodeAt(index) + 1);
  }
  return "No Missing Letter";
}

const str = "abdefg";

missingLetter(str);
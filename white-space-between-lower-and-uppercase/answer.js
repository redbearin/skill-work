const insertWhitespace = (str) => {
  let finalStr = '';
  for (let index = 0; index < str.length; index++) 
    str.charCodeAt(index) > 64  
    &&  str.charCodeAt(index) < 91 ?
      finalStr += ' ' + str[index] : 
      finalStr += str[index];
  return finalStr;
};

const str = "TheGreatestUpsetInHistory"; 
insertWhitespace(str);
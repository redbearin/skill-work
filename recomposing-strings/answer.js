const recompose = (str) => {
  let newStr = '';
  const vowels = ['a', 'e', 'i', 'o', 'u', "A", "E", "I", "O", "U"];

  for (let index = 0; index < str.length; index++) {
    // adjacent letters either both vowels or both consonates
    if (vowels.includes(str[index]) && 
        vowels.includes(str[index + 1]) || 
        !vowels.includes(str[index]) && 
        !vowels.includes(str[index + 1])) 
      newStr += str[index];
    // vowel followed by consonate or consonate 
    // followed by vowel  -- add a space
    else 
      newStr += str[index] + ' ';
  }
  // get rid of extra space at end and make into array
  const newStrArr = newStr.trim().split(' ');
  // reverse the letters
  for (let index = 0; index < newStrArr.length; index++) {
    if (newStrArr[index].length > 1) 
      newStrArr[index] = newStrArr[index].split('').reverse().join('');
  }
  // recreate a striing
  const newStrReo = newStrArr.join('');
  let finalStr = '';
 
  for (let index = 0; index < newStrReo.length; index++) {
    if (index === newStrReo.length - 1)
      finalStr += newStrReo[index];
    // if the next letter is a cap, add a space between
    else if (newStrReo.charCodeAt(index + 1) < 91 && 
             newStrReo.charCodeAt(index + 1) > 64) 
      finalStr += newStrReo[index] + ' ';
    else
      finalStr += newStrReo[index];
  }
  return finalStr;
}

const str = "hCemicarBlohtesr";

recompose(str) ;
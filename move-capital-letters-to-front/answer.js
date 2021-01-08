const capToFront = (string)  => {
  // string of capital letters
  let cap = '';
  // string of lowercase letters
  let lower = '';
  for (let index = 0; index < string.length; index++) {
    // character is capital based on ASCII number
    if (string.charCodeAt(index) <= 90 && string.charCodeAt(index) >= 65) 
      cap += string[index];
    else 
      lower += string[index];
  }
  return cap + lower;
}
const string  = "hApPy";
capToFront(string);
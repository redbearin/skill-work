const selectLetters = (str1, str2) => {
  // final string
  let finalStr = '';

  // find the shortest length of str1 or str2
  // use for looping since constrained to shortest
  // since matching index by index
  let len;
  if (str1.length < str2.length)
    len = str1.length;
  else 
    len = str2.length;

  // find letters at same index in str1 as caps in str2
  for (let i = 0; i < len; i++) {
    if (str2.charCodeAt(i) > 64 && str2.charCodeAt(i) < 91)
        finalStr += str1[i];
  }
  // find letters at same index in str2 as caps in str1
  for (let i = 0; i < len; i++) {
    if (str1.charCodeAt(i) > 64 && str1.charCodeAt(i) < 91)
       finalStr += str2[i];
  }
  return finalStr;
}
const str1 = "EVERYTHING";
const str2 = "SomeThings";

document.getElementById('ans').innerHTML = selectLetters(str1, str2); 
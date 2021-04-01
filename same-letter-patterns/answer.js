const sameLetterPattern = (str1, str2) => {
  for (let i = 1; i < str1.length; i++) {
    if (Math.abs(str1.charCodeAt(0) - str1.charCodeAt(i)) !==
    Math.abs(str2.charCodeAt(0) - str2.charCodeAt(i)))
      return false;
  }
  return true;
}

const str1 = "FFFF"; 
const str2 = "ABCD";

document.getElementById('ans').innerHTML = sameLetterPattern(str1, str2);
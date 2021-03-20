function isPalindrome(string) {
  const alphaNumericString = string.replace(/[^a-z0-9]/gi,'').toLowerCase();
  let reversedAlphaNumericString = '';
  for(let index = alphaNumericString.length - 1; index >= 0; index--) {
    reversedAlphaNumericString += alphaNumericString[index];
  }
  return(reversedAlphaNumericString === alphaNumericString ? true : false);
};

const string = "A man, a plan, a canal: Panama";

isPalindrome(string);
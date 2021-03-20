const breakPalindrome = (palindrome) => {
  // convert the string to an array
  const palArray = palindrome.split('');
  // cycle through palindrome array until
  // character is not an a
  for (let index = 0; index < palArray.length; index++) {
    // character not an a
    if(palindrome.charCodeAt(index) > 97) {
      // change that char to an a
      palArray[index] = 'a';
      // make the array into a string and return
      return palArray.join('');
    }
  }
  // not possible
  return '';
};

const palindrome = "a";

breakPalindrome(palindrome);
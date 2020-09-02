const dashed = (word) => {
  // array of letters, vowels with dashes
  const lettersWithDashes = [];
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  //cycle through each letter in word
  for (let index = 0; index < word.length; index++) {
    // letter is a vowel
    if(vowels.includes(word[index].toLowerCase()))
      lettersWithDashes.push('-', word[index], '-');
    // letter is not a vowel
    else
      lettersWithDashes.push(word[index]);
  }
  return lettersWithDashes.join('');
};

const word = "Edabit";

dashed(word);
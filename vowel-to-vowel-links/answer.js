const vowelLinks = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < str.length - 1; index++) {
    // last letter of word
    const lastLtr = str[index].length - 1;
    // last letter of word a vowel and 
    // first letter of next word is a vowel
    if (vowels.includes(str[index][lastLtr].toLowerCase()) 
        && vowels.includes(str[index + 1][0].toLowerCase())) 
      return true;
  }
  return false;
};

const str = "a very large appliance";

vowelLinks(str);
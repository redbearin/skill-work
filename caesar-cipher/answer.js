const caesarCipher = (word, num) => {
  const wordArr = [];
  for (let index = 0; index < word.length; index++) {
    if (word[index] === ' ')
      wordArr.push(' ');
    else 
      wordArr.push(String.fromCharCode(word.charCodeAt(index) + num));
  }
  return wordArr.join('');
};

const word = 'a';
const num = 2;

caesarCipher(word, num);
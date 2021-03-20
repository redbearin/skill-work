function arrangeWords(text) {
  const lowerCaseText = (text[0]).toLowerCase() + text.slice(1);
  const wordArray = lowerCaseText.split(' ');
  wordArray.sort((a, b) => {
    return a.length - b.length;
  })
  const capFirstWord = (wordArray[0][0]).toUpperCase() + (wordArray[0]).slice(1);
  wordArray[0] = capFirstWord;
  return wordArray.join(' ');
}

const text = "Keep calm and code on"
arrangeWords(text);
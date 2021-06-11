const switcheroo = (sent) => {
  // split sentence into an array
  // of words
  const words = sent.split(' ');
  // define variables
  let word, punct, j;
  // go word by word through words array
  for (let i = 0; i < words.length; i++) {
    // intialize index to the index of last letter
    j = words[i].length - 1;
    // initialize punct to emptry string
    punct = '';
    word = words[i];
    // continue as long as there is sometime 
    // besides letters
    while (word.charCodeAt(j) < 65 ||
           word.charCodeAt(j) > 90 &&
           word.charCodeAt(j) < 97 ||
           word.charCodeAt(j) > 122) {
      punct = word[j] + punct;

      j--;
    }
    // last letters for word before punct nts
    if(word[word.length - (3 + punct.length)] === 'n' &&
       word[word.length - (2 + punct.length)] === 't' &&
       word[word.length - (1 + punct.length)] === 's')
        words[i] = word.slice(0, -(3 + punct.length)) + 'nce' + punct;
    // last letters of word before punct nce
    else if (word[word.length - (3 + punct.length)] === 'n' &&
        word[word.length - (2 + punct.length)] === 'c' &&
        word[word.length - (1 + punct.length)] === 'e')
         words[i] = word.slice(0, -(3 + punct.length)) + 'nts' + punct;
  }
  return words.join(' ');
};

const sent = "Bounced over the fence!";

document.getElementById('ans').textContent = switcheroo(sent);

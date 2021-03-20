const reverseWords = (s) => {  
  return s.split(' ').filter(element => {
    if(element) return element;
  }).reverse().join(' ');
}

const s = "a good   example";
reverseWords(s);
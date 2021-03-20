const reverseWords = (s) => {  
    const matcharray = s.match(/(\S+)/g) || [];
    return matcharray.reverse().join(' ');
 }
 
const s = "a good   example";
reverseWords(s);
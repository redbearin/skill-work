const reverseWords = (s) => {  
  const componentArray = s.split(' ');
  const noSpaceArray = componentArray.filter(element => {
    if(element) return element;
  });
  noSpaceArray.reverse();
  return noSpaceArray.join(' ');
}

const s = "a good   example";
reverseWords(s);
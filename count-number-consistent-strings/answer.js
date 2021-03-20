const countConsistentStrings = (allowed, words) =>{
  allowedArr = allowed.split('');
  const match = [];
  for (let index = 0; index < words.length; index++) {
    for (let index1 = 0; index1 < words[index].length; index1++) {
      if (index1 === words[index].length - 1 && allowedArr.includes(words[index][index1]))
        match.push(words[index]);
      else if (!allowedArr.includes(words[index][index1]))
        break;
    }
  }
  return match.length;
};


allowed = "cad";
words = ["cc","acd","b","ba","bac","bad","ac","d"];
countConsistentStrings(allowed, words);

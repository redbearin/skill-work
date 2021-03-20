function stringMatching(words) {
  const substrings = [];
  for (let index = 0; index < words.length; index++) {
    for (let index1 = 0; index1 < words.length; index1++) {
      if (index === index1) continue;
      const matchIndex = words[index].search(words[index1]);
      if (matchIndex > 0) substrings.push(words[index1]);
    }
  }
  return substrings;
}

const words = ["leetcode","et","code"];

stringMatching(words);
function numEquivDominoPairs(dominoes) {
  let map = {};
  dominoes.forEach(dominoDigits => {
      const [digit1, digit2] = dominoDigits.sort();
      const twoDigitNumber = digit1 * 10 + digit2;
      if(!map[twoDigitNumber]) map[twoDigitNumber] = 0;
      map[twoDigitNumber]++;
  });

 return Object.values(map).reduce((matches, indivCount) => indivCount > 1 ? matches += indivCount - 1: matches += 0, 0);
};

let dominoes = [[4,3],[1,2],[2,1],[3,4],[5,6],[2,1]];

numEquivDominoPairs(dominoes);

const numEquivDominoPairs = (dominoes) => {
  let numPairs = 0;
  // loop thru each index in dominoes array
    for (let index = 0; index < dominoes.length - 1; index++) {
      // compare all other indices to that index
      for (let index1 = index + 1; index1 < dominoes.length; index1++) {
        // if the numbers are reversed on the index
        // it is a match, so increment numPair count
        if (dominoes[index][0] === dominoes[index1][1] && dominoes[index][1] === dominoes[index1][0]) 
        numPairs++;
      }
    }
  return numPairs;
};

const dominoes = [[1,2],[2,1],[3,4],[5,6]];

numEquivDominoPairs(dominoes);
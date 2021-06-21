const restoreArray = (adjacentPairs) => {
  const counts = {};
  const final = [];
  for (let index = 0; index < adjacentPairs.length; index++) {
    for (let index1 = 0; index1 < 2; index1++) {
      if (counts[adjacentPairs[index][index1]]) {
        if (index1 === 0) 
          counts[adjacentPairs[index][index1]].push(adjacentPairs[index][1]); 
        else 
          counts[adjacentPairs[index][index1]].push(adjacentPairs[index][0]); 
      }
      else {
        if (index1 === 0) 
          counts[adjacentPairs[index][index1]] = [adjacentPairs[index][1]]; 

        else 
          counts[adjacentPairs[index][index1]] = [adjacentPairs[index][0]]; 
      }
    }
  }
  for (let key in counts) {
    if (counts[key].length === 1) {
      final.push(key);
      delete counts[key];
    }
  }
};

const adjacentPairs = [[2,1],[3,4],[3,2]];

restoreArray(adjacentPairs);

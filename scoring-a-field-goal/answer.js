const isGoalScored = (arr) => {
  // remove the brackets on subarrays
  const flatArr = arr.flat();
  for (let index = 0; index < flatArr.length; index++) {
    // the row includes a '0'
    if(flatArr[index].includes('0')) {
      let finalArr = [];
      // go through that row and add the '#' and '0' to an array
      for (let index1 = 0; index1 < flatArr[index].length; index1++) {
        if (flatArr[index][index1] === '#' ||
            flatArr[index][index1] === '0') 
          finalArr.push(flatArr[index][index1])
      }
      // there are three elments and the middle is a '0'
      if (finalArr.length === 3 
          && finalArr[1] === '0')
        return true;
      else 
        return false;
    }
  }
};

arr = [
  ["  #     #  "],
  ["  #     #  "],
  ["  #     # 0"],
  ["  #######  "],
  ["     #     "],
  ["     #     "],
  ["     #     "]
];
isGoalScored(arr);
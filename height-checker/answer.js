const heightChecker = (heights) => {
  let count = 0;
  // make a shallow copy of heights
  // then sort it and assign it to sortedHeights
  const sortedHeights = heights.slice().sort((a,b) => a-b);
  // loop through each index
  for(let index = 0; index < heights.length; index++) {
    // sortedHeights element different from heights element
    if (heights[index] !== sortedHeights[index]) 
      // increment the count
      count++;
  }
  return count;
};

const heights = [5,1,2,3,4];
heightChecker(heights);

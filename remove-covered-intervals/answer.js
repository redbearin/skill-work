const removeCoveredIntervals = (intervals) => {
  // cycle through all the indexes of intervals
  for (let index = 0; index < intervals.length; index++) {
    // cycle through all the indices of intervals
  
    for (let index1 = 0; index1 < intervals.length; index1++) {
        // compare to content in outer index
        // index within the range of index1, replace w. '*'
      if(intervals[index][0] > intervals[index1][0] &&
          intervals[index][1] < intervals[index1][1]) 
            intervals[index] = '*';
          
    }
  }
  let count = 0;
  // count all the indices that are not "*"
  for (let index = 0; index < intervals.length; index++) {
    if (intervals[index] === '*') 
      continue;
    else 
      count++;
  }
  return count;
};

const intervals = [[1,9],[3,6],[2,8]];

removeCoveredIntervals(intervals);
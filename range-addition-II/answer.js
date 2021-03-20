const maxCount = (m, n, ops) => {
  const array = [];
  // build outer array
  for (let index = 0; index < m; index++) {
    // build subarrays
    let subarray = [];
    for (let index1 = 0; index1 < n; index1++) {
      if (index < ops[0][0] 
          && index < ops[1][0] 
          && index1 < ops[0][1] 
          && index1 < ops[1][1])
        subarray.push(2);
      else if (index < ops[1][0] 
               && index1 >= ops[0][1] 
               && index1 < ops[1][1] 
               ||
              index >= ops[0][0] 
              && index < ops[1][0] 
              && index1 < ops[1][1]) 
        subarray.push(1);
      else 
        subarray.push(0);
    }
    array.push(subarray);
  }
  return array;
}

const m = 3;
const n = 3;
const ops = [[2,2],[3,3]];
maxCount(m, n, ops);

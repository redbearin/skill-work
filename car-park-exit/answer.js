const parkingExit = (arr) => {
  const path = [];
  let floor = 1;
  let newInx, diff;
  for (let index = 0; index < arr.length; index++) {
    if (index === 0) {
      newInx = arr[index].indexOf(1);
      console.log(newInx)
      diff = newInx - arr[0].indexOf(2);
      if(diff > 0) 
        path.push('R' + diff);
      if(diff < 0) 
        path.push('L' + Math.abs(diff));  
    }
    else if(index === arr.length - 1) {
      newInx = arr[index].length - 1;
      console.log(newInx)
      diff = newInx - startInx;
      if (diff > 0) 
        path.push('R' + diff);
    }
    else {
      newInx = arr[index].indexOf(1);
      console.log(newInx)
      diff = newInx - startInx;
      console.log('diff: ', diff)
      if (diff === 0)
        floor++;
      if (floor > 1 && diff !== 0) {
        path.push('D' + floor);
        if(diff < 0) 
          path.push('L' + Math.abs(diff));  
        floor = 1;
      }
      else {
        path.push('D' + floor);
        if(diff > 0) 
          path.push('R' + diff);
        if(diff < 0) 
          path.push('L' + Math.abs(diff));  
        floor = 1;
      }
    }
    startInx = newInx; 
  }
  return path;
};

const arr = [
  [2, 0, 0, 1, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0]
];

parkingExit(arr);
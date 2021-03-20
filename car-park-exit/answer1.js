const parkingExit = (arr) => {
  const path = [];
  let floor = 1;
  let newInx, diff;
  let startInx = arr[0].indexOf(2);
  for (let index = 0; index < arr.length; index++) {
    // bottom floor
    if(index === arr.length - 1) 
      newInx = arr[index].length - 1;
    // not bottom floor
    else 
      newInx = arr[index].indexOf(1); 
    // difference between starting and ending index on floor
    diff = newInx - startInx;

    // not stairs or bottom floor
    if (diff !== 0 || index === arr.length - 1) {
      // not top floor, number levels stairs
      if (index !== 0)
        path.push('D' + floor);
      if (diff > 0) 
        path.push('R' + diff);
      if (diff < 0) 
        path.push('L' + Math.abs(diff));  
      floor = 1; 
    }
    // stairs
    else {
     floor++;
    }
    startInx = newInx; 
  }
  return path;
};

const arr = [
  [2, 0, 0, 0, 1],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0]
];

parkingExit(arr);
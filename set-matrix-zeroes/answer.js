function setZeroes(matrix) {
  let zeroCoordinates = [];
  for(let row = 0; row < matrix.length; row++){
    for(let col = 0; col < matrix[row].length; col += 1){
      if(matrix[row][col] === 0) zeroCoordinates.push([row, col]);
    }
  }
  for(let coordinate of zeroCoordinates){
    let [zeroRow, zeroCol] = coordinate;
    for(let row = 0; row < matrix.length; row++){
      matrix[row][zeroCol] = 0;
    }
    for(let col = 0; col < matrix[0].length; col++){
      matrix[zeroRow][col] = 0;
    }
  } 
  return matrix; 
};

var matrix = [
  [1,1,1],
  [1,0,1],
  [1,1,1]
];

setZeroes(matrix);

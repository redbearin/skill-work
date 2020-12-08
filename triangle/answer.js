const minimumTotal = function(triangle) {
  if(!triangle || !triangle.length) return 0;
  const len = triangle.length;
  //initialized minArr to bottom row of triangle
  const minArr = triangle[len - 1]; 
  //one row above minArr
  for (let i = len - 2; i >= 0; i--) {
    //assign new totals in MinArr based on lowest options
    for (let j = 0; j <= i; j++) {  
      minArr[j] = Math.min(minArr[j], minArr[j + 1]) + triangle[i][j];
    }
  }
  return minArr[0];
};

const triangle = [
     [2],
    [4,3],
   [6,5,1],
  [4,1,8,1]
];

minimumTotal(triangle);
function countNegatives(grid) {
  let count = 0;
  for (let index = 0; index < grid.length; index++) {
    for (let index1 = 0; index1 < grid[index].length; index1++) {
      if (grid[index][index1] < 0) count ++;
    }
  }
  return count;
}
const grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]];

countNegatives(grid);

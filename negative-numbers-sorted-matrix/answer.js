function countNegatives(grid) {
  let count = 0;
  for (let index = 0; index < grid.length; index++) {
    for (let subIndex =0; subIndex < grid[index].length; subIndex++) {
      if (grid[index][subIndex] < 0) count++;
    }
  }
  return count;
}

const grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]];
countNegatives(grid);
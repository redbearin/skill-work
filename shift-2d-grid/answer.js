const shiftGrid = (grid, k) => {
  // remove all subarrays (flatten)
  const flatGrid = grid.flat(1);

  const flatReorder = [];
  const finalWSubs = [];

  for (let index = 0; index < flatGrid.length; index++) {
    // as long as index + k is within flat grid length
    // assign to the new reordered location
    if (index + k < flatGrid.length) 
      flatReorder[index + k] = flatGrid[index];
    // otherwise assign at the beginning of the flat reodered array
    else 
      flatReorder[index + k - flatGrid.length] = flatGrid[index];
  }

  for (let index = 0; index < flatReorder.length; index = index + grid[0].length) {
    let string = '';
    // build each subarray
    for (let index1 = 0; index1 < grid[0].length; index1++) {
      // build a strings of string numbers separated by a space
      string += '' + flatReorder[index + index1] + ' ';
    }
    // remove extra space from end of string
    // convert to an array of strings
    // convert the string array elements to numbers
    // push this array to the finalWSubs array (will be a subarray)
    finalWSubs.push(string.trim().split(' ').map(Number));
  }
  return finalWSubs;
}

const grid = [[1,2,3],[4,5,6],[7,8,9]];
const k = 1;

shiftGrid(grid, k);

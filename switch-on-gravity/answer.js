const switchGravityOn = (blocks) => {
  // go row by row to the second to last row
  for (let row = 0; row < blocks.length - 1; row++) {
    // go column by column for that row
    for (let col = 0; col < blocks[row].length; col++) {
      // suspended block
      if (blocks[row][col] === '#') {
        // remove suspended block designation
        blocks[row][col] = '-';
        // find lowest blank in column
        // move the suspended block there
        for (let k = blocks.length - 1; k > 0; k--) {
          if (blocks[k][col] === '-') {
            blocks[k][col] = '#';
            break;
          }
        }
      }
    }
  }
  return blocks;
}

const blocks = [
  ["-", "#", "#", "#", "#", "-"],
  ["#", "-", "-", "#", "#", "-"],
  ["-", "#", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"]
];

document.getElementById('ans').innerHTML = switchGravityOn(blocks);
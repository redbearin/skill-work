const fire = (matrix, loc) => {
  let index = loc.charCodeAt(0) - 65;
  let subindex = loc[1] - 1;
  if (matrix[index][subindex] === '.')
    return 'splash';
  if (matrix[index][subindex] === '*')
    return 'BOOM';
};

const matrix = [
  [".", ".", ".", "*", "*"],
  [".", "*", ".", ".", "."],
  [".", "*", ".", ".", "."],
  [".", "*", ".", ".", "."],
  [".", ".", "*", "*", "."],
];
 const loc = "D2";

fire(matrix, loc);
function kWeakestRows(mat, k) {
  let rowSoldierCounts = [];
  let kWeakestRows = [];
  for (let index = 0; index < mat.length; index++) {
    let count = 0;
    for (let subIndex = 0; subIndex < mat[index].length; subIndex++) {
      if (mat[index][subIndex] === 1) {
        count++;
      }
      else break;
    }
   rowSoldierCounts.push([index, count]);
  }
  rowSoldierCounts.sort((a, b) => a[1] - b[1]);
  let kRowSoldierCounts = rowSoldierCounts.slice(0, k);
  for (let index = 0; index < kRowSoldierCounts.length; index ++) {
   kWeakestRows.push(kRowSoldierCounts[index][0]);
  }
  return kWeakestRows;
}

const mat = [[1,1,0,0,0],
             [1,1,1,1,0],
             [1,0,0,0,0],
             [1,1,0,0,0],
             [1,1,1,1,1]];
const k = 3;

kWeakestRows(mat, k);
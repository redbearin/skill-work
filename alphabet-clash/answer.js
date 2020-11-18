const clash = (strA, strZ, aDelZ, zDelA) => {
  // converts strings to arrays
  const arrA = strA.split('');
  const arrZ = strZ.split('');
  // strings after items removed
  let modStrA = '';
  let modStrZ = '';
  // total points
  let totalA = 0;
  let totalZ = 0;

  // for A mark each item to be removed
  for (let index = 0; index < aDelZ.length; index++) {
    arrZ[aDelZ[index]] = '*';
  }
  // for Z remove marked items and create a new string
   for (let index = 0; index < arrZ.length; index++) {
    if (arrZ[index] !== '*') 
      modStrZ += arrZ[index];
  }
  // for A mark each item to be removed
  for (let index = 0; index < zDelA.length; index++) {
    arrA[zDelA[index]] = '*';
  }
  // for A remove marked items and create new string
  for (let index = 0; index < arrA.length; index++) {
    if (arrA[index] !== '*') {
      modStrA += arrA[index];
    }
  }
  // substract smaller from larger and total
  for (let index = 0; index < modStrA.length; index++) {
    if (modStrZ[index] >= modStrA[index])
      totalZ += modStrZ.charCodeAt(index) - modStrA.charCodeAt(index);
    else 
      totalA += modStrA.charCodeAt(index) - modStrZ.charCodeAt(index);
  }
  return '{' + totalA + ', ' + totalZ + '}';
};

const strA = "MZNHUVIOEPTWFJCBXKALSDQGYR";
const strZ = "YFTUCSQOMGKPXNDWHIVJRABZEL";
const aDelZ = [1, 3, 2, 8, 10, 12, 9, 7, 4, 22];
const zDelA = [21, 24, 25, 3, 4, 1, 8, 9, 10, 17];

clash(strA, strZ, aDelZ, zDelA);

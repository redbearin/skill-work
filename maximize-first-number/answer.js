const maxPossible = (first, second) => {
  const arr1 = first.toString().split('');
  const arr2 = second.toString().split('');
  arr2.sort((a,b) => b - a);
  for (let index = 0; index < arr2.length; index++) {
    for (let index1 = 0; index1 < arr1.length; index1++)
    if (arr2[index] > arr1[index1]) {
      arr1[index1] = arr2[index];
      break;
    }
  }
  return +arr1.join('');
}
const first = 8732;
const second = 91255;
maxPossible(first, second);
function removeElement(array, val) {
  for (var index = array.length - 1; index >= 0; index--) {
    if (array[index] === val) {
      array.splice(index,1);
    }
  }
  return array.length;
}

array = [0,1,2,2,3,0,4,2];
val = 2;

removeElement(array, val);
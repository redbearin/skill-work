function removeElement(array, val) {
  return array.filter(element => element !==  val);
}

array = [0,1,2,2,3,0,4,2];
val = 2;

removeElement(array, val);
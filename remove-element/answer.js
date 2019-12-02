function removeElement(array, val) {
  var newArray = array.filter(element => element !==  val);
  return newArray.length;
}

array = [0,1,2,2,3,0,4,2];
val = 2;

removeElement(array, val);
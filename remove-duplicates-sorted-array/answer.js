function arrayLengthAfterDuplicatesRemoved(array) {
  let uniqueArray = [...new Set(array)];
  return uniqueArray.length;
  }
  
  let array = [1,2,3,4,5,4,3,2,1];
  arrayLengthAfterDuplicatesRemoved(array);
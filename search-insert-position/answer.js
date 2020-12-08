function findInsertPosition(inputArray, target) {
  for(var index = 0; index < inputArray.length; index++) {
    if(inputArray[index] === target || inputArray[index] > target) {
      return index;
    }
    if (index === inputArray.length - 1 && inputArray[index] < target) {
      return index + 1;
    }
  }
}

var inputArray = [1,3,5,6];
var target = 5;

findInsertPosition(inputArray, target);

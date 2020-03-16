function replaceElements(arr) {
  let replacedElementsArray = [];
  let arrayToRight = [];
  for (let index = 0; index < arr.length; index++) {
    if (index === arr.length - 1) {
      replacedElementsArray[index] = -1;
      break;
    }
    for (let indexRight = index+1; indexRight <arr.length; indexRight++) {
      arrayToRight.push(arr[indexRight]);
    }
    arrayToRight.sort((a,b) => b-a);
    replacedElementsArray.push(arrayToRight[0]);
    arrayToRight = [];
  }
  return replacedElementsArray;
}

const arr = [17,18,5,4,6,1];

replaceElements(arr);
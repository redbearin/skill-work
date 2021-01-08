function minRow(rowArray) {
  var index = rowArray.length;  
  var min = Infinity;
  var minIndex = null;
  while (index >= 0) {
    if (rowArray[index] < min) {
      min = rowArray[index];
      minIndex = index;
    }
    if (index === 0) {
      break;
    }
    index--;
  }
  return {minNumber: min, index: minIndex};
}

function luckyNumbers(matrix) {
  var luckyNumbers = [];
  for (var index = 0; index < matrix.length; index++) {
    var rowArray = matrix[index];
    var rowMinimum = minRow(rowArray);
    var rowMinimumIndex = rowMinimum.index;
    var rowMinimumNum = rowMinimum.minNumber;
    var colArray = [];
    for (var index1 = 0; index1 < matrix.length; index1++) {
      colArray.push(matrix[index1][rowMinimumIndex]);
    }
    var sortedColArray = colArray.sort((a, b) => b - a);
    if (sortedColArray[0] === rowMinimumNum) luckyNumbers.push(rowMinimumNum);
  }
  return luckyNumbers;
}

var matrix = [[3,7,8],[9,11,13],[15,16,17]];

luckyNumbers(matrix);

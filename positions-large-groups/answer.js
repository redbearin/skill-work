function largeGroupPositions(string) {
  var largeGroups = [];
  var index = 0;
  while(index < string.length) {
    var count = 0;
    var startingIndex = index;
    for (var index1 = index; index1 < string.length; index1++) {
      if (string[index] === string[index1]) {
        if (index1 < string.length -1) count++;
        else {
          count++;
          if (count > 2) largeGroups.push([startingIndex, index1]);
        }
      }
      if (string[index] !== string[index1] && count > 2){
        largeGroups.push([startingIndex, index1 - 1]);
        break;
      }
      if (string[index] !== string[index1]&& count <= 2) {
        break;
      }
    }
    index = index1;
  }
  return largeGroups;
}

var string = "abbbbxxxxzzy";

largeGroupPositions(string);
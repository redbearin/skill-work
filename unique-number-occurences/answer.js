function uniqueOccurrences(array) {
  var result = {};
  var resultWithCounts = {};
  array.forEach((value, index) => {
    if (!result[value]) result[value] = [index]; 
    else result[value].push(index); 
  });
  for (var key in result) {
    resultWithCounts[key] = result[key].length;
  }
  var arrayOfValues = Object.values(resultWithCounts);
  var lengthBeforeRemovingDuplicates = arrayOfValues.length;
  var lengthAfterRemovingDuplicates = [...new Set(arrayOfValues)].length;
  if (lengthBeforeRemovingDuplicates === lengthAfterRemovingDuplicates) return true;
  else return false;
}

var array = [1,2,2,1,3];

uniqueOccurrences(array);

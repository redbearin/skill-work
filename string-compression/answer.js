
function compress (chars) {
  var arrayLetterCounts = [];
  var counts = {};
  chars.forEach(element => { 
    counts[element] = (counts[element] || 0)+1; 
    });

  for (key in counts) {
    arrayLetterCounts.push(key, counts[key]);
  }
  var modLetterCountsArray = arrayLetterCounts.filter(element => element != 1);

  var twoDigitIndices = [];

  for (var indexModLetterCountsArray = 0; indexModLetterCountsArray < modLetterCountsArray.length; indexModLetterCountsArray++){
    if (modLetterCountsArray[indexModLetterCountsArray] > 9) {
      twoDigitIndices.push(indexModLetterCountsArray);
    }
  }

  for (var indexTwoDigitIndices = twoDigitIndices.length -1; indexTwoDigitIndices >= 0; indexTwoDigitIndices--) {
    var indexToChange = twoDigitIndices[indexTwoDigitIndices];
    var numberString = '' + modLetterCountsArray[indexToChange];
    var numberStringArray = numberString.split('');
    var numberList = numberStringArray.map(stringNumber => parseInt(stringNumber));

    for (var numberListIndex = 0; numberListIndex < numberList.length; numberListIndex++) {
      if (numberListIndex === 0) {
        modLetterCountsArray.splice(indexToChange, 1, numberList[0]);
      } else {
        modLetterCountsArray.splice(indexToChange + numberListIndex, 0, numberList[numberListIndex]);
      }
    }
  }
  return modLetterCountsArray;
};

var chars = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "b","c","c","c","c","c","c","c","c","c","c","c","c", "c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c", "c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c", "c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c", "c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c", "c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c", "c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c","c", "c","c","c","c","c","c","c"];

compress(chars);
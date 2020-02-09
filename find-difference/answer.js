function findTheDifference(string, substring) 
{ 
sortedStringArray=(string.split('')).sort();
sortedSubstringArray=(substring.split('')).sort();
for (var index = 0; index < sortedStringArray.length; index++) {
  if (!sortedSubstringArray[index]) return sortedStringArray[index];
  if(sortedStringArray[index] !== sortedSubstringArray[index]) return sortedStringArray[index];
}
}

var substring = "ac";
var string = "ach";

findTheDifference(string, substring);

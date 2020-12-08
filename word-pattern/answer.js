function findMatches(content) {
  let indexMatches = [];
  for (let index = 0; index < content.length; index++) {
    let matches = [index];
    for (let index1 = 0; index1 < content.length; index1++) {
      if (content[index] === content[index1]) {
        matches.push(index1);
      }
    }
    indexMatches.push(matches);
  }
  return indexMatches.sort((a, b) => a - b). join(",");
}

function wordPattern(pattern, str) {
  const arrayStr = str.split(' ');  
  const patternIndexMatches = findMatches(pattern);
  const strIndexMatches = findMatches(arrayStr);
  if (patternIndexMatches === strIndexMatches) {
    return true;
  } 
  return false;
}

var pattern = "abca";
var str = "dog hog cat dog";

wordPattern(pattern, str);
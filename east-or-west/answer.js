const direction = (arr) => {
  const finalArr = [];
  for (var index = 0; index < arr.length; index++)  {
    let newWord = '';
    for (var index1 = 0; index1 < arr[index].length; index1++) {
      if (arr[index].charCodeAt(index1) === 69)
        newWord +=  'W';
      else if (arr[index].charCodeAt(index1) === 65)
        newWord +=  'E'; 
      else if (arr[index].charCodeAt(index1) === 101)
        newWord +=  'w';
      else if (arr[index].charCodeAt(index1) === 97)
        newWord +=  'e'; 
      else 
        newWord += arr[index][index1];
    }
    finalArr.push(newWord);
  }
  return finalArr;
}

const arr = ["east EAST", "e a s t", "E A S T"];
direction(arr);
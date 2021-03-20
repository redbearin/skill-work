const occurrence = (string) => {
  let array = string.split('');
  let result = {};
  //count the number of each letter and place in an object
  for (let index = 0; index < array.length; index++) {
    let key = array[index];
    if (!result[key])  
      result[key] = 1;
    else 
      result[key] += 1; 
  }
  //convert the object with letters and counts to an array of subarrays
  let resultArray  = Object.entries(result);
  //sort the array from letter with highest frequency to letter with lowest frequency
  resultArray.sort((a, b) => {
    return b[1] - a[1];
  });
  let reorderedString = '';
  //combine the letters from highest frequency to lowest frequency
  for (let index = 0; index < resultArray.length; index++) {
    let letterCount = resultArray[index][1];
    for (let index1 = 0; index1 < letterCount; index1++) {
      reorderedString += resultArray[index][0];
    }
  }
  return reorderedString;
};

const string  = "cccaaa";
occurrence(string);
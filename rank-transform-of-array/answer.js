function arrayRankTransform(arr) {
  //create a copy of array to sort
  const newArray = arr.slice(0);
  newArray.sort((a,b) => a - b);
  let count = 1;
  //set the smallest value to 1
  arr[arr.indexOf(newArray[0])] = 1;
  //set all other values
  for (let index = 1; index < newArray.length; index++) {
    if(newArray[index] !== newArray[index -1]) count++;
    arr[arr.indexOf(newArray[index])] = count;
  }
  return arr;
}

const arr = [40,10,20,30];

arrayRankTransform(arr);
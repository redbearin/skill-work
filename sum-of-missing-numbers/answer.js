
const sumMissingNumbers = (arr) => {
  arr.sort((a,b) => a-b);
  const fullArr = [];
  let sumMissing = 0;
  // buiid array of each number from first to last
  for (let num = arr[0]; num <= arr[arr.length - 1]; num++) {
    fullArr.push(num); 
  }
  // go through each number if full array
  // if not in arr then add to the sum 
  // of missing numbers
  for(let index = 0; index < fullArr.length; index++) {
    if(!arr.includes(fullArr[index])) 
      sumMissing += fullArr[index];
  }
  return sumMissing;
};

const arr = [1, 2, 3, 4, 5];

sumMissingNumbers(arr);


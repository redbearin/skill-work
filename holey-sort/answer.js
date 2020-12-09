const holeySort = (arr) => {
  // array to hold numbers strings
  const arrStr = [];
  // create array of number strings 
  for (let index = 0; index < arr.length; index++) {
    arrStr.push(arr[index].toString());
  }

  // numbers with one hole
  const oneHole = ['0', '4', '6', '9'];
  // array with subarrays of numbers and counts
  const withCounts = [];

  // go through each string number
  for (let index = 0; index < arrStr.length; index++) {
    let count = 0;
    // go through each digit of string number and
    // count number of holes
    for (let index1 = 0; index1 < arrStr[index].length; index1++) {
      if (arrStr[index][index1] === '8')
        count += 2;;
      if (oneHole.includes(arrStr[index][index1]))
        count++;
    }
    // add subarray of string number and count
    withCounts.push([arrStr[index], count]); 
  }
  // sort the array with the counts from lowest to
  // highest count
  withCounts.sort((a, b)=> a[1] - b[1]);

  // just numbers in count order
  const numbersOnly = [];
  // go through array with string number and counts 
  // and push each number
  for (let index = 0; index < withCounts.length; index++) {
    numbersOnly.push(+withCounts[index][0]);
  }
  return numbersOnly;
};

const arr = [44, 4, 444, 4444];

holeySort(arr);
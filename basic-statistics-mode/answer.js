const mode = (arr) => {
  // object to hold counts for each number
  let counts = {};
  let modes = [];
  // add numbers and counts to object
  for (let index = 0; index < arr.length; index++) {
    if (counts[arr[index]])
      counts[arr[index]] += 1;
    else
      counts[arr[index]] = 1;
  }
  let countsArr = [];

  // move number and counts to array of subarrays
  for (let num in counts) {
    countsArr.push([num, counts[num]]);
  }

  // sort the array of subarrays by counts
  // in decreasing order
  countsArr.sort((a,b) => b[1] - a[1]);
  // add number with biggest count to mode array
  modes[0] = +countsArr[0][0];
  // add any other numbers that have same count
  for (let index = 1; index < arr.length; index++) {
    if (countsArr[index][1] !== countsArr[0][1])
      break;
    else
      modes.push(+countsArr[index][0])
  }

  return modes;
};

const arr = [1, 2, 2, 3, 6, 6, 7, 9];

mode(arr);


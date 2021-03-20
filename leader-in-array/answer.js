const leader = (arr) => {
  const finalArr = [];
  for (let index = 0; index < arr.length; index++) {
    // last number, always meets criteria
    // stop processing at this index
    if (index === arr.length - 1) {
      finalArr.push(arr[index]);
      break;
    }
    // not the last number in array
    for (let index1 = index + 1; index1 < arr.length; index1++) {
      // number is not less than previous number
      // number at index fails
      if (arr[index] <= arr[index1])
        break;
      // all numbers to right are smaller
      // add number at index to final array
      if (index1 === arr.length -1)
        finalArr.push(arr[index]);
    }
  }
  return finalArr;
};

const arr = [8, 7, 1, 2, 10, 3, 5];
leader(arr);
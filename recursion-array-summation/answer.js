const recurAdd = (arr, sum, index) => {
  // initialize sum and index
  if (!sum) {
    index = 0;
    sum = 0;
  }
  // add number at index to sum
  sum += arr[index];
  // increment to next index
  index++;
  // still numbers in array
  if (arr[index])
    return recurAdd(arr, sum, index);
  return sum;
}

const arr = [-21, -7, 19, 3, 4, -8];

document.getElementById('ans').textContent = recurAdd(arr);
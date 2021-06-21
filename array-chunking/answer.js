const chunk = (arr, subLen) => {
  let i = 0;
  let subArr, end;
  const final = [];
  while (i < arr.length) {
    subArr = [];
    // set the end of the subarray
    if (i + subLen > arr.length)
      end = arr.length;
    else  
      end = i + subLen;
    // build the subarray
    for (let j = i; j < end; j++) {
      subArr.push(arr[j]);
    }
    // add the subarray to the final array
    final.push(subArr);
    // increment with the index
    i += subLen;
  }
  return final;
}

const arr = [1, 2, 3, 4 ,5];
const subLen = 10;

document.getElementById('ans').textContent = chunk(arr, subLen);
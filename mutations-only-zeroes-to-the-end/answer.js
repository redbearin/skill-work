const zeroesToEnd = (arr) => {
  // indices with 0s
  const zeroIndices = [];
  // find zeros and add indicies in zeroIndices array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0)
      zeroIndices.push(i);
  }
  // for each element in zeroIndices array 
  // remove the zero and add a zero to end of array
  for (let i = zeroIndices.length - 1; i >= 0; i--) {
    arr.splice(zeroIndices[i], 1);
    arr.push(0);
  }
  return arr;
}
const arr = [0, 0];

document.getElementById('ans').innerHTML = zeroesToEnd(arr);
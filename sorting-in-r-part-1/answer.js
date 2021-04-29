const order = (arr) => {
  // define variables
  let index, sortedArr;
  let final = [];

  // sort alphas
  if (isNaN(arr[0])) 
    sortedArr = [...arr].sort();
  // sort numbers
  else
    sortedArr = [...arr].sort((a,b) => a-b);
    
  // go through the elements in the sortedArr
  // find the index of that element in arr
  // mark each item in the array to avoid
  // same index when there are duplicate elements
  for (let i = 0; i < sortedArr.length; i++) {
    index = arr.indexOf(sortedArr[i]);
    final.push(index);
    arr[index] = '*';
  }
  return final;
}

const arr =[9, 1, 4, 5, 4];

document.getElementById('ans').textContent = order(arr);
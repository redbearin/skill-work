const almostSorted = (arr) => {
  let greater = 0;
  let less = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i])
      greater++;
    else  
      less++;
  }
  if (greater === 1  || less === 1)
    return true;
  else
    return false;
}
const arr = [7, 8, 9, 3, 10, 11, 12, 2];

document.getElementById('ans').innerHTML = almostSorted(arr);
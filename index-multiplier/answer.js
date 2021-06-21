const indexMultiplier = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
     sum += i * arr[i];
  }
  return sum;
}

const arr = [-3, 0, 8, -6];
document.getElementById('ans').innerHTML = indexMultiplier(arr);
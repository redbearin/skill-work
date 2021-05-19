const canBuild = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] + arr[i][arr[i].length - 1] !== arr[i] &&
      arr[i][0] + arr[i - 1] !== arr[i]) 
        return false;
  }
  return true;
}

let arr = ["mean", "meany"];

document.getElementById('ans').textContent = canBuild(arr);
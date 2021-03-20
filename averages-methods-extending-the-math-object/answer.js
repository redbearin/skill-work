Math.avg = (arr, prec) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return arr.reduce((sum, num) => sum + num)/arr.length;
}

Math.qAvg = (arr, prec) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i],2);
  }
  return Math.sqrt(sum / 3).toFixed(prec);
}

Math.hAvg = (arr, prec) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i],-1);
  }
  return Math.pow(sum / 3, -1).toFixed(prec);
}

Math.gAvg = (arr, prec) => {
  let product = 1;
  let exp = 1/3;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return Math.pow(product, exp).toFixed(prec);
}

const arr = [3, 5, 7];
const prec = 1;

document.getElementById('ans').innerHTML = Math.avg(arr);
document.getElementById('ans1').innerHTML = Math.qAvg(arr, prec);
document.getElementById('ans2').innerHTML = Math.hAvg(arr, prec);
document.getElementById('ans3').innerHTML = Math.gAvg(arr, prec);
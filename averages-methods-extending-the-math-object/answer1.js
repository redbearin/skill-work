Math.avg = (arr, prec) => {
  return arr.reduce((sum, num) => sum + num)/arr.length;
}

Math.qAvg = (arr, prec) => {
  let sum = arr.reduce((acc, num) => acc + Math.pow(num,2), 0);
  return Math.sqrt(sum / 3).toFixed(prec);
}

Math.hAvg = (arr, prec) => {
  let sum = arr.reduce((acc, num) => acc + Math.pow(num,-1), 0);
  return Math.pow(sum / 3, -1).toFixed(prec);
}

Math.gAvg = (arr, prec) => {
  let exp = 1/3;
  let product = arr.reduce((acc, num) => acc * num, 1);
  return Math.pow(product, exp).toFixed(prec);
}

const arr = [3, 5, 7];
const prec = 1;

document.getElementById('ans').innerHTML = Math.avg(arr);
document.getElementById('ans1').innerHTML = Math.qAvg(arr, prec);
document.getElementById('ans2').innerHTML = Math.hAvg(arr, prec);
document.getElementById('ans3').innerHTML = Math.gAvg(arr, prec);
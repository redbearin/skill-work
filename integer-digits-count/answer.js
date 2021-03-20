const count = (num) => {
  absNumStr = Math.abs(num).toString();
  return absNumStr.length;
}

const num = 654321;

document.getElementById('ans').innerHTML = count(num);
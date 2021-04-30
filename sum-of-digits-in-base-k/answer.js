const sumBase = (n, k) => {
  const str = n.toString(k);
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += +str[i];
  }
  return sum;
};

const n = 10;
const k = 10;

document.getElementById('ans').textContent = sumBase(n, k);
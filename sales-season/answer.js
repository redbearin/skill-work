const discount = (arr) => {
  const arrSorted = [...arr].sort((a,b) => a - b);
  let sum = 0;
  const final = [];

  for (let i = 0; i < arrSorted.length; i++) {
    sum += arrSorted[i];
  }

  const itemsFree = Math.floor(arr.length / 3);
  let free = 0;

  for (let i = 0; i < itemsFree; i++) {
    free += arrSorted[i];
  }

  let percentCharged = 1 - free/sum;

  for (let i = 0; i < arrSorted.length; i++) {
    final.push((arr[i] * percentCharged).toFixed(2));
  }

  console.log(final);
}

const arr = [68.74, 17.85, 55.99];

document.getElementById('ans').innerHTML = discount(arr);

const swap = (a, b, c) => {
  const arr = [a, b, c];
  let index = 0;
  while (arr[index] === c) {
    index++;
  }
  return arr[index];
};

const a = 1;
const b = 3;
const c = 1;

swap(a, b, c);

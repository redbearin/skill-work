const group = (arr, count) => {
  const final = [];
  sub = [];
  let i = 0;
  while (i < arr.length) {
    sub = [];
    if (arr.length - i < count)
      count = arr.length - i;
    for (let j = 0; j < count; j++) {
      sub.push(arr[i + j]);
    }
    i += count;
    final.push(sub);
  }
  return final;
}

const arr = [1, 2, 3, 4, 5];
const count = 1;
group(arr, count);
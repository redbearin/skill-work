const windowMaxes = (arr, size) => {
  let j, biggest;
  let final = [];
  for (let i = 0; i <= arr.length - size; i++) {
    biggest = -Infinity;
    for (j = i; j < i + size; j++) {
      if (arr[j] > biggest)
        biggest = arr[j];
    }
    final.push(biggest);
  }
  return final;
};

const arr = [1, 2, 3, 4, 3, 2, 1, 2, 5];
const size = 4;

document.getElementById('ans').textContent = windowMaxes(arr, size);
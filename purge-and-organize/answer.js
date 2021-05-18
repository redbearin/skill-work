const uniqueSort = (arr) => {
  arr.sort((a, b) => a - b);
  return [...new Set(arr)];
}

const arr = [6, 7, 3, 2, 1];

document.getElementById('ans').textContent = uniqueSort(arr);
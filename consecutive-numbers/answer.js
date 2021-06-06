const isThereConsecutive = (arr, num, times) => {
  const indices = [];
  // arr includes num
  // but it shouldn't appear
  if (times === 0) {
    if (arr.includes(num))
      return false;
    return true;
  }

  // find each index of num
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      indices.push(i);
    }
  }
  // one time and one index
  if (times === 1 && indices.length === 1)
    return true;

  // if the number of indices
  // less than number of times required
  if (indices.length < times)
    return false;

  // check to see if you have correct
  // number of indices in sequence
  for (let i = 0; i < indices.length; i += times) {
    for (let j = i + 1; j < i + times; j++) {
      if (indices[j - 1] + 1 !== indices[j])
        break;
      if (j === i + times - 1)
        return true;
    }
  }
  return false;
}

const arr = [5, 5, 5, 5, 5];
const num = 5;
const times = 7;

document.getElementById('ans').textContent = isThereConsecutive(arr, num, times);
diamondSum  = (num) => {
  // find the element at is the middle
  const mid = Math.floor(num/2);
  // sum of the blank elements
  let sum = 0;
  // count number by number as you progress thru
  // elements of array and subarrays
  let count = 0;
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      count++;
      // last element element of array
      if (i === num - 1) {
        if (j === mid) 
        sum += count;
      }
      // first half of array
      else if (i <= mid && (mid - i === j || mid + i === j )) 
        sum += count;

      // last half of array, expect last element of array
      else if (i > mid && (mid - (i - mid) === j || mid + (i-mid) === j )) 
        sum += count;
    }
  }
  return sum;
}

const num = 1;

document.getElementById('ans').textContent = diamondSum(num);



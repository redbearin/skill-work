const depth = (arr, count = 0) => {
  const newArr = arr.pop();
  console.log('newArr: ', newArr);
  count++;
  console.log(count)
  while (newArr.length > 1) {
    console.log('recur NewArr: ', newArr)
    console.log('recur count: ', count)
    return depth(newArr, count);
  }
  return count;
};

const arr = [1, [2, [3, [4]]]];

document.getElementById('ans').innerHTML = depth(arr);
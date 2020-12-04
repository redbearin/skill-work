const twoProduct = (arr, ttl) => {
  const sortArr = arr.sort((a,b) => b - a);
  for (let index = 0; index < sortArr.length - 1; index++) {
    if (arr[index] > ttl) 
      continue;
    for (let index1 = index + 1; index1 < sortArr.length; index1++) {
      if (arr[index] * arr[index1] === ttl)
        return '[' + arr[index1] + ', ' + arr[index] + ']';
    }
  }
  return 'undefined';
};

const arr = [100, 12, 4, 1, 2];
const ttl = 15;

twoProduct(arr, ttl);
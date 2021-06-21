const getFrequencies = (arr) => {
  obj = {};
  for (let index = 0; index < arr.length; index++) {
    if (obj[arr[index]])
      obj[arr[index]] += 1;
    else 
      obj[arr[index]] = 1;
  }
  return obj;
}

const arr = [1, 2, 3, 3, 2];
getFrequencies(arr);
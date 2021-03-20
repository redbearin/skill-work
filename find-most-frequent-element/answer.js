const findFrequent = (arr) => {
  const obj = {};
  for(let index = 0; index < arr.length; index++) {
    if (!obj[arr[index]])
      obj[arr[index]] = 1;
    else 
      obj[arr[index]] += 1
  }
  const objArr = Object.entries(obj);
  objArr.sort((a,b) => b[1] - a[1]);
  return objArr[0][0];
};

const arr = [false, "up", "down", "left", "right", true, false];
findFrequent(arr);
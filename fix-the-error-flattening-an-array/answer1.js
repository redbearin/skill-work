const flatten = (arr) => {
  let arr2 = [];
  let str = ''
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1)
      str += arr[i];
    else  
    str += arr[i] + ','
  }
  return arr2.concat(str);
}

const arr = [[true, false], [false, false], [false, false]];

document.getElementById('ans').innerHTML = flatten(arr);
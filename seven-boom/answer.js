const sevenBoom = (arr) => {
  for (let index = 0; index < arr.length; index++)  {
    let strNum = arr[index].toString();
    for (let index1 = 0; index1 < strNum.length; index1++) {
      if (strNum[index1] === '7') 
        return 'Boom!';
    }
  }
  return 'there is no 7 in the array';
}

const arr = [2, 55, 60, 97, 86];
sevenBoom(arr);
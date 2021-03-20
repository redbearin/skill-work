const removeLeadingTrailing = (num)  => {
  const arr = num.split('.');
  let left = '';
  let right = '';
  // left side of number
  for (let index = 0; index < arr[0].length; index++) {
    if(arr[0][index] > 0) {
      left = arr[0].slice(index);
      break;
    }
  }
  // if there is a part after the decimal
  if (arr.length > 1) {
    for (let index = arr[1].length - 1; index >= 0; index--) {
      if(arr[1][index] > 0) {
        right = arr[1].slice(0, index + 1);
        break;
      }
    }
  }
  // if there is nothing after decimal
  if (!right.length) {
    // if there is nothing before decimal
    if (!left)
      return '0';
    else
      return left;
  }
  // something before and after decimal
  else 
    return left + '.' + right;
};

const num = "0.0";

removeLeadingTrailing(num);
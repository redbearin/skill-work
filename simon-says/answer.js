const simonSays = (arr) => {
  let total;
  let temp;
  for (let i = 0; i < arr.length; i++) {
    temp = arr[i].split(' ');
    if (temp.includes('Simon')) {
      if (total === undefined) {
        if (temp.includes('add') || 
            temp.includes('subtract'))
          total = 0;
        else 
          total = 1;
      }    
      if (temp.includes('add')) {
        total += +temp[temp.length - 1];
      }
      if (temp.includes('subtract')){
        total -= +temp[temp.length - 1];
      }
      if (temp.includes('multiply')){
        total *= +temp[temp.length - 1];
      }
      if (temp.includes('divide')){
        total /= +temp[temp.length - 1];
      }
    }
  }
  if (total === undefined)
    return 0
  else
    return total;
}

const arr = [
  "Firstly, add 4",
  "Simeon says subtract 100"
];

document.getElementById('ans').innerHTML = simonSays(arr);
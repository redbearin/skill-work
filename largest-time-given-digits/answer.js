function largestTimeFromDigits(digits){
  var time = [];
  var string = '';
  for (let value = 2; value >= 0; value--) {
    const index = digits.indexOf(value);
    if (index > -1) {
    time[0] = value;
    digits.splice(index, 1);
    break;
    }
    if (value === 0) return '';
  }
  for (let value = 5; value >= 0; value--) {
    const index = digits.indexOf(value);
    if (index > -1) {
    time[2] = value;
    digits.splice(index, 1);
    break;
    }
    if (value === 0) return '';
  }
  if(time[0] === 2) {
    for (let value = 3; value >= 0; value--) {
      const index = digits.indexOf(value);
      if (index > -1) {
      time[1] = value;
      digits.splice(index, 1);
      break;
      }
      if (value === 0) return '';
    }
  } else {
    for (let value = 9; value >= 0; value--) {
      const index = digits.indexOf(value);
      if (index > -1) {
      time[1] = value;
      digits.splice(index, 1);
      break;
      }
    }
  }
  time[3] = digits[0];
  time.splice(2, 0, ':');
  return time.join('');
};

var digits = [1,2,3,4];

largestTimeFromDigits(digits);
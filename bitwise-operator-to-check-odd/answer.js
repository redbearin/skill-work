const isOdd = (num) => {
  if(num & 1)
    return 'Yes';
  else
    return 'No';
};

const num = -99;

isOdd(num);
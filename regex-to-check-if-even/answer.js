const isEven = (num) => {
  const regex = /^\d*[02468]/;
  if (regex.test(num))
    return true;
  else 
    return false;
};

const num = 97;

isEven(num);
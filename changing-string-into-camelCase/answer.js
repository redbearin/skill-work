const camelCasing = (str) => {
  let finalStr = '';
  let index = 0;
  while (str[index]) {
    if (str[index] ===  ' ' || 
        str[index] ===  '_') {
      finalStr += str[index + 1].toUpperCase();
      index += 2;
    }
    else {
      finalStr += str[index].toLowerCase();
      index++;
    }
  }
  return finalStr;
};

const str = "low high_HIGH";

camelCasing(str);
const swapTwo = (str) => {
  for(let index = 0; index <str.length; index++) 
    return str[index + 2] + str[index + 3] + str[index] + str[index + 1] + str.slice(4);
};

const str = "munchkins";
swapTwo(str);

const firstRepeat = (string) => {
  for (let index = 0; index < string.length - 1; index++) {
    for (let index1 = index + 1; index1 < string.length; index1++) {
      if (string[index] === string [index1])
        return string[index];
    }
  }
  return -1;
};

const string = "Isildur";
firstRepeat(string);
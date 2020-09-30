const canFind = (bits, words) => {
  for (let index = 0; index < bits.length; index++) {
    let count = 0;
    for (let index1 = 0; index1 < words.length; index1++) {
      if (words[index1].includes(bits[index])) {
        count++;
      }
    }
    if (!count)
      return false;
  }
  return true;
};

const bits = ["oo", "mi", "ki", "la"]; 
const words = ["milk", "chocolate", "cooks"];

canFind(bits, words);
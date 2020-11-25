const halveCount = (intA, intB) => {
  let num = intA / 2;
  count = 0;
  while (num > intB) {
    count++;
    num = num / 2;
  }
  return count;
};

const intA = 1000;
const intB = 3;

halveCount(intA, intB);
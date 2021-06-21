const halveCount = (intA, intB, count) => {
  let num = intA / 2;
  if (num > intB) 
    return halveCount(num, intB, count + 1);
  return count;
};

const intA = 1324;
const intB = 98;
const count = 0;

halveCount(intA, intB, count);
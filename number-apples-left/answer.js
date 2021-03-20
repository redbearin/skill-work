const getNumberOfApples = (num, percent) => {
  const decimal = +(percent.slice(0, -1))*.01;
  const amount = num - Math.ceil(decimal * num);
  if (amount === 0) 
    return "The children didn't get any apples";
  else 
    return amount;
};

const num = 0;
const percent = "10%"

getNumberOfApples(num, percent);
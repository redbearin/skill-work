const discount = (num, disc) => {
  return (num * disc * .01).toFixed(2);
};

const num = 1500;
const disc = 50;

discount(1500, 50);
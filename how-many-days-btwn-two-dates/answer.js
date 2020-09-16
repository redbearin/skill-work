const getDays = (date1, date2) => {
  return Math.abs(new Date(date1) - new Date(date2))/ (1000 * 86400);
};

const date1 = 'December 4, 2015';
const date2 = 'December 12, 2015'
getDays(date1, date2);
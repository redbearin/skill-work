const countBalls = (lowLimit, highLimit) => {
  let obj = {};
  let sum;
  for (let num = lowLimit; num <= highLimit; num++) {
    strNum = num.toString();
    sum = 0;
    for (let index = 0; index < strNum.length; index++) {
      sum += +strNum[index];
    }
    if(obj[sum]) 
      obj[sum]++;
    else
      obj[sum] = 1;
  }
  const sortedEntries = Object.entries(obj).sort((a,b) => b[1] - a[1]);
  return sortedEntries[0][1];
};

const lowLimit = 19;
const highLimit = 28;

countBalls(lowLimit, highLimit);
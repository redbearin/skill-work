const isTriplet  = (num1, num2, num3)  =>  {
  const sortedNums = [num1, num2, num3].sort((a,b) => a - b);
  if (Math.pow(sortedNums[0], 2) + 
      Math.pow(sortedNums[1], 2) ===
      Math.pow(sortedNums[2], 2))
    return true;
  return false;
};

const num1 = 1;
const num2 = 2;
const num3 = 3;

document.getElementById('ans').textContent = isTriplet(num1, num2, num3);
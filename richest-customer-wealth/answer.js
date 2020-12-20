const maximumWealth = (accounts) => {
  let max = 0;
  // loop through each customer
  for (let index = 0; index < accounts.length; index++){
    let sum = 0;
    // loop through each bank account
    for (let index1 = 0; index1 < accounts[index].length; index1++) {
      sum += accounts[index][index1];
    }
    if (sum > max)
      max = sum;
  }
  return max;
};

const accounts = [[2,8,7],[7,1,3],[1,9,5]];
maximumWealth(accounts);
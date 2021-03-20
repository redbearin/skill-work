const invalidTransactions = (transactions) => {
  const invalid = [];
  const transArray = [];
  // move to array of strings to array of subarrays
  for (let index = 0; index < transactions.length; index++) 
    transArray.push(transactions[index].split(','));

  // if the purchase amount is too high 
  // return element to invalid array
  for (let index = 0; index < transactions.length; index++) {
    if (parseInt(transArray[index][2]) > 1000) 
      invalid.push(transArray[index]);
  }

  // cycle through and compare array elements
  // if name same, city different, and time less than 60 min
  // add to purchase to invalid array
  for (let index = 0; index < transactions.length - 1; index++) {
    for (let index1 = index + 1; index1 < transactions.length; index1++) {
      if (transArray[index][0] === transArray[index1][0] && 
          Math.abs(transArray[index][1] - transArray[index1][1]) < 60 && transArray[index][3] !== transArray[index1][3]) 
        invalid.push(transArray[index], transArray[index1]);
    }
  }

  return invalid;
};

transactions = ["alice,20,800,mtv","bob,50,1200,mtv"];
invalidTransactions(transactions); 

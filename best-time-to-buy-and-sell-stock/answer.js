const maxProfit = prices => {
  let profit = 0;
  for (let index = 0; index < prices.length - 1; index++) {
    for (let index1 = index + 1; index1 < prices.length; index1++) {
      let difference = prices[index1] - prices[index];
      if (difference > profit) {
        profit = difference;
      }
    }
  }
  return profit;
}

const prices = [7,6,4,3,1];
maxProfit(prices);
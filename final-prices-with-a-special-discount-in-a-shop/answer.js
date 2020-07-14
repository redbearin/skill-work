const finalPrices = (prices) => {
  const finalPrices = [];
  // go through each listed price
  for (let index = 0; index < prices.length - 1; index++) {
    // go through prices to right to find discount
    for (let index1 = index + 1; index1 < prices.length; index1++) {
      // if the price is lower it is the discount amount
      // subtract from original price to get new price
      // put revised price in array
      if (prices[index1] < prices[index]) {
        finalPrices.push(prices[index] - prices[index1]);
        break;
      }
      // if you reach the end of the array and 
      // you have not found a lower price
      // there is no discount, so price is the same
      if (index1 === prices.length - 1 && prices[index1] > prices[index]) {
        finalPrices.push(prices[index]);
      }
    }
  }
  // last entry is the final price, since there is
  // nothing to right in array
  finalPrices.push(prices[prices.length - 1]);
  return finalPrices;
}

const prices = [10,1,1,6];

finalPrices(prices);
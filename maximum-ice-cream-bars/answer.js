const maxIceCream = (costs, coins) => {
  // sort the array
  // will allow purchase of cheapest first
  costs.sort((a,b) => a - b);
  // sum of costs
  let sum = 0;
  // number of bars purchased
  let count = 0;
  // got through bars
  for (let i = 0; i < costs.length; i++) {
    // add the cost of the bar
    sum += costs[i];
    // sum of costs less than money available
    // increment count
    if (sum <= coins)
      count++;
    // sum is bigger than amount of money available
    if (sum > coins)
      return count;
  }
  // money to buy all bars
  return count;
};

const costs = [1,6,3,1,2,5];
const coins = 20;

document.getElementById('ans').innerHTML = maxIceCream(costs, coins);
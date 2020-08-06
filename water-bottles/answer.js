const numWaterBottles = (numBottles, numExchange) => {
  // intial num full bottles
  let ttlFull = numBottles;
  // as long as number bottles
  // >= number of bottle required for exchange
  while(numBottles > numExchange - 1) {
    // find num of full bottles that 
    // can be generated from empties
    bottlesToAdd = Math.floor(numBottles /numExchange);
    // find num bottles remaining
    // bottles after exchange + number
    // left over from exchange
    numBottles = bottlesToAdd + (numBottles % numExchange);
    // adjust the total
    ttlFull += bottlesToAdd;
  }
  return ttlFull;  
};

const numBottles = 2;
const numExchange = 3;

numWaterBottles(numBottles, numExchange);
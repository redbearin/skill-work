canCompleteCircuit = (gas, cost) => {
  // go thru each station
  for (let stationIdx = 0; stationIdx < gas.length; stationIdx++) {
    if (stationIdx) {
      // take the first element of gas and cost arrays
      // and move to the end of those arrays to 
      // mimic starting at this station index
      gas.push(gas.shift());
      cost.push(cost.shift());
    }
    // total gas
    let total = 0;
    // cycle through station to station based 
    // on station index
    for (let routeIdx = 0; routeIdx < gas.length; routeIdx++) {
      // log total gas to get to next station
      total = total + gas[routeIdx] - cost[routeIdx];
      // total < zero, car doesn't make it
      // break to start at next station
      if (total < 0) 
        break;
      // last index in route, total >= 0
      // car made it - starting at this station works
      if (routeIdx === gas.length - 1 && total >= 0) {
        return stationIdx;
      }
    }
  }
  return - 1;
};

const gas  = [1,2,3,4,5];
const cost = [3,4,5,1,2];
canCompleteCircuit(gas, cost);
const findRadius = (houses, heaters) => {
  // longest distance any house to a heater
  let longestDistance = 0;
  // cycle through all houses
  for (let index = 0; index < houses.length; index++) {
    let shortestDistance = null;
    // distance of closest heater to house
    for (let index1 = 0; index1 < heaters.length; index1++) {
      // distance house to heater
      let distance = Math.abs(houses[index] - heaters[index1]);
      if (shortestDistance === null) 
        shortestDistance = distance;
      if (shortestDistance && distance < shortestDistance) {
        shortestDistance = distance; 
      }
    }
    // if min heater distance for house bigger 
    // replace longest distance
    if (longestDistance < shortestDistance) 
      longestDistance = shortestDistance;
  }
  return longestDistance;  
}

const houses = [1,2,3,4];
const heaters = [1,4];

findRadius(houses, heaters);
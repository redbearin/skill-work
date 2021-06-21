function kidsWithCandies(candies, extraCandies) {
  const max = Math.max.apply(null, candies);
  let reachMax = [];
  for( let index =0; index < candies.length; index++) {
    candies[index] + extraCandies >= max ? 
      reachMax.push(true) : reachMax.push(false);
  }  
  return reachMax;
}

const candies = [12,1,12];
const extraCandies = 10;
kidsWithCandies(candies, extraCandies);


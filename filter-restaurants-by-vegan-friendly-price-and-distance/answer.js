const filterRestaurants = (restaurants, veganFriendly, maxPrice, maxDistance) => {
  const meetsCriteria = [];
  const idArray = [];
  // cycle thru rest to find rest that meet criteria
  for (let index = 0; index < restaurants.length; index++) {
    // price and distance <= limits
    if(restaurants[index][3] <= maxPrice && restaurants[index][4] <= maxDistance) {
      // don't care about vegan or care about vegan and restaurant is vegan
      if (!veganFriendly || veganFriendly === 1 && restaurants[index][2] === 1) {
        // add restaurant to array restaurants that meets criteria
        meetsCriteria.push(restaurants[index]); 
      }
    }
  } 
  // sort restaurants that meet criteria based on the rating
  meetsCriteria.sort((a, b) => b[1] - a[1]);
  // if two ratings are the same put the bigger id first
  for (let index = 1; index < meetsCriteria.length; index++) {
    if(meetsCriteria[index - 1][1]=== meetsCriteria[index][1] && meetsCriteria[index - 1][0] < meetsCriteria[index][0]) {
      const temp = meetsCriteria[index];
      meetsCriteria[index] = meetsCriteria[index - 1];
      meetsCriteria[index - 1] = temp;
    }
  }
  // create an array of just the ids
  for (let index = 0; index < meetsCriteria.length; index++) {
   idArray.push(meetsCriteria[index][0]);
  }
  return idArray;
};

const restaurants = [[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]];
const veganFriendly = 1;
const maxPrice = 50;
const maxDistance = 10;
filterRestaurants(restaurants, veganFriendly, maxPrice, maxDistance);


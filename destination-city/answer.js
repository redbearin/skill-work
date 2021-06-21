const destCity = (paths) => {
  // get rid of subarrays
  const woSubArrays = paths.flat(1);
  const cityCounts = {};
  // create object that includes count of each city
  woSubArrays.forEach(city => {
    if(cityCounts[city]) 
      cityCounts[city] += 1;
    else 
      cityCounts[city] = 1;
  });

  for (let city in cityCounts) {
    // only one instance of city in cityCounts object
    // which means either starting or destination city AND
    // and index is odd (2nd element in subarray) which 
    // makes it the destination
    if (cityCounts[city] === 1 && 
        woSubArrays.indexOf(city) % 2 !== 0) 
      return city;
  }

}
 const paths = [["B","C"],["D","B"],["C","A"]];
destCity(paths);
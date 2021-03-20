function findSpecialInteger(array) {
  let result = {};
  let resultWithCounts = {};
  let total = 0;
  array.forEach((value, index) => {
    if (!result[value]) result[value] = [index]; 
    else result[value].push(index); 
  });
  for (let key in result) {
    resultWithCounts[key] = result[key].length;
  }
  for (let key in resultWithCounts) {
    total += resultWithCounts[key];
  }
  for (let key in resultWithCounts) {
    if (resultWithCounts[key] > .25 * total) return key;
  }
}

let array = [1,2,2,6,6,6,6,7,10];

findSpecialInteger(array);
const isPathCrossing = (path) => {
  let y = 0;
  let x = 0;
  const array = [[0,0]];
  for (let index = 0; index < path.length; index++) {
    if (path[index] === 'N') {
      y += 1;
      array.push([x,y]);
    }
    if (path[index] === 'E') {
      x += 1;
      array.push([x,y]);
    }
    if (path[index] === 'S') {
      y -= 1;
      array.push([x,y]);
    }
    if (path[index] === 'W') {
      x -= 1;
      array.push([x,y]);
    }
  }
  // make the array elements keys in an object
  let unique = {};
  array.forEach((element) => {
    // make a new key/value pair if one does not exist
    if(!unique[element]) {
      unique[element] = true;
    }
  });
  // take the keys and make generate an array
  const uniqueArray = Object.keys(unique);
  // if the length of array with duplicates removed
  // is the same length as the original array
  // no duplicate visits
  if (uniqueArray.length === array.length)
    return false;
  else 
    return true;
}

const path = "NES"; 
isPathCrossing(path);

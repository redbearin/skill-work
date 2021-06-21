const nearestValidPoint = (x, y, points) => {
  let manDis, min, index;
  let validMatch = false;
  // loop through all points
  for (let i = 0; i < points.length; i++) {
    // there is a x or y match
    if (points[i][0] === x || points[i][1] === y) {
      // calculate the Manhattan distance
      manDis = Math.abs(points[i][0] - x) + Math.abs(points[i][1] - y);
      //perfect match
      if (manDis === 0) {
        return i;
      }
      // first valid match
      if (!validMatch){
        // set minimum
        min = manDis;
        // set index
        index = i;
        // note that there has been a valid match
        validMatch = true;
      }
      // already a valid match and Manhattan distance
      // less than current minimum
      else if (manDis < min) {
        // set new minimum
        min = manDis;
        // set new index
        index = i;
      }
    }
  }
  // no valid match
  if (index === undefined)
    return -1;
  // first index with minimum distance
  else 
    return index;
}

const x = 3;
const y = 4;
const points = [[2,3]];

document.getElementById('ans').innerHTML = nearestValidPoint(x, y, points);
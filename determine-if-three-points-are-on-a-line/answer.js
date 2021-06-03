const sameLine = (points) => {
  // set the base slope (first two points)
  let slope = (points[1][1] - points[0][1]) / (points[1][0] - points[0][0]);
  let newSlope;
  // go through remaining points and
  // check if slope is the same
  for (let i = 2 ; i < points.length; i++) {
    newSlope = (points[i][1] - points[i-1][1]) / (points[i][0] - points[i-1][0])
    if (newSlope !== slope)
      return false;
  }
  return true;
}

const points = [[3, 4], [3, 5], [6, 6]];
document.getElementById('ans').textContent = sameLine(points)
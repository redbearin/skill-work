const trackRobot = (north, east, south, west) => {
  if (!north)
    north = 0;
  if (!east)
    east = 0;
  if (!south)
    south = 0;
  if (!west)
    west = 0;
  const yDirection = north - south;
  const xDirection = east - west;
  return '[' + xDirection + ', ' + yDirection + ']';
}

const north = -10;
const east = 20;
const south = 10;
trackRobot(north, east, south);
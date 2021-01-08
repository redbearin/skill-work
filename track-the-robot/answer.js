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

const north = 20;
const east = 30;
const south = 10;
const west = 40
trackRobot(north, east, south, west);
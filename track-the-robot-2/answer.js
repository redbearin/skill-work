const trackRobot = (north, east, south, west) => {
  // cases when no movement in a direction
  // no arg in the function call
  if (!north)
    north = 0;
  if (!east)
    east = 0;
  if (!south)
    south = 0;
  if (!west)
    west = 0;
  return '(' + (east - west) + ', ' + (north - south) + ')';
};

const north = 20;
const east = 30;
const south = 10;
const west = 40;

trackRobot(north, east, south, west);
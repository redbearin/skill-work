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


trackRobot();
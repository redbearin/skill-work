const groupSeats = (seats, grpSize) => {
  //empty seats together
  let emptySeats;

  // number places where there are 
  // locations with adequate seats together
  let numLocations = 0;

  // go row by row through theater
  for (let i = 0; i < seats.length; i++) {
    // go seat by seat in the row
    for (let j = 0; j < seats[i].length; j++) {
      // seat is empty
      // increment number empty seats together
      if (seats[i][j] === 0) 
        emptySeats++;

      // seat is filled or last seat in row 
      if (seats[i][j] === 1 || j === seats[i].length - 1) {
        // number empty seats together >= group size
        if (emptySeats >= grpSize) {
          // add locations to count
          // allow for multiple combinations 
          numLocations += 1 + emptySeats - grpSize;
        }
        emptySeats = 0;
      }
    }
  }
  return numLocations;
}

const seats = [
  [1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1],
  [0, 1, 1, 1, 1, 0, 0]
];
const grpSize = 2;

document.getElementById('ans').innerHTML = groupSeats(seats, grpSize);
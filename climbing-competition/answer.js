const climb = (stam, obst) => {
  let count = 0;
  for (let i = 1; i < obst.length; i++) {
    // you still have stamina
    if (stam > 0) {
      stam -= Math.ceil(Math.abs(obst[i] - obst[i-1]));
      // reaching this obstacle is beyond your stamina
      // you are finished
      if (stam < 0) {
        break;
      }
      // you reached another obstacle 
      // add it to the count
      if (stam >= 0) {
        count++;
      }
    }
    // you don't have any stamina left
    else
      break;
  }
  return count;
}

const stam = 10;
const obst = [5, 4.2, 3, 3.5, 6, 4, 6, 8, 1];

document.getElementById('ans').innerHTML = climb(stam, obst);

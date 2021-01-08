const canPlaceFlowers = (flowerbed, n) => {
  let number = 0;
  let count = 0;
  let isIdx0 = false;
  // cycle through all the plots in flowerbed
  for (let index = 0; index < flowerbed.length; index++) {
    // is zero index
    if (index === 0) {
      isIdx0 = true;
    }
    // plot has no flowers
    if (flowerbed[index] === 0) {
      count++;
      // it is the last index
      if (index === flowerbed.length - 1) 
        number += Math.floor(count/2);
    }
    // plot has flowers
    if (flowerbed[index] === 1) {
      // if is the first index
      if (isIdx0 === true) {
        number += Math.floor(count/2);
      }
      // it is not the first index
      // which means plots are somewhere in middle
      if (isIdx0 === false) { 
        number += Math.floor((count -1)/2);
      }
      // reset the counter zero index
      count = 0;
      isIdx0 = false;
    }
    // number of plantable plots >= n
    if (number >= n) 
      return true;
  }
  return false;
}


const flowerbed = [1,0,0,0,1];
const n = 2;
canPlaceFlowers(flowerbed, n);
const findBiggestSmallest = (array) => {
  array.sort((a,b) => a - b);
  return [array[0], array[array.length - 1]];
}

const array = [1,2,3,5,0,35,7];
findBiggestSmallest(array);
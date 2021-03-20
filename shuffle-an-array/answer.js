const arrayShuffle= (array) => {
  // randomize starting with last index as base
  for(let index = array.length - 1; index > 0; index--) {
    // generate a random index
    const randomIdx = Math.floor(Math.random() * index);
    // move the element at index to temp storage
    const temp = array[index];
    // take the value in the random index and move it
    // to the index
    array[index] = array[randomIdx];
    // put the contents of the original index into the 
    // random index
    array[randomIdx] = temp;
  }
  return array;
}

const array = [3, 9, 1, 7];

arrayShuffle(array);

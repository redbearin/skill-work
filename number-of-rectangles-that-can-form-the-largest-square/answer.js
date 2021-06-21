const countGoodRectangles = (rectangles) => {
  let smallestDims = [];
  let count = 1;
  for (let index = 0; index < rectangles.length; index++) {
    rectangles[index][0] > rectangles[index][1] ?
    smallestDims.push(rectangles[index][1]) :
    smallestDims.push(rectangles[index][0]);
  }
  smallestDims.sort((a,b) => b - a);
  for (let index = 1; index < rectangles.length; index++) {
    if (smallestDims[index - 1] === smallestDims[index])
      count++;
    else 
      break;
  }
  return count;
};

const rectangles = [[2,3],[3,7],[4,3],[3,7]];
countGoodRectangles(rectangles);
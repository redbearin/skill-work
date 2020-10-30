const trimMean = (arr) => {
  // sort the array
  arr.sort((a,b)=> a-b);
  const numToRem = Math.round(arr.length * .05);
  // remove numbers from front
  const newArr = arr.splice(numToRem);
  // remove numbers from back
  const final = newArr.splice(0, newArr.length - numToRem);
  // sum numbers that remain in array
  const sum = final.reduce((accumulator, element)=> accumulator += element)
  // calculate avg
  return (sum/final.length).toFixed(5)
};

arr = [6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4];
trimMean(arr);
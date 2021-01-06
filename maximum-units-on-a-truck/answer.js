const chocolatesParcel = (boxTypes, truckSize) => {
  let total = 0;
  let count = 0;
  boxTypes.sort((a,b) => b[1] - a[1]);
  for (let index = 0; index < boxTypes.length; index++) {
    if (count === truckSize)
      break;
    if (boxTypes[index][0] + count <= truckSize) {
      count += boxTypes[index][0];  
      total += boxTypes[index][0] * boxTypes[index][1];
    }
    else {
      total += (truckSize-count) * boxTypes[index][1];
      count += truckSize-count;
    }
  }
  return total;
};

const boxTypes = [[5,10],[2,5],[4,7],[3,9]];
const truckSize = 10;

chocolatesParcel(boxTypes, truckSize);
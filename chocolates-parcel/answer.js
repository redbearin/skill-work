const chocolatesParcel = (nSmall, nBig, order) => {
  // number of small parcels
  let numSmall = 0;
  // use max number of big pieces
  while (nBig > 0) {
    if (order - 5 === 0 || order - 5 >= 2) {
      order -= 5;
      nBig--;
    }
    else
      break;  
  }
  // return number of small pieces
  // to fill order
  while (order > 0) {
    if (order - 2 === 0) {
      numSmall++;
      return numSmall;
    }
    if (order - 2 >= 2) {
      order -= 2;
      numSmall++;
      nSmall--;
    }
    else 
      break;
  }
  // order cannot be filled
  return -1;
};

const nSmall = 4;
const nBig = 1;
const order = 13;

chocolatesParcel(nSmall, nBig, order);
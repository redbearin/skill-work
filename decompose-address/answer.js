const decomposeAddress = (address) => {
  const arr = address.split(' ');
  arr[1] = arr[1] + ' ' + arr[2];
  arr.splice(2, 1);
  // remove the comma from the last word of city
  arr[arr.length - 3] = arr[arr.length - 3].slice(0, arr[arr.length - 3].length -1);
  // combine city name when more than one word
  if (arr.length === 6) {
    arr[2] = arr[2] + ' ' + arr[3];
    arr.splice(3, 1);
  }
  return arr;
}

const address = "8919 Scarecrow Ct Idaho Falls, ID 80193";

decomposeAddress(address);

function addBinary(binary1, binary2){
  let decimalTotal = parseInt(binary1, 2) + parseInt(binary2, 2);
  return (decimalTotal >>> 0).toString(2);
}

const binary1 = "1010";
const binary2 = "1011";
addBinary(binary1, binary2);
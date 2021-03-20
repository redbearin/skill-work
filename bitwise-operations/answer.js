const bitwiseAND = (x, y) => {
  return "Bitwise AND of " + x + " and " + y + " is " + (x & y) + '.';
}

const bitwiseOR = (x, y) => {
  return "Bitwise OR of " + x + " and " + y + " is " + (x | y) + '.';
}

const bitwiseXOR = (x, y) => {
  return "Bitwise XOR of " + x + " and " + y + " is " + (x ^ y) + '.';
}

const x = 7;
const y = 12;

document.getElementById("answer").innerHTML = bitwiseAND(x, y);
document.getElementById("answer1").innerHTML = bitwiseOR(x, y);
document.getElementById("answer2").innerHTML = bitwiseXOR(x, y);
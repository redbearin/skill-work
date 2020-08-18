const bitwiseAND = (x, y) => {
  return x & y;
}

const bitwiseOR = (x, y) => {
  return x | y;
}

const bitwiseXOR = (x, y) => {
  return x ^ y;
}

const x = 7;
const y = 12;

document.getElementById("answer").innerHTML = bitwiseAND(x, y);
document.getElementById("answer1").innerHTML = bitwiseOR(x, y);
document.getElementById("answer2").innerHTML = bitwiseXOR(x, y);
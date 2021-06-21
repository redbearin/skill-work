function romanToInt(roman) {
  let numberArray = [];
  for (let index = 0; index < roman.length; index++) {
    if (roman[index] === 'I') {
      if (roman[index + 1] === 'V' || roman[index + 1] === 'X') {
        if (roman[index + 1] === 'V') numberArray.push(4);
        if (roman[index + 1] === 'X') numberArray.push(9);
        index++;
        continue;
      }
      else {
        numberArray.push(1); 
      }
    }

    if (roman[index] === 'X') {
      if (roman[index + 1] === 'L' || roman[index + 1] === 'C') {
        if (roman[index + 1] === 'L') numberArray.push(40);
        if (roman[index + 1] === 'C') numberArray.push(90);
        index++;
        continue;
      }
      else {
        numberArray.push(10); 
      }
    }

    if (roman[index] === 'C') {
      if (roman[index + 1] === 'D' || roman[index + 1] === 'M') {
        if (roman[index + 1] === 'D') numberArray.push(400);
        if (roman[index + 1] === 'M') numberArray.push(900);
        index++;
        continue;
      }
      else {
        numberArray.push(100); 
      }
    }

    if (roman[index] === 'V') numberArray.push(5);
    if (roman[index] === 'L') numberArray.push(50);
    if (roman[index] === 'D') numberArray.push(500);
    if (roman[index] === 'M') numberArray.push(1000);
  }
  return numberArray.reduce((a, b) => a + b, 0);
}

const roman = "MCMXCIV";

document.getElementById("number").innerHTML = romanToInt(roman);
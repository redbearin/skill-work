function maxScore(s) {
  let sArray = s.split('');
  let maxScore = 0;
  let front = '';
  let arrayPieces = [];
  var count = 1;
  while (count < s.length) {
    front += sArray.shift();
    arrayPieces.push([front, sArray.join('')]);
    count++;
  }
  for (let index = 0; index < arrayPieces.length; index++) {
    let firstArray = arrayPieces[index][0].split('');
    let secondArray = arrayPieces[index][1].split('');
    let countZeroes = firstArray.reduce((accumulator, value) => { 
      if (value === '0') accumulator ++;
      return accumulator}, 0);
    let countOnes = secondArray.reduce((accumulator, value) => { 
      if (value === '1') accumulator ++;
      return accumulator}, 0);
    if (countZeroes + countOnes > maxScore) {
      maxScore = countZeroes + countOnes;
    }
  }
  return maxScore;
}

const s = "011101";

document.getElementById('answer').innerHTML = maxScore(s);


const soroban = (arr) => {
  let sum = 0;
  // sum upper deck
  for (let i = 0; i < arr[1].length; i++) {
    if (arr[1][i] === 'O') 
      sum += Math.pow(10, (arr[1].length - 1) - i) * 5;
  }
  // sum lower deck
  for(let i = 4; i < 8; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === '|') 
        sum += Math.pow(10, (arr[i].length - 1) - j) * (i - 3);
    }
  }
  return sum;
}

const arr = [
  "||OO||O",
  "OO||OO|",
  "-------",
  "OO|OO||",
  "OOO|OOO",
  "OOOO|OO",
  "|OOOOOO",
  "O|OOOOO"
];

document.getElementById('ans').innerHTML = soroban(arr);


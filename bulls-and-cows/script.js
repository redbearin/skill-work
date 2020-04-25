const secret = '1723';

function process() {
  const secretArr = secret.split('');
  const guess = document.getElementById('guess').value.toString();
  const guessArr = guess.split('');
  let cow = 0;
  let bull = 0;
  for(let index = 0; index < guessArr.length; index++) {
    if (secretArr[index] === guessArr[index]){
      bull++;
      secretArr[index] = 'x';
    } else {
      for (let index1 = 0; index1 < secretArr.length; index1++) {
        if(secretArr[index1] === guessArr[index]) {
          cow++;
          secretArr[index1] = 'x';
        }
      }
    }
  }
  document.getElementById('output').innerHTML = bull +'A' + cow + 'B' ;
}





const convertToTitle = (n) => {
  let letterCombo = "";
  let letter;
  while(n > 0){
    n--;
    // get to the right letter of alpha by 
    // starting at 65 in ASCII
    letter = String.fromCharCode(n % 26 + 65);
    // note the order here is very important
    letterCombo = letter + letterCombo;
    // get to the next letter
    n = Math.floor(n / 26); 
  }  
  return letterCombo;
}

const n = 701;
convertToTitle(n);
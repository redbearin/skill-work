const alphabetIndex = (alphabet, str) => {
  let highestPos = 0;
  let position;
  let finalLtr;
  let ltr;
  for (let i = 0; i < str.length; i++) {
    // convert capital letters to lowercase
    if (str.charCodeAt(i) < 91)
      ltr = str[i].toLowerCase();
    else
      ltr = str[i];

    // current position
    position = alphabet.indexOf(ltr) + 1;

    // position greater than current 
    // highest position; change
    // final ltr and highest position
    if (position > highestPos) {
      highestPos = position;
      finalLtr = ltr;
    }
  }
  return highestPos + finalLtr;
}

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const str = "Flavio";

document.getElementById('ans').innerHTML = alphabetIndex(alphabet, str);
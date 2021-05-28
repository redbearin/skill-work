const canBuild = (word, tiles) => {
  let capLtr, idx;
  for (let i = 0; i < word.length; i++) {
    // convert letter in word to capital letter
    capLtr = word[i].toUpperCase();
    // find index of cap of letter in word
    idx = tiles.indexOf(capLtr);
    // can't find letter
    if (idx === -1)
      idx = tiles.indexOf('#');
    // can't find wild tile
    if (idx === -1)
      return false;
    // mark tile as taken
    tiles[idx] = '*';
  }
  return true;
}

const word = "sharp";

const tiles =  ["S", "K", "H", "#", "#", "F", "F"]

document.getElementById('ans').textContent = canBuild(word, tiles);
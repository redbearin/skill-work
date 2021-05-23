const coconutTranslator = (word) => {
  // array to hold binary representations
  const arr = [];
  // binary numbers converted to coconuts representations
  const coco = [];
  let trans, bin;
  // correlations between coconut letters and binary number index
  transIdx = {0: 'c', 1: 'o', 2: 'c', 3: 'o', 4: 'n', 5: 'u', 6: 't', 7: 's'}

  for(let i = 0; i < word.length; i++) {
    // build binary
    bin = word.charCodeAt(i).toString(2);
    // add leading zeroes that were cut off
    if (bin.length < 8) {
      for (let i = 0; i < 8 - bin.length; i++)
        bin = '0' + bin;
    }
    // add binary number for letter to array
    arr.push(bin);
  }
  // convert the binary number to coconuts based
  // on zero one pattern
  for(let i = 0; i < arr.length; i++) {
    // initialize the translation
    trans = '';
    // go through digit by digit in binary number
    for(let j = 0; j < arr[i].length; j++) {
      // zero -- lowercase translation
      if (arr[i][j] === '0')
        trans += transIdx[j];
      // one -- capital translation
      else
        trans += transIdx[j].toUpperCase();
    }
    coco.push(trans);
  }
  return coco.join(' ');
}

const word = "Hi";

document.getElementById('ans').textContent = coconutTranslator(word);


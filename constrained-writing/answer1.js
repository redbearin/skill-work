const constraint = (sentence) => {
  let pangram = false;
  let heterogram = true;
  let tautogram = true;
  let transgram = true;

  // modified sentence with everything
  // but letters and spaces removed
  let sentMod = '';

  // remove everything but letters and spaces
  for (let index = 0; index < sentence.length; index++) {
    if (sentence.charCodeAt(index) > 64 && sentence.charCodeAt(index) < 91)
      sentMod += sentence[index].toLowerCase();
    if (sentence.charCodeAt(index) > 96 && sentence.charCodeAt(index) < 123 || sentence.charCodeAt(index) === 32)
      sentMod += sentence[index];
  }

  // array of words in sentMod
  const sentArr = sentMod.split(' ');

  // create object to hold each letter
  const letterCounts = {};

  // create an object of letters and letter counts
  for (let index = 0; index < sentArr.length; index++){
    for (let index1 = 0; index1 < sentArr[index].length; index1++) {
      if (letterCounts[sentArr[index][index1]])
        letterCounts[sentArr[index][index1]] += 1;
      else
        letterCounts[sentArr[index][index1]] = 1;
    }
  }

  // PANGRAM
  if (Object.keys(letterCounts).length === 26){
    pangram = true;
  }

  // HETEROGRAM
  for (key in letterCounts) {
    if(letterCounts[key] > 1) 
      heterogram = false;
  }

  // TAUTOGRAM
  const firstLetter = sentArr[0][0];
  for(let index = 1; index < sentArr.length; index++) {
    if(firstLetter !== sentArr[index][0])
      tautogram = false;
  }

  // TRANSGRAM
  // array of letters in first word
  const arrFirstWord = sentArr[0].split('');
  // loop through word by word
  for(let index = 1; index < sentArr.length; index++) {
    // stops loop if not a transgram
    if (transgram === false)
      break;
    // loop letter by letter 
    for(let index1 = 0; index1 < sentArr[index].length; index1++) {
      // match to a letter in first word
      // go to next word
      if (arrFirstWord.includes(sentArr[index][index1])) {
         break;
      }
      // last index and no match
      // is not a transgram
      if(sentArr[index].length - 1 === index1) {
        transgram = false;
      }
    }
  }
  return 'Pangram: ' + pangram + 
         ', Heterogram: ' + heterogram + 
         ', Tautogram: ' + tautogram + 
         ', Transgram: ' + transgram;
};

const sentence = "The unbearable lightness of coding...";

constraint(sentence);
const constraint = (sentence) => {
  let pangram = false;
  let heterogram = true;
  let tautogram = true;
  let transgram = true;

  // create object to hold each letter
  const letterCounts = {};
  // remove capital at beginning and period at end
  const sentMod = sentence[0].toLowerCase()+ sentence.slice(1, sentence.length - 1);
  // array of words
  const sentArr = sentMod.split(' ');

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

const sentence = "The quick brown fox jumps over the lazy dog.";

constraint(sentence);
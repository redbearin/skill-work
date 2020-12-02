const pigLatinSentence = (phrase)=> {
  const arr = phrase.split(' ');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const final = [];
  // cycle through each word
  for (let index =  0; index < arr.length; index++) {
    // first letter is a vowel
    // add 'way' to end and move to next word
    if (vowels.includes(arr[index][0])) {
      final.push(arr[index] + 'way');
      continue;
    }
    let begCons =  '';
    for (let index1 =  0; index1 < arr.length; index1++) {
      // is a vowel
      if (vowels.includes(arr[index][index1])) {
        // word after beginning consonants +
        // beginning consonants + 'ay'
        final.push(arr[index].slice(index1) + begCons + 'ay');
        //reset beginning consonants
        begCons = '';
        //move to next word
        break;
      }
      // not a vowel
      else {
        // have not reached a vowel
        begCons += arr[index][index1];
      }
    }
  }
  return final.join(' ');
};

const phrase = "this is pig latin";

pigLatinSentence(phrase);
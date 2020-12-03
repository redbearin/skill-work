const spoonerise = (phrase)=> {
  const arr = phrase.split(' ');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const final = [];
  const cons = [];
  // cycle through each word
  for (let index =  0; index < arr.length; index++) {
    let begCons =  '';
    for (let index1 =  0; index1 < arr[index].length; index1++) {
      // is a vowel
      if (vowels.includes(arr[index][index1])) {
        // word after beginning consonants +
        // beginning consonants
        final.push(arr[index].slice(index1));
        cons.push(begCons);
        //reset beginning consonants
        begCons = '';
        //move to next word
        break;
      }
      // not a vowel
      else {
        begCons += arr[index][index1];
      }
    }
  }
  final[0] = cons[1] + final[0];
  final[1] = cons[0] + final[1];
  return final.join(' ');
};

const phrase = "chow mein";

spoonerise(phrase);
const sameVowelGroup = (arr) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const firstWordVowels = [];
  const final = [arr[0]];
  // find vowels in first word
  for (let ltr = 0; ltr < arr[0].length; ltr++) {
    if (vowels.includes(arr[0][ltr])) {
        firstWordVowels.push(arr[0][ltr]);
    }
  }
  // remove duplicate first word vowels
  let uniquefirstWordVowels = [...new Set(firstWordVowels)];
  for (let word = 1; word < arr.length; word++) {
    for (let ltr = 0; ltr < arr[word].length; ltr++) {
      // vowel is not in the first word
      if (vowels.includes(arr[word][ltr]) && 
          !uniquefirstWordVowels.includes(arr[word][ltr])) {
        break;
      }
      // word only includes vowels in first wordd
      if (ltr === arr[word].length - 1)
        final.push(arr[word]);
    }
  }
  return final;
}

const arr = ["hoops", "chuff", "bot", "bottom"];

document.getElementById('ans').innerHTML = sameVowelGroup(arr);
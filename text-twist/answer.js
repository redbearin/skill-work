const totalPoints = (words, base) => {
  // split the base into an array of letters
  const baseArr = base.split('');
  // copy baseArr to another reference location
  let arr = [...baseArr];
  let index;
  // counter for letters in word
  let count = 0;
  // sum of all the word points
  let sum = 0;
  // points associated with word lengths
  // 0 designates a word that does not match letters in base
  const points = {0: 0, 3: 1, 4: 2, 5: 3, 6: 54};
  // go through word by word in words array
  for (let i = 0; i < words.length; i++) {
    // go through letter by letter in each word
    for (let j = 0; j < words[i].length; j++)  {
      // find the index of the match in the base word
      index = arr.indexOf(words[i][j]);
      // no match
      if (index === -1) {
        count = 0;
        break;
      }
      // mark the letter in the arr as taken
      arr[index] = '*';
      // increment the letter count
      count++;
    }
    // add to sum based on word length (from count)
    sum += points[count];
    // reset the array with contents of baseArr
    arr = [...baseArr];
    // reset the letter count
    count = 0;
  }
  return sum;
}

const words = ["dote", "dotes", "toes", "set", "dot", "dots", "sted"]

const base = "tossed";

document.getElementById('ans').textContent = totalPoints(words, base);
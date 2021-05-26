const trueAlphabetic = (str) => {
  const wordArr = str.split(' ');
  const ltrArr = str.split(' ').join('').split('');
  ltrArr.sort();
  let reordered = '';
  // initialize the letter array index
  let ltrArrIdx = 0;
  // cycle word through word through word array
  // to get right word position
  for (let i = 0; i < wordArr.length; i++) {
    // cycle letter by letter through each word
    // to get the right letter position
    for (let j = 0; j < wordArr[i].length; j++) {
      //add letter to reordered word
      reordered += ltrArr[ltrArrIdx];
      // increment the sorted letter array index
      ltrArrIdx++;
    }
    // last word
    if (i === wordArr.length - 1)
      return reordered;
    // not last word add a space
    else 
      reordered += ' ';
  }
}
const str = "have a nice day";

document.getElementById('ans').textContent = trueAlphabetic(str);
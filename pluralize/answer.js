const pluralize = (arr) => {
  const obj = {};
  // place each word into object 
  // note the number of occurances
  for (let index = 0; index < arr.length; index++) {
    if (obj[arr[index]])
      obj[arr[index]] = obj[arr[index]] + 1;
    else 
      obj[arr[index]] = 1;
  }
  // go through each word (key) in object
  for (let word in obj) {
    // more than one of that word
    if (obj[word] > 1) {
      // go through arr, find those words and
      // add an 's' to the end of the word
      for (let index = 0; index < arr.length; index++) {
        if (arr[index] === word)
          arr[index] = word + 's';
      }
    }
  }
  return arr;
}

const arr = ["chair", "pencil", "arm"];
pluralize(arr);

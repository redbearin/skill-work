var areSentencesSimilar = (sentence1, sentence2) => {
  // sentence 1 and sentence 2 are same
  if (sentence1 === sentence2)
    return true;
  // define variales
  let smaller, bigger;

  // break sentences into arrays
  const arr1 = sentence1.split(' ');
  const arr2 = sentence2.split(' ');

  // define bigger and smaller arrays
  // return false for arrays are of similar
  // sizes, but were not same (see lines 3 & 4)
  if (arr1.length < arr2.length) {
    smaller = arr1;
    bigger  = arr2;
  }
  else if (arr1.length > arr2.length) {
    bigger = arr1;
    smaller  = arr2;
  }
  // same length, but different words
  else {
    return false;
  }
  // first or last word the same
  if (smaller[0] === bigger[0] && 
      smaller[smaller.length - 1] === bigger[bigger.length - 1])
    return true;
  // smaller is only one word
  if (smaller.length === 1) {
    if (smaller[0] === bigger[0] || 
        smaller[smaller.length - 1] === bigger[bigger.length - 1]) 
      return true;
    // same word is in middle
    else
      return false;
  }
};

const sentence1 = "of";

const sentence2 = "A lot of words";

document.getElementById('ans').innerHTML = areSentencesSimilar(sentence1, sentence2);
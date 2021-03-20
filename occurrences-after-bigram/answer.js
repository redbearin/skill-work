const findOcurrences = (text, first, second) => {
  // split text into array of words
  const textArr = text.split(' ');
  const thirdWords = [];
  // cycle through array
  for (let index = 0; index < textArr.length - 2; index++) {
    // element = first and next element = second
    if(textArr[index] === first && textArr[index + 1] === second)
    // push the next element to thirdWords array
    thirdWords.push(textArr[index + 2]);
  }
  return thirdWords;
};

const text = "we will we will rock you";
const first = "we";
const second = "will";
findOcurrences(text, first, second);

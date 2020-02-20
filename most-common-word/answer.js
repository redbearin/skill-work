function mostCommonWord(paragraph, banned) {
  paragraph = paragraph.split(' ');
  for (let index2 = 0; index2 < paragraph.length; index2++) {
    let word = paragraph[index2];
    word = word.replace(/[^\w]/g, '');
    word = word.toLowerCase();
    paragraph[index2] = word;
  }
  let mostFrequent = null;
  let mostCount = 0;
  for (let index = 0; index < paragraph.length; index++) {
    let count = 0;
    for (let index1 = 0; index1 < paragraph.length; index1++) {
      if (index === index1) continue;
      if (paragraph[index] === paragraph [index1]) {
        count++;
      }
    }
    if (count > mostCount && paragraph[index] !== banned) {
      mostFrequent = paragraph[index];
    }
  }
  return mostFrequent;
}

const paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
const banned = 'hit';

mostCommonWord(paragraph, banned);
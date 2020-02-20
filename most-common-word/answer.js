function mostCommonWord(paragraph, banned) {
  paragraph = paragraph.split(' ');
  for (let index2 = 0; index2 < paragraph.length; index2++) {
    let word = paragraph[index2];
    word = word.replace(/[^\w]/g, '');
    word = word.toLowerCase();
    paragraph[index2] = word;
  }

  console.log(paragraph)
  var mostFrequent = null;
  var mostCount = 0;
  for (var index = 0; index < paragraph.length; index++) {
    var count = 0;
    for (var index1 = 0; index1 < paragraph.length; index1++) {
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

var paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
var banned = 'hit';

mostCommonWord(paragraph, banned);
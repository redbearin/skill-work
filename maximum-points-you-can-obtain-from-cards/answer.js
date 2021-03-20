const maxScore = (cardPoints, k) => {
  let left = 0;
  let right = 0;
  //total k card points on front end of array
  for (let index =0; index < k - 1; index++) {
    left += cardPoints[index];
  }
  //total k card points on backend of array
  for (let index = cardPoints.length - 1; index > cardPoints.length - 1 - k; index--) {
    right += cardPoints[index];
  }

  return right >= left ? right : left;
}

const cardPoints = [1,79,80,1,1,1,200,1];
const k = 3;
maxScore(cardPoints, k);
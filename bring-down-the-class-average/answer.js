const takeDownAverage = (scores) => {
  let total = 0;
  for (let index = 0; index < scores.length; index++) {
    total += +scores[index].slice(0, scores[index].length - 1);
  }
  let avg = total / scores.length;
  return Math.round((avg - 5) * (scores.length + 1) - total) + '%';
};

const scores = ["53%", "79%"];

takeDownAverage(scores);
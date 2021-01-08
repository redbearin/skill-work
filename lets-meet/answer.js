const letsMeet = (dist, vA, vB) => {
  let totalSeconds = (dist / (vA + vB)) * 3600;
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.round(totalSeconds % 60);
  return + hours + "h " + minutes + "min " + seconds + "s";
};

const dist = 90;
const vA = 75;
const vB = 65;
letsMeet(dist, vA, vB);

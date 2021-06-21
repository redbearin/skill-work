const numPairsDivisibleBy60 = (time) => {
  let count = 0;
  for (let index = 0; index < time.length - 1; index++) {
    for (let index1 = index + 1; index1 < time.length; index1++) {
      if ((time[index] + time[index1]) % 60 === 0)
        count++;
    }
  }
  return count;
};

const time = [60,60,60]; 

numPairsDivisibleBy60(time);
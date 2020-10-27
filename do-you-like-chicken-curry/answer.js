const product = (pair1, pair2, pair3) => {
  return (pair1[0]*pair2[0]*pair3[0]) + (pair1[1]*pair2[1]*pair3[1]);
};

const pair1 = [1,2];
const pair2 = [1,1];
const pair3 = [2,3];

product(pair1, pair2, pair3);
const computeArea = (A, B, C, D, E, F, G, H) => {
  // first rectangle area
  const rectA = (Math.abs(A - C) * Math.abs(B - D));
  // second rectangle area
  const rectB = (Math.abs(E - G) * Math.abs(F - H));
  //overlap in x direction
  const x = A <= E ? Math.abs(C - E) : Math.abs(G - A);
  // overlap in y direction
  const y = B <= F ? Math.abs(F - D) : Math.abs(B - H);
  // area of first rect + area second rect - area of overlap
  return rectA + rectB - (x * y);
}

const A = -3;
const B = 0;
const C = 3;
const D = 4;
const E = 0;
const F = -1;
const G = 9;
const H = 2;

computeArea(A, B, C, D, E, F, G, H);
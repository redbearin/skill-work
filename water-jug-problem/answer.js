function canMeasureWater(x, y, z) {
  if ((x + y) % z === 0) return true;
  else return false;
}

const x = 3;
const y = 5; 
const z = 4;

canMeasureWater(x, y, z);

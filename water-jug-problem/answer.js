function canMeasureWater(x, y, z) {
  if ((x + y) % z === 0) return true;
  else return false;
}

x = 3;
y = 5; 
z = 4;

canMeasureWater(x, y, z);

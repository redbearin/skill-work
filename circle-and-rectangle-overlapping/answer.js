const checkOverlap = (radius, x_center, y_center, x1, y1, x2, y2) => {
  const xRight = x_center + radius;
  const xLeft = x_center - radius;
  const yTop = y_center + radius;
  const yBottom = y_center -radius;

  if (xRight >= x1 && xRight <= x2 && y_center <= y2 && y_center >= y1) return true;

  if (xLeft >= x1 && xLeft <= x2 && y_center <= y2 && y_center >= y1) return true;

  if (x_center >= x1 && x_center <= x2 && yTop <= y2 && yTop >= y1) return true;

  if (x_center >= x1 && x_center <= x2 && yBottom <= y2 && yBottom >= y1) return true;  

  else return false;  
};

const radius = 1;
const x_center = 1; 
const y_center = 1;
const x1 = 1;
const y1 = -3; 
const x2 = 2;
const y2 = -1;

checkOverlap(radius, x_center, y_center, x1, y1, x2, y2);
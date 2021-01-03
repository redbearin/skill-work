const coneVolume = (height, radius) => {
  return (Math.PI * Math.pow(radius, 2) * height / 3).toFixed(2);
};

const height = 15;
const radius = 6;

coneVolume(height, radius);
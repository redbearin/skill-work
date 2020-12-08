const buildArray = (target, n) => {
  let operations = [];
  let count = 1;
  for (index = 0; index < target.length; index++) {
    if (target[index] === count) {
      operations.push('push');
      count++;
    } 
    else {
      while (target[index] >= count) {
        if (target[index] > count) {
          operations.push('push');
          operations.push('pop');
          count++;
        } else {
          operations.push('push');
          count++;          
        }
      }
    }
  }
  return operations;
};

const target = [2,3,4];
const n = 4;

buildArray(target, n);
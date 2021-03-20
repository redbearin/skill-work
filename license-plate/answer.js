const licensePlate = (str, grp) => {
  let count = 1;
  let final= [];
  for (let index = str.length - 1; 0 <= index; index--) {
    if (str[index] === '-') 
      continue;
    else if (count === grp && index !== 0) {
      final.unshift('-', str[index].toUpperCase());
      count = 1;
    }  
    else {
      final.unshift(str[index].toUpperCase());
      count++;
    }
  }
  return final.join('');
};
const str = "nlj-206-fv";
const grp = 3;

licensePlate(str, grp);
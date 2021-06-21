const canBeEqual = (target, arr) => {
  // sort arrays and convert to strings
  const targetStr = target.sort((a,b) => a - b).join('');
  const arrStr = arr.sort((a,b) => a - b).join('');    
  // compare strings and return true if a match  
  if (targetStr === arrStr) 
    return true;
  else 
    return false;
};

const target = [3,7,9];
const arr = [3,7,11];

canBeEqual(target, arr);
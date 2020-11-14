const balanced = (str) => {
  let sumLeft = 0;
  let sumRight = 0;
  // total sum on left
  for (let index = 0; index < Math.floor(str.length/2); index++) {
    sumLeft += str.charCodeAt(index) - 96;
  }
   // total sum on right
   for (let index = str.length - 1; index >  Math.ceil(str.length/2) - 1; index--) {
     sumRight += str.charCodeAt(index) - 96;
  }
  if (sumLeft === sumRight)
   return true;
  else
   return false;
 };
 
 const str = "brake";
 
 balanced(str);
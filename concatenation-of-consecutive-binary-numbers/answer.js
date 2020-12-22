const concatenatedBinary = (n) => {
  binaryStr = '';
   for (let num = 1; num <= n; num++) {
     binaryStr += num.toString(2);
   }
   const newNum = parseInt(binaryStr, 2);
   const rem = newNum % Math.pow(10, 9);
   return rem === newNum ? newNum :  rem + 7;
 };
 
 const n = 12;
 concatenatedBinary(n);
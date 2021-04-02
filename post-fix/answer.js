const postfix = (str) =>{
  strArr = str.split(' ');
  let newComp = [];
  let num1, num2, i;
  // keep going until you have one number
  while (strArr.length > 1){
    i = 0;
    while (i < strArr.length) {
      // two numbers and an operator
      // sequence not past end of array
      if(i <= strArr.length - 3 && 
         !isNaN(strArr[i]) && 
         !isNaN(strArr[i+1]) && 
         isNaN(strArr[i+2])) {
        num1 = +strArr[i];
        num2 = +strArr[i+1];
        if (strArr[i+2] === '*')
          newComp.push(num1 * num2);
        if (strArr[i+2] === '+')
          newComp.push(num1 + num2);
        if (strArr[i+2] === '-')
          newComp.push(num1 - num2);
        if (strArr[i+2] === '/')
          newComp.push(num1 / num2);
        i += 3;
      }
      // not two numbers and an operator
      else {
        newComp.push(strArr[i]);
        i++;
      }
    }
    // assign the new components to the strArr
    strArr = [...newComp];
    // reset the new components array
    newComp = [];
  }
  return strArr.join('');
}

const str = "8 4 / 9 * 3 1 * /";

document.getElementById('ans').innerHTML = postfix(str);
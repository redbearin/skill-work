const sum2 = (num1, num2) => {
  // one of nums is not a number
  if (isNaN(num1) || isNaN(num2))
    return "-1";
  // replace '' with zero
  if (num1 === '')
    num1 = '0';
  if (num2 === '')
    num2 = '0';  
  // amount to carry between columns
  let carry = 0;
  // string of sum
  let sum = '';
  // longest number length
  let len;
  // amount to subtract from index to adjust 
  // the index for numbers shorter or longer
  let subFromNum1Idx;
  let subFromNum2Idx;

  // number two has fewer digits
  if(num1.length < num2.length) {
    len = num2.length;
    subFromNum1Idx = num2.length - num1.length;
    subFromNum2Idx = 0;
  }   
  // number one has fewer digits
  if(num1.length > num2.length) {
    len = num1.length;
    subFromNum2Idx = num1.length - num2.length;
    subFromNum1Idx = 0;
  }  
  // numbers have same number of digits
  if(num1.length === num2.length) {
    len = num1.length;
    subFromNum1Idx = 0;
    subFromNum2Idx = 0;
  }
  // go through the digits one by one starting at the last
  for (let index = len - 1; index >= 0; index--) {
    
    // no digit in first number
    if(!num1[index - subFromNum1Idx]) 
      newNum = parseInt(num2[index - subFromNum2Idx]) + carry;
    // no digit in second number
    else if (!num2[index - subFromNum2Idx]) 
      newNum = parseInt(num1[index - subFromNum1Idx]) + carry;
    // digits in both numbers
    else 
      newNum = parseInt(num1[index - subFromNum1Idx]) + parseInt(num2[index - subFromNum2Idx]) + carry;

    // set the carry for the next column
    // sum of digits 10 or greater
    if(newNum > 9)
      // a 1 will be carried
      carry = 1;
    // sum of digits less than 10
    else
      carry = 0;

    // convert summed number to a string
    let strNum = newNum.toString();
    
    // add the last digit of number to front of string number
    sum = strNum[strNum.length - 1] + sum;
    // reached the first digit and there is a carry
    // add a one to the front of the number
    if (index === 0 && carry === 1)
      sum = 1 + sum;
  }
  // return the sum as a string
  return sum;
};

const num1 = "1874682736267235927359283579235789257";
const num2 = "32652983572985729";

sum2(num1, num2);





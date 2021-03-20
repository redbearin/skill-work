const reformatNumber = (number) => {
  let numArr = [];
  let final = [];
  
  for(let index = 0; index < number.length; index++) {
    if (!isNaN(number[index]))
      if (number[index] !== '-')
        if (number[index] !== ' ')
          numArr.push(number[index]);
  }
  while (numArr.length > 4)
    final.push(numArr.splice(0, 3),'-');

  if (numArr.length === 4) {
    final.push(numArr.splice(0, 2),'-');
    final.push (numArr.splice(0, 2));
  }

  if (numArr.length <= 3)
    final.push (numArr);

  return final.flat(1).join('');
};

const number = "12";

reformatNumber(number);
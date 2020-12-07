const maxPossible = (first, second) => {
  const firStr = first.toString();
  const sorted2nd = second.toString().split('').sort((a,b) => b-a).join('').toString();
  let count = 0;
  let final = '';
  for (let index = 0; index < firStr.length; index++) {
    if(+firStr[index] < sorted2nd[count] && count <= sorted2nd.length) {
      final += sorted2nd[count];
      count++;
    } 
    else
      final += firStr[index];
  } 
  return +final;
};

const first = 523;
const second = 76;

maxPossible(first, second);

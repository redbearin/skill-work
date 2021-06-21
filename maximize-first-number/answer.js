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
  const arr1 = first.toString().split('');
  const arr2 = second.toString().split('');
  arr2.sort((a,b) => b - a);
  for (let index = 0; index < arr2.length; index++) {
    for (let index1 = 0; index1 < arr1.length; index1++)
    if (arr2[index] > arr1[index1]) {
      arr1[index1] = arr2[index];
      break;
    }
  }
  return +arr1.join('');
}
const first = 8732;
const second = 91255;
maxPossible(first, second);


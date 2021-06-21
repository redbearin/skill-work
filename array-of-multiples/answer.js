const arrayOfMultiples = (num, length)  => {
  const multArray = [];
  for (let count = 1; count <= length; count++) {
    multArray.push(count * num);
  }
  return multArray;
}
const num  = 12;
const length = 10;
arrayOfMultiples(num, length);
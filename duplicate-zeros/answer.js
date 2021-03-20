function duplicateZeros(numbers) {
  for (var index = numbers.length -1; 0 <= index; index--) {
    if (numbers[index] === 0) {
      numbers.splice(index, 0, 0);
      numbers.pop();
    }
  }
  return numbers;
};

var numbers = [1,0,2,3,0,4,5,0];

duplicateZeros(numbers);
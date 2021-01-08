function twoSum(numbers, target) {
  for(var index = 0; index < numbers.length; index++) {
    for (var index1 = index + 1; index1 < numbers.length; index1++) {
      if (numbers[index] + numbers[index1] === target) {
        return [index, index1];
      }
    }
  }
}

var numbers = [2,7,11,15];
var target = 22;

twoSum(numbers, target);
function sortedSquares(numbers) {
  var squareNumbers = numbers.map(number => Math.pow(number,2));
  return squareNumbers.sort((a,b) => a - b);
};

var numbers = [-7,-3,2,3,11];

sortedSquares(numbers);
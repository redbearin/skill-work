function findNthDigit(n) {
    var numberArray = [];
    var number = 1;
    while (numberArray.length < n + 1) {
        numberArray.push(number);
        var numberMerged = numberArray.join('');
        numberArray = numberMerged.split('');
        number++;
    }
    return numberArray[n - 1];
}
var n = 15;
console.log(findNthDigit(n));
